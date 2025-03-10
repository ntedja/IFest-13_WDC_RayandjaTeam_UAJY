import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Animasi untuk fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f9f9f9, #e0e0e0);
  padding: 6rem 4rem 4rem;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 4rem;
  gap: 3rem;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  max-width: 50%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
`;

const TextContainer = styled.div`
  flex: 1;
  font-family: 'Playfair Display', serif;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const QuoteText = styled.p`
  font-size: 1.8rem;
  font-style: italic;
  line-height: 1.5;
  position: relative;
  margin-bottom: 1rem;
  color: #333;

  &::before {
    content: '“';
    font-size: 3rem;
    position: absolute;
    left: -25px;
    top: -10px;
    color: #1a1a1a;
  }

  &::after {
    content: '”';
    font-size: 3rem;
  }
`;

const Author = styled.p`
  font-size: 1rem;
  font-weight: normal;
  margin-top: 1rem;
  text-align: left;
  color: #666;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  font-family: 'Playfair Display', serif;
  color: #444;
`;

const Source = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #1a1a1a;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

const VideoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const Video = styled.iframe`
  width: 100%;
  height: 450px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  margin-top: 2rem;

  &:hover {
    background: #333;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: #666;
`;

const TestimonialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

const TestimonialTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #444;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Home = () => {
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  const handleExploreClick = () => {
    navigate('/marketplace'); // Arahkan ke halaman marketplace
  };

  return (
    <PageContainer>
      {/* Section 1: Quote */}
      <Section>
        <ImageContainer>
          <Image src="IFest-13_WDC_RayandjaTeam_UAJY/assets/home1.png" alt="Fashion Model" />
        </ImageContainer>
        <TextContainer>
          <QuoteText>
            Don't be into trends. Don't make fashion own you, but you decide
            what you are, what you express by the way you dress and the way you
            live.
          </QuoteText>
          <Author>— Gianni Versace</Author>
          <CTAButton onClick={handleExploreClick}>Explore Our Collection</CTAButton>
        </TextContainer>
      </Section>

      {/* Section 2: Fast Fashion Impact */}
      <Section>
        <ImageContainer>
          <Image src="IFest-13_WDC_RayandjaTeam_UAJY/assets/home2.png" alt="Fast Fashion Impact" />
        </ImageContainer>
        <TextContainer>
          <InfoText>
            The impact of fast fashion on the environment is a layered issue.
            For starters, a March 2023 report by the United Nations Environment
            Programme (UNEP) said that fashion was responsible for up to 10% of
            annual global carbon emissions.
          </InfoText>
          <Source>— Vogue</Source>
        </TextContainer>
      </Section>

      {/* Section 3: Video */}
      <VideoContainer>
        <VideoTitle>Fabric Waste</VideoTitle>
        <Video src="https://www.youtube.com/embed/7i0QMnz4ExY" allowFullScreen />
      </VideoContainer>

      {/* Section 4: Statistics */}
      <StatsContainer>
        <StatItem>
          <StatNumber>10%</StatNumber>
          <StatLabel>of global carbon emissions</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>92M</StatNumber>
          <StatLabel>tons of textile waste annually</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>20%</StatNumber>
          <StatLabel>of global wastewater</StatLabel>
        </StatItem>
      </StatsContainer>

      {/* Section 5: Testimonial */}
      <TestimonialSection>
        <TestimonialTitle>What Our Customers Say</TestimonialTitle>
        <TestimonialCard>
          <TestimonialText>
            "I love how Rayandja promotes sustainable fashion. Their collection
            is not only stylish but also eco-friendly!"
          </TestimonialText>
          <TestimonialAuthor>— Sarah, Eco-conscious Shopper</TestimonialAuthor>
        </TestimonialCard>
      </TestimonialSection>
    </PageContainer>
  );
};

export default Home;