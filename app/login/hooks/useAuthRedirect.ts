import { useEffect, useState } from "react";
import { getAuth } from "@react-native-firebase/auth";
import { router } from "expo-router";

export const useAuthRedirect = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.replace('/(tabs)');
      } 
      setIsLoading(false);

    });

    // Limpieza al desmontar
    return unsubscribe;
  }, []);

  return {
    isLoading
  }
}