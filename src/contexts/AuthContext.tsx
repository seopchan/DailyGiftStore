// Firebase Authentication 사용
// 이메일, 구글, 아이폰, 카카오, 네이버 로그인 지원 -> 일단 이메일 로그인만 구현
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';


interface User {
  userId: string;
  email: string | null;
}

// type Payload = {
//   isConfirmed: boolean;
//   isAuthenticated: boolean;
// }

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  register: (email: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: async () => Promise.resolve(null),
  signOut: () => {},
  register: () => Promise.resolve(false),
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          userId: user.uid,
          email: user.email,
        });
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  }

  const register = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      return true;
    } catch (error) {
      throw new Error("회원가입 실패");
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
