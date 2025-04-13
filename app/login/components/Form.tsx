import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { styles } from './Form.styles';
import { LoginResponse } from '../hooks/useLogin';
import { router } from 'expo-router';
import { useState } from 'react';

interface FormProps {
  onSubmit: () => Promise<LoginResponse>;
  email?: string;
  password?: string;
  setEmail?: (email: string) => void;
  setPassword?: (password: string) => void;
  isLoading?: boolean;
}

export const Form = (props: FormProps) => {

  const { onSubmit, email, password, setEmail, setPassword, isLoading } = props;

  const [wrongCredentials, setWrongCredentials] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }
    setWrongCredentials(false);
    const response = await onSubmit();
    if (!response.success) {
      setWrongCredentials(true);
      return;
    }

    router.replace('/(tabs)');
  };

  const WrongCredentialsMessage = () => {
    if (!wrongCredentials) {
      return null;
    }
    return (
      <Text style={{ color: 'red', marginTop: 4 }}>Incorrect email or password. Try again.</Text>
    );
  };

  return (
    <View style={styles.form}>
      <View>
        <Text variant='titleMedium'>Username</Text>
        <TextInput autoCapitalize='none' autoCorrect={false} value={email} onChangeText={setEmail} dense mode="outlined" />
      </View>
      <View style={styles.passwordContainer}>
        <Text variant='titleMedium'>Password</Text>
        <TextInput autoCapitalize='none' autoCorrect={false} value={password} onChangeText={setPassword} dense secureTextEntry mode="outlined" />
      </View>
      <WrongCredentialsMessage />
      <Button disabled={isLoading} loading={isLoading} onPress={handleLogin} style={styles.confirmButton} mode="contained">Login</Button>
    </View>
  )
}