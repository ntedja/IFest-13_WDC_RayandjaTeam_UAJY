// Auth.js
import styled from 'styled-components';

const AuthContainer = styled.div`
  padding: 2rem;
`;

const Auth = () => {
  return (
    <AuthContainer>
      <h1>Login / Sign Up</h1>
      <p>Access your account.</p>
    </AuthContainer>
  );
};

export default Auth;