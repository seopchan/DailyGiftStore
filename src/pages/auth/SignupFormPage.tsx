import useAuth from "@/hooks/useAuth.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupFormPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const checkPassword = (password: string) => {
    // NIST - Electronic Authentication Guideline
    // 비밀번호 최소 8자리 이상, 영어 대문자, 소문자, 숫자, 특수문자 중 3종류 포함
    // 비밀번호 최대 64자리
    // 비밀번호 형태
    // 일련번호, 전화번호 등 쉬운 문자열이 포함되지 않도록 함
    // 아이디, 잘 알려진 단어, 키보드 상의 연속된 문자열이 포함되지 않도록 함
    if (password.length < 8) {
      setError("비밀번호는 8자리 이상이어야 합니다.");
      return false;
    }
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();

    // 비밀번호 길이 확인
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // 비밀번호 일치 확인
    if (password !== passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }

    // 회원가입 시도
    try {
      const success = await register(email, password);
      if (success) {
        console.log("Signup successful!");

        // 성공 alert
        alert("회원가입이 완료되었습니다.");

        // 추가적인 동작, 예: 로그인 페이지로 리디렉션
        navigate("/signin", { replace: true });
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (e) {
      setError("An error occurred.");
    }
  };

  return (
    <div>
      <h1>Signup Form</h1>
      <form
        onSubmit={handleSignup}
        className="flex flex-col w-1/4 mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {password.length < 6 && (
          <p className="text-red-500">
            {" "}
            비밀번호 길이는 6자 이상이어야 합니다.
          </p>
        )}
        <input
          type="password"
          placeholder="Password Confirm"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
        />
        {password !== passwordConfirm && (
          <p className="text-red-500"> 비밀번호가 일치하지 않습니다.</p>
        )}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupFormPage;
