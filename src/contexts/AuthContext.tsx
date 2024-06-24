// Firebase Authentication 사용
// 이메일, 구글, 아이폰, 카카오, 네이버 로그인 지원 -> 일단 이메일 로그인만 구현
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

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
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
  register: (email: string, password: string) => Promise<boolean>;
}

const initialState = {
  user: null,
  signIn: () => Promise.resolve(false),
  signOut: () => Promise.resolve(),
  register: () => Promise.resolve(false),
};

const AuthContext = createContext<AuthContextType>(initialState);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
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
      const response: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;

      if (user) {
        setUser({
          userId: user.uid,
          email: user.email,
        });
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      throw new Error("로그인 실패");
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (email: string, password: string) => {
    try {
      console.log("register", auth, email, password);
      await createUserWithEmailAndPassword(auth, email, password);

      return true;
    } catch (error) {
      console.error(error);
      throw new Error("회원가입 실패");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
