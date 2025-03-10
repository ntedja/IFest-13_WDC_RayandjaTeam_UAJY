import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { products } from "./products";
import { useWishlist } from "./WishlistContext";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  margin-top: 50px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  justify-self: center;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.8rem;
  color: #a27b5c;
  font-weight: bold;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const SizeSelector = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const SizeButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: ${({ selected }) => (selected ? "black" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#333")};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: black;
    color: white;
  }
`;

const AddToCartButton = styled.button`
  padding: 1rem;
  background: ${({ clicked }) => (clicked ? "black" : "#a27b5c")};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: 0.3s;
  &:hover {
    background: ${({ clicked }) => (clicked ? "black" : "#8a6a4f")};
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState("M");

  const product = state?.product || products.find((p) => p.id === parseInt(id));
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToWishlist(product, selectedSize);
    navigate("/wishlist");
  };

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <p><strong>Color:</strong> {product.color}</p>
        <p><strong>Size:</strong> {selectedSize}</p>
        <SizeSelector>
          {product.sizes.map((size) => (
            <SizeButton
              key={size}
              selected={size === selectedSize}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </SizeButton>
          ))}
        </SizeSelector>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductDetail;