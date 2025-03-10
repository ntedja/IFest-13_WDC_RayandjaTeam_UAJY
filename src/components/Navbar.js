// Navbar.js
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaUser,
  FaShoppingBag,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";

const GlobalStyle = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  html {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent horizontal overflow */
  }
`;

const NavbarContainer = styled.nav`
  background: rgb(255, 255, 255);
  color: black;
  padding: 1.2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  &:hover {
    color: #a27b5c;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CenterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 0.8rem 1rem;
  width: 500px;
  background-color: rgb(255, 255, 255);
`;

const SearchIcon = styled(FaSearch)`
  color: #555;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  font-size: 0.9rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: 1.2rem;
  position: relative;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    width: 100%;
    padding: 1rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledLink = styled(Link)`
  font-family: "Source Sans 3", sans-serif;
  color: black;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s;
  position: relative;
  &:hover {
    color: #a27b5c;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0.5rem 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  min-width: 150px;
  z-index: 100;

  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.7rem 1rem;
  color: black;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    background: #f0f0f0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavIcon = styled(Link)`
  color: #333;
  font-size: 1.5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeartIcon = styled(FaHeart)`
  color: #ff4136;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #a27b5c;
  }
`;

const BagIcon = styled(FaShoppingBag)`
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #a27b5c;
  }
`;

const ProfileIcon = styled(FaUser)`
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #a27b5c;
  }
`;

const HamburgerIcon = styled(FaBars)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <GlobalStyle>
      <NavbarContainer>
        <Logo to="/">RAYANDJA</Logo>

        <CenterSection>
          <SearchContainer>
            <SearchIcon />
            <SearchInput type="text" />
          </SearchContainer>

          <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)} />

          <NavLinks isOpen={menuOpen}>
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <StyledLink to="#" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Shop &#9662;
              </StyledLink>
              <DropdownMenu isOpen={dropdownOpen}>
                <DropdownItem to="/marketplace">Marketplace</DropdownItem>
                <DropdownItem to="/trade">Trade</DropdownItem>
              </DropdownMenu>
            </div>
            <StyledLink to="/education">Education</StyledLink>
            <StyledLink to="/challenges">Challenges</StyledLink>
            <StyledLink to="/login">Sign Up / Log In</StyledLink>
          </NavLinks>
        </CenterSection>

        <IconWrapper>
          <NavIcon to="/wishlist">
            <HeartIcon />
          </NavIcon>
          <NavIcon to="/cart">
            <BagIcon />
          </NavIcon>
          <NavIcon to="/profilelayout">
            <ProfileIcon />
          </NavIcon>
        </IconWrapper>
      </NavbarContainer>
    </GlobalStyle>
  );
};

export default Navbar;