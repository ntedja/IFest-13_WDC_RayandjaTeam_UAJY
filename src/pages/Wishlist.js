import styled from "styled-components";
import { useWishlist } from "./WishlistContext";

const WishlistContainer = styled.div`
  padding: 2rem;
  padding-top: 6rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  min-height: 100vh;
`;

const WishlistTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  text-align: center;
`;

const WishlistDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ProductCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  padding: 1.5rem;
`;

const ProductTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #1a1a1a;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ProductMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProductSize = styled.span`
  font-size: 0.9rem;
  color: #1a1a1a;
  background: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
`;

const ProductQuantity = styled.span`
  font-size: 0.9rem;
  color: #1a1a1a;
`;

const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }
`;

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <WishlistContainer>
      <WishlistTitle>Your Wishlist</WishlistTitle>
      <WishlistDescription>Saved items for later.</WishlistDescription>

      {wishlist.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>Your wishlist is empty.</p>
      ) : (
        <ProductGrid>
          {wishlist.map((item) => (
            <ProductCard key={`${item.product.id}-${item.selectedSize}`}>
              <ProductImage src={item.product.image} alt={item.product.name} />
              <ProductDetails>
                <ProductTitle>{item.product.name}</ProductTitle>
                <ProductPrice>${item.product.price.toFixed(2)}</ProductPrice>
                <ProductDescription>{item.product.description}</ProductDescription>
                <ProductMeta>
                  <ProductSize>Size: {item.selectedSize}</ProductSize>
                  <ProductQuantity>Qty: {item.quantity}</ProductQuantity>
                </ProductMeta>
                <RemoveButton onClick={() => removeFromWishlist(item.product.id, item.selectedSize)}>
                  Remove
                </RemoveButton>
              </ProductDetails>
            </ProductCard>
          ))}
        </ProductGrid>
      )}
    </WishlistContainer>
  );
};

export default Wishlist;