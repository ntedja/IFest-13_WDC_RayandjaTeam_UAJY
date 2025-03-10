import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background: #000000;
  color: white;
  padding: 2rem 3rem;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6rem;
  width: 100%;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #333;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
  padding-top: 1rem;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-align: left;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-align: left;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

const CopyrightBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #333;
  font-size: 0.9rem;
  width: 100%;
`;

const BrandName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div style={{ display: "flex", gap: "6rem" }}>
          <FooterSection>
            <SectionTitle>Help</SectionTitle>
            <FooterLink to="/faq">FAQs</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
            <FooterLink to="/track-order">Track My Order</FooterLink>
            <FooterLink to="/returns">Returns Info</FooterLink>
            <FooterLink to="/shipping">Shipping Info</FooterLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Rayandja Project</SectionTitle>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/fabric-waste">Fabric Waste</FooterLink>
            <FooterLink to="/co2-emissions">CO2 Emissions</FooterLink>
            <FooterLink to="/materials">Better Materials</FooterLink>
            <FooterLink to="/social-inclusion">Social Inclusion</FooterLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Follow Us</SectionTitle>
            <ExternalLink
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </ExternalLink>
            <ExternalLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </ExternalLink>
            <ExternalLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </ExternalLink>
            <ExternalLink
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </ExternalLink>
            <ExternalLink
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest
            </ExternalLink>
          </FooterSection>
        </div>

        <BrandName>Rayandja</BrandName>
      </FooterContent>

      <CopyrightBar>
        <div>Copyright ©️ 2025 Rayandja</div>
      </CopyrightBar>
    </FooterContainer>
  );
};

export default Footer;
