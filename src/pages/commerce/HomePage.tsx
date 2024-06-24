import { Button } from '@/components/ui/button.tsx';
import useAuth from '@/hooks/useAuth.tsx';
import { Fragment } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { user, signOut } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <div>
          <p>안녕하세요, {user.email}님!</p>
          <Button
            onClick={() => {
              // 네비게이션으로 이동
              redirect('/mypage');
            }}
          >마이페이지</Button>
          <Button onClick={signOut}>로그아웃</Button>
        </div>
      ) : (
        <Fragment>
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
              navigate('/signin-selection');
            }}
          >로그인</Button>
        </Fragment>
        )
      }

    </div>
  );
}

export default HomePage;
