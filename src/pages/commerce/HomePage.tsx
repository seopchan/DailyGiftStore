import { Button } from '@/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      {/* 회원가입 화면으로 이동 */}
      <Button
        onClick={() => {
          // 네비게이션으로 이동
          navigate('/signup-selection');
        }}
      >회원가입</Button>
      {/* 로그인 화면으로 이동 */}
      <Button
        onClick={() => {
          // 네비게이션으로 이동
          navigate('/signup-selection');
        }}
      >로그인</Button>
    </div>
  );
}

export default HomePage;
