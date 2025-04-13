import { useState } from "react";
import { FirebaseAuthTypes, getAuth } from "@react-native-firebase/auth";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "@/firebase/firebase";

export interface SignUpResponse {
  success: boolean;
  user?: FirebaseAuthTypes.User;
  error?: string;
}

export const useSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (): Promise<SignUpResponse> => {
    setIsLoading(true);
    try {
      const auth = getAuth();
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const uid = userCredential.user.uid;

      const user = {
        uid: uid,
        name: name,
        email: email,
        createdAt: new Date().toISOString(),
      }

      await addDoc(collection(db, 'Users'), user);
      return { success: true, user: userCredential.user };
    } catch (error: any) {
      return { success: false, error: error.code };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    name,
    setName,
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSignUp,
    isLoading,
  };
};

