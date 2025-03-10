import { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product, selectedSize) => {
    const existingItem = wishlist.find(
      (item) => item.product.id === product.id && item.selectedSize === selectedSize
    );

    if (existingItem) {
      // Jika barang sudah ada, tambahkan quantity-nya
      setWishlist((prev) =>
        prev.map((item) =>
          item.product.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Jika barang belum ada, tambahkan ke wishlist
      setWishlist((prev) => [...prev, { product, selectedSize, quantity: 1 }]);
    }
  };

  const removeFromWishlist = (productId, selectedSize) => {
    setWishlist((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedSize === selectedSize)
    ));
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);