import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  margin: 100px auto;
  overflow: hidden;
  width: 800px;
  max-width: 100%;
  min-height: 500px;
  z-index: 10;
`;

const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  font-size: 2.5rem;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #a27b5c;
  background-color: #a27b5c;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 55px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
  margin-top: 15px;
`;

const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    !props.signIn
      ? `transform: translateX(100%); opacity: 1; z-index: 5;`
      : null}
`;

const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) => (!props.signIn ? `transform: translateX(100%);` : null)}
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) => (!props.signIn ? `transform: translateX(-100%);` : null)}
`;

const Overlay = styled.div`
  background: linear-gradient(to right, rgb(60, 66, 68), rgb(130, 124, 124));
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (!props.signIn ? `transform: translateX(50%);` : null)}
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(0);
  ${(props) => (!props.signIn ? `transform: translateX(0);` : null)}
`;

const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (!props.signIn ? `transform: translateX(0);` : null)}
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 15px 0;
  width: 85%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`;

// Alert Component
const Alert = styled.div`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  font-size: 14px;
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  transition: all 0.3s ease;
`;

// React Component
function Login() {
  const [signIn, setSignIn] = useState(true);
  const [signInAlert, setSignInAlert] = useState(false);
  const [signUpAlert, setSignUpAlert] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setSignInAlert(true);

    // Show alert for 1 second, then redirect
    setTimeout(() => {
      navigate("/profilelayout");
    }, 1000);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setSignUpAlert(true);

    // Show alert for 1 second, then redirect
    setTimeout(() => {
      navigate("/profilelayout");
    }, 1000);
  };

  return (
    <Container>
      <SignUpContainer signIn={signIn}>
        <Form>
          <Title>Create Account</Title>
          <Alert show={signUpAlert}>
            Sign up successful! Redirecting to your profile...
          </Alert>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button onClick={handleSignUp}>Sign Up</Button>
        </Form>
      </SignUpContainer>

      <SignInContainer signIn={signIn}>
        <Form>
          <Title>Sign In</Title>
          <Alert show={signInAlert}>
            Sign in successful! Redirecting to your profile...
          </Alert>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Anchor href="#">Forgot your password?</Anchor>
          <Button onClick={handleSignIn}>Sign In</Button>
        </Form>
      </SignInContainer>

      <OverlayContainer signIn={signIn}>
        <Overlay signIn={signIn}>
          <LeftOverlayPanel signIn={signIn}>
            <Title>Welcome Back!</Title>
            <Paragraph>
              To keep connected with us please login with your personal info
            </Paragraph>
            <GhostButton onClick={() => setSignIn(true)}>Sign In</GhostButton>
          </LeftOverlayPanel>

          <RightOverlayPanel signIn={signIn}>
            <Title>Hello, Friend!</Title>
            <Paragraph>
              Enter your personal details and start your journey with us
            </Paragraph>
            <GhostButton onClick={() => setSignIn(false)}>Sign Up</GhostButton>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}

export default Login;