import { useState } from 'react';
import { FirebaseAuthTypes, getAuth } from '@react-native-firebase/auth';

export interface LoginResponse {
  success: boolean;
  user?: FirebaseAuthTypes.User;
  error?: string;
}

export const useLogin = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (): Promise<LoginResponse> => {
    setIsLoading(true);
    try {
      const auth = getAuth();
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      return { success: true, user: userCredential.user };
    } catch (error: any) {
      return { success: false, error: error.code };
    } finally {
      setIsLoading(false);
    }
  }
  return {
    handleLogin,
    email,
    password,
    setEmail,
    setPassword,
    isLoading
  }
};