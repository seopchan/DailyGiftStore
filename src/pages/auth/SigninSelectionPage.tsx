import { Button } from "@/components/ui/button.tsx";

const SigninSelectionPage = () => {
  return (
    <div>
      <h1>Signin Selection Page</h1>
      {/* 이메일 로그인 버튼 */}
      <Button>이메일 로그인</Button>
      {/* 구글 로그인 버튼 */}
      <Button>구글 로그인</Button>
    </div>
  );
};

export default SigninSelectionPage;
