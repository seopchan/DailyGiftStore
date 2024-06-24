import { Button } from "@/components/ui/button.tsx";

const SignupSelectionPage = () => {
  return (
    <div>
      <h1>SignupSelectionPage</h1>
      {/* 이메일 로그인 버튼 */}
      <Button>이메일 로그인</Button>
      {/* 구글 로그인 버튼 */}
      <Button>구글 로그인</Button>
    </div>
  );
};

export default SignupSelectionPage;
