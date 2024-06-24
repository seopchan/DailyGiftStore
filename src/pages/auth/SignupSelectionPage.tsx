import { Button } from '@/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';


const SignupSelectionPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>SignupSelectionPage</h1>
      {/* 이메일 로그인 버튼 */}
      <Button
        onClick={() => {
          // 네비게이션으로 이동
          navigate('/signup');
        }}
      >이메일로 회원가입</Button>
      {/* 구글 로그인 버튼 */}
      <Button>구글 회원가입</Button>
    </div>
  );
}

export default SignupSelectionPage;
