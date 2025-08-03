import React from 'react';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import UserProfile from '../components/UserProfile';

const AuthPage: React.FC = () => {
  return (
    <div>
      <h1>Authentication Page</h1>
      <UserProfile />
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default AuthPage;
