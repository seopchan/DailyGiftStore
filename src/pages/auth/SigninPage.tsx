import useAuth from "@/hooks/useAuth.tsx";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (await signIn(email, password)) {
        alert("로그인 성공!");
        navigate("/", {});
        // replace
        // 사용자 마이페이지를 들어갈 때 -> 로그인이 되어있으면 마이페이지로 이동 아니면 로그인 페이지로 이동
        // replace: true -> 뒤로가기 했을 때 -> 기록이
      }
    } catch (e) {
      console.error(e);
    }
  };

  // TODO
  // if (loading) {
  //   return <LoadingScreen message={'Loading..'}/>
  // }

  return (
    <div>
      <h1>Signin Form</h1>
      <form
        className="flex flex-col w-1/4 mx-auto space-y-4"
        onSubmit={handleSignin}
      >
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Signin</button>
      </form>
    </div>
  );
};

export default SignInPage;
