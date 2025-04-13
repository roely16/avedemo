import { View } from "react-native";
import { Text, TextInput, Button, Icon } from "react-native-paper";
import { styles } from "./Form.styles";
import { SignUpResponse } from "@/app/signup";
import { useState } from "react";
import { router } from "expo-router";

const passwordRules = [
  {
    label: 'Al menos 8 caracteres',
    test: (pwd: string) => pwd.length >= 8
  },
  {
    label: 'Las contraseñas deben coincidir',
    test: (pwd: string, confirmPwd: string) => pwd === confirmPwd && pwd.length > 0 && confirmPwd.length > 0
  }
];

export const Form = ({
  name,
  setName,
  email,
  password,
  confirmPassword,
  setEmail,
  setPassword,
  setConfirmPassword,
  onSubmit,
  isLoading
}: {
  name: string;
  setName: (val: string) => void;
  email: string;
  password: string;
  confirmPassword: string;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  setConfirmPassword: (val: string) => void;
  onSubmit: () => Promise<SignUpResponse>;
  isLoading: boolean;
}) => {

  const [emailError, setEmailError] = useState('');

  const handleOnSubmit = async () => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const response = await onSubmit();
    if (!response.success) {
      if (response.error?.includes('auth/email-already-in-use')){
        setEmailError('Este correo ya está en uso');
      }
      return;
    }

    router.push('/(tabs)');
  }

  const isFormValid = () => {
    return (
      name.length > 0 && 
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword
    )
  }

  const handleEmailChange = (email: string) => {
    setEmail(email);
    if (emailError) {
      setEmailError('');
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.formInputContainer}>
        <Text variant="titleMedium">Name</Text>
        <TextInput value={name} onChangeText={setName} autoCorrect={false} dense mode="outlined" />
      </View>

      <View style={styles.formInputContainer}>
        <Text variant="titleMedium">Email</Text>
        <TextInput
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          dense
          mode="outlined"
          autoCapitalize={'none'}
          error={!!emailError}
        />
        {emailError && (
          <Text style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{emailError}</Text>
        )}
      </View>

      <View style={styles.formInputContainer}>
        <Text variant="titleMedium">Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          dense
          mode="outlined"
        />

        <View style={{ marginTop: 10 }}>
          {passwordRules.map((rule) => {
            const passed = rule.test(password, confirmPassword);
            return (
              <View
                key={rule.label}
                style={styles.passwordRuleContainer}
              >
                <Icon
                  source="check-circle"
                  color={passed ? 'green' : 'black'}
                  size={20}
                />
                <Text style={styles.passwordRule}>{rule.label}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.formInputContainer}>
        <Text variant="titleMedium">Confirm Password</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          dense
          mode="outlined"
        />
      </View>

      <Button onPress={handleOnSubmit} loading={isLoading} disabled={isLoading || !isFormValid()} style={styles.confirmButton} mode="contained">
        Register
      </Button>
    </View>
  );
};