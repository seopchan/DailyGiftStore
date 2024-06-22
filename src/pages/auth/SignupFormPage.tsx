import { auth } from '@/firebase.ts';
import useAuth from '@/hooks/useAuth.tsx';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const SignupFormPage = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e: any) => {
    e.preventDefault();
    console.log(email, password, passwordConfirm);
    console.log(JSON.stringify(auth));

    // 비밀번호 일치 확인
    if (password !== passwordConfirm) {
      setError('Passwords do not match.');
      return;
    }

    // 회원가입 시도
    try {
      createUserWithEmailAndPassword(auth, email, password)
      // const success = await register(email, password);
      // if (success) {
      //   console.log('Signup successful!');
      //   // 추가적인 동작, 예: 로그인 페이지로 리디렉션
      // } else {
      //   setError('Signup failed. Please try again.');
      // }
    } catch (e) {
      setError('An error occurred.');
    }
  };

  return (
    <div>
      <h1>Signup Form</h1>
      <form
        onSubmit={handleSignup}
        className="flex flex-col w-1/4 mx-auto space-y-4"
      >
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Password Confirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupFormPage;
