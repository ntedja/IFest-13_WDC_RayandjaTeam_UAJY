import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// **Global Styles**
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');
  * {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin-top: 5px;
  }
`;

// **Theme Colors**
const primaryColor = "#000000";
const secondaryColor = "#FFFFFF";
const borderColor = "#CCCCCC";
const backgroundColor = "#F8F8F8";
const buttonBackground = "#000000";
const buttonHover = "#333333";

// **Animations**
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${primaryColor};
  color: ${secondaryColor};
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  display: ${({ show }) => (show ? "block" : "none")};
  opacity: 0.9;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ChallengesContainer = styled.div`
  padding: 5rem 2rem;
  background: ${backgroundColor};
  color: ${primaryColor};
  text-align: center;
  min-height: 100vh;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 400px;
  background: url('IFest-13_WDC_RayandjaTeam_UAJY/assets/chal.jpg') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 15px;
`;

const HeroText = styled.h1`
  color: ${secondaryColor};
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const InfoText = styled.p`
  font-size: 1.3rem;
  margin-top: 1rem;
  color: ${primaryColor};
  font-weight: 500;
`;

const ChallengeForm = styled.form`
  background: ${secondaryColor};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;
  text-align: left;
  border: 1px solid ${borderColor};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const Badge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${primaryColor};
  color: ${secondaryColor};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${primaryColor};
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid ${borderColor};
  font-size: 1rem;
  background: ${secondaryColor};
  color: ${primaryColor};
  ${({ disabled }) => disabled && "background: #E0E0E0; cursor: not-allowed;"}
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid ${borderColor};
  font-size: 1rem;
  background: ${secondaryColor};
  color: ${primaryColor};
  resize: vertical;
  ${({ disabled }) => disabled && "background: #E0E0E0; cursor: not-allowed;"}
`;

const SubmitButton = styled.button`
  padding: 1rem;
  font-size: 1.1rem;
  width: 100%;
  border: none;
  border-radius: 12px;
  background: ${({ disabled }) => (disabled ? "#888888" : buttonBackground)};
  color: ${secondaryColor};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#888888" : buttonHover)};
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
  }
`;

// **Challenge Data**
const challenges = [
  { id: 1, title: "Upcycling Challenge", description: "Use old clothes and turn them into something new!", reward: "$50 Voucher", discount: "20% Off" },
  { id: 2, title: "Color Challenge", description: "Wear only two colors of clothing for a whole day.", reward: "$30 Voucher", discount: "15% Off" },
  { id: 3, title: "One Day No Shopping", description: "Spend a day without buying new clothes!", reward: "$20 Voucher", discount: "10% Off" },
];

const Challenges = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [completedChallenges, setCompletedChallenges] = useState({});

  const handleSubmit = (id, e) => {
    e.preventDefault();

    // Cek apakah challenge sudah selesai
    if (completedChallenges[id]) return;

    const challenge = challenges.find(c => c.id === id);
    if (challenge) {
      setToastMessage(`🎉 Challenge Submitted! You've earned ${challenge.discount} off!`);
      setShowToast(true);
      setCompletedChallenges(prev => ({ ...prev, [id]: true }));
    }

    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <GlobalStyle />
      <ChallengesContainer>
        <HeroSection>
          <HeroText>Join the Fashion Challenges</HeroText>
        </HeroSection>
        <InfoText>Participate in challenges and earn rewards & special discounts!</InfoText>

        {challenges.map((challenge) => (
          <ChallengeForm key={challenge.id} onSubmit={(e) => handleSubmit(challenge.id, e)}>
            <Badge>{challenge.reward} | {challenge.discount}</Badge>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            <FormGroup>
              <Label>Upload Image:</Label>
              <Input type="file" name="image" accept="image/*" disabled={completedChallenges[challenge.id]} />
            </FormGroup>
            <FormGroup>
              <Label>Your Experience:</Label>
              <TextArea name="experience" placeholder="Describe your experience..." disabled={completedChallenges[challenge.id]} />
            </FormGroup>
            <SubmitButton type="submit" disabled={completedChallenges[challenge.id]}>
              {completedChallenges[challenge.id] ? "Done" : "Submit Challenge"}
            </SubmitButton>
          </ChallengeForm>
        ))}
      </ChallengesContainer>

      <Toast show={showToast}>{toastMessage}</Toast>
    </>
  );
};

export default Challenges;
