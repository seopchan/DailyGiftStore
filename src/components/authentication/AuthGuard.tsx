import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  // 인증하던 중 나갔을 경우 다시 로그인을 해 아이디 받아옴
  // if (!id && !isConfirmed) {
  //   // 회원가입 페이지로 리디렉션
  //   return <SignupFormPage />;
  // }

  // 인증되지 않은 사용자는 로그인 페이지로 리디렉션
  if (!user) {
    // replace: true로 설정하면 이전 페이지를 스택에 남기지 않음 -> 뒤로가기 버튼을 눌러도 인증이 필요한 페이지로 이동하지 않음
    return <Navigate to="/signin" replace={true} />;
  }

  return <Fragment>{children}</Fragment>;
};

export default AuthGuard;
