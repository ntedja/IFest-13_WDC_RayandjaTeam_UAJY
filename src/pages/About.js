import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 2rem;
  padding-top: 6rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  min-height: 100vh;
  color: #1a1a1a;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const AboutDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const Highlight = styled.span`
  color: #27ae60;
  font-weight: bold;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Rayandja</AboutTitle>
      <AboutDescription>
        Rayandja is an e-commerce platform dedicated to bringing you eco-friendly fashion with modern and sustainable style.
      </AboutDescription>

      {/* About Us */}
      <Section>
        <SectionTitle>About Us</SectionTitle>
        <SectionContent>
          <Paragraph>
            <Highlight>Rayandja</Highlight> is an e-commerce platform focused on eco-friendly fashion. We believe that style and sustainability can go hand in hand. By choosing products from Rayandja, you not only look stylish but also contribute to preserving the environment.
          </Paragraph>
          <Paragraph>
            We collaborate with brands and designers who use organic, recycled materials and follow ethical production practices. Every product we offer is carefully selected to ensure quality and a positive impact on the planet.
          </Paragraph>
        </SectionContent>
      </Section>

      {/* Our Mission */}
      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <SectionContent>
          <Paragraph>
            Our mission is to reduce the negative impact of the fashion industry on the environment by providing sustainable alternatives. We aim to inspire more people to switch to eco-friendly fashion without compromising style and comfort.
          </Paragraph>
          <Paragraph>
            We are also committed to supporting local designers and small brands that share the same vision of creating a greener future.
          </Paragraph>
        </SectionContent>
      </Section>

      {/* Our Values */}
      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <SectionContent>
          <Paragraph>
            <Highlight>Sustainability:</Highlight> We prioritize eco-friendly materials and processes.
          </Paragraph>
          <Paragraph>
            <Highlight>Ethics:</Highlight> We support fair and ethical production practices.
          </Paragraph>
          <Paragraph>
            <Highlight>Quality:</Highlight> We offer high-quality, durable products.
          </Paragraph>
          <Paragraph>
            <Highlight>Style:</Highlight> We believe that eco-friendly fashion can be stylish and trendy.
          </Paragraph>
        </SectionContent>
      </Section>

      {/* Why Choose Rayandja? */}
      <Section>
        <SectionTitle>Why Choose Rayandja?</SectionTitle>
        <SectionContent>
          <Paragraph>
            By choosing Rayandja, you're not just buying fashion products—you're supporting a global movement to reduce waste and pollution. Every purchase you make helps create a positive impact on the environment and society.
          </Paragraph>
          <Paragraph>
            We also provide full transparency about the origin of our products and their production processes, so you can shop with confidence.
          </Paragraph>
        </SectionContent>
      </Section>

      {/* Join Us */}
      <Section>
        <SectionTitle>Join Us</SectionTitle>
        <SectionContent>
          <Paragraph>
            Be part of the Rayandja community, and together, we can create positive change. Start your eco-friendly fashion journey today!
          </Paragraph>
        </SectionContent>
      </Section>
    </AboutContainer>
  );
};

export default About;