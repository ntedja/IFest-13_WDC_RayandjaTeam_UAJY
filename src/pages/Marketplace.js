import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "./products";

const PageContainer = styled.div`
  padding: 2rem;
  background: #f4f4f4;
`;

const TopImage = styled.img`
  width: 100vw;
  height: auto;
  margin-left: -2rem;
  margin-right: -2rem;
  margin-bottom: 2rem;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const SortBy = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const SortLabel = styled.span`
  font-size: 1rem;
  color: #333;
  cursor: pointer;
`;

const SortDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const FashionType = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 600px;
`;

const FashionItem = styled.span`
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  &:hover {
    background: #f0f0f0;
  }
`;

const ProductCard = styled.div`
  background: white;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: normal;
`;

const ProductPrice = styled.p`
  font-size: 0.9rem;
  color: rgb(0, 0, 0);
  font-family: "Source Sans Pro", sans-serif;
  font-weight: normal;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

const Marketplace = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [selectedFashionType, setSelectedFashionType] = useState("All");

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);
  };

  const handleFashionTypeClick = (type) => {
    setSelectedFashionType(type);
  };

  const filteredProducts =
    selectedFashionType === "All"
      ? products
      : products.filter((product) => product.type === selectedFashionType);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "A to Z":
        return a.name.localeCompare(b.name);
      case "Z to A":
        return b.name.localeCompare(a.name);
      case "Highest to Lowest Price":
        return b.price - a.price;
      case "Lowest to Highest Price":
        return a.price - b.price;
      default:
        return 0;
    }
  });

  return (
    <PageContainer>
      <TopImage src="ntedja/assets/marketplacetop.png" alt="Marketplace Top" />
      <FilterSection>
        <SortBy>
          <SortLabel onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Sort by
          </SortLabel>
          <SortDropdown isOpen={isDropdownOpen}>
            <DropdownItem onClick={() => handleSortChange("A to Z")}>
              A to Z
            </DropdownItem>
            <DropdownItem onClick={() => handleSortChange("Z to A")}>
              Z to A
            </DropdownItem>
            <DropdownItem
              onClick={() => handleSortChange("Highest to Lowest Price")}
            >
              Highest to Lowest Price
            </DropdownItem>
            <DropdownItem
              onClick={() => handleSortChange("Lowest to Highest Price")}
            >
              Lowest to Highest Price
            </DropdownItem>
          </SortDropdown>
        </SortBy>
        <FashionType>
          {[
            "All",
            "Men",
            "Women",
            "T-Shirts",
            "Shoes",
            "Accessories",
            "Bags",
            "Jackets",
            "Jeans",
            "Dresses",
          ].map((type) => (
            <FashionItem
              key={type}
              onClick={() => handleFashionTypeClick(type)}
              style={{
                fontWeight: selectedFashionType === type ? "bold" : "normal",
              }}
            >
              {type}
            </FashionItem>
          ))}
        </FashionType>
      </FilterSection>
      <ProductGrid>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id}>
            <Link
              to={`/product/${product.id}`}
              state={{ product }} // Pass product data via state
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProductImage src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>${product.price}</ProductPrice>
            </Link>
          </ProductCard>
        ))}
      </ProductGrid>
    </PageContainer>
  );
};

export default Marketplace;
