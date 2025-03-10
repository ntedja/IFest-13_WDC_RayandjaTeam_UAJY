import styled from "styled-components";
import { useWishlist } from "./WishlistContext";
import { useState } from "react";

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

const PaymentSection = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const TotalPrice = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-align: left;
`;

const PaymentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #1a1a1a;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background: #ffffff;
  color: #1a1a1a;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background: #ffffff;
  color: #1a1a1a;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const CheckoutButton = styled.button`
  padding: 1rem;
  background: ${({ disabled }) => (disabled ? "#ccc" : "#1a1a1a")};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background 0.2s;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#ccc" : "#333")};
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-align: center;
`;

const CloseButton = styled.button`
  padding: 0.5rem 1rem;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const ShippingSection = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const ShippingMethod = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ShippingLabel = styled.label`
  font-size: 1rem;
  color: #1a1a1a;
`;

const ShippingCost = styled.span`
  font-size: 1rem;
  color: #1a1a1a;
  font-weight: bold;
`;

const AddressSection = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;


// Komponen Formulir Credit Card
const CreditCardForm = ({ formData, setFormData, errors }) => (
  <div>
    <FormGroup>
      <Label>Card Number</Label>
      <Input
        type="text"
        placeholder="1234 5678 9012 3456"
        value={formData.cardNumber || ""}
        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
      />
      {errors.cardNumber && <ErrorMessage>{errors.cardNumber}</ErrorMessage>}
    </FormGroup>
    <FormGroup>
      <Label>Expiration Date</Label>
      <Input
        type="text"
        placeholder="MM/YY"
        value={formData.expirationDate || ""}
        onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
      />
      {errors.expirationDate && <ErrorMessage>{errors.expirationDate}</ErrorMessage>}
    </FormGroup>
    <FormGroup>
      <Label>CVV</Label>
      <Input
        type="text"
        placeholder="123"
        value={formData.cvv || ""}
        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
      />
      {errors.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}
    </FormGroup>
  </div>
);

// Komponen Formulir Bank Transfer
const BankTransferForm = ({ formData, setFormData, errors }) => (
  <div>
    <FormGroup>
      <Label>Bank Name</Label>
      <Input
        type="text"
        placeholder="Enter bank name"
        value={formData.bankName || ""}
        onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
      />
      {errors.bankName && <ErrorMessage>{errors.bankName}</ErrorMessage>}
    </FormGroup>
    <FormGroup>
      <Label>Account Number</Label>
      <Input
        type="text"
        placeholder="Enter account number"
        value={formData.accountNumber || ""}
        onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
      />
      {errors.accountNumber && <ErrorMessage>{errors.accountNumber}</ErrorMessage>}
    </FormGroup>
    <FormGroup>
      <Label>Account Holder Name</Label>
      <Input
        type="text"
        placeholder="Enter account holder name"
        value={formData.accountHolderName || ""}
        onChange={(e) => setFormData({ ...formData, accountHolderName: e.target.value })}
      />
      {errors.accountHolderName && <ErrorMessage>{errors.accountHolderName}</ErrorMessage>}
    </FormGroup>
  </div>
);

// Komponen Formulir E-Wallet
const EWalletForm = ({ formData, setFormData, errors }) => (
  <div>
    <FormGroup>
      <Label>E-Wallet Provider</Label>
      <Select
        value={formData.ewalletProvider || ""}
        onChange={(e) => setFormData({ ...formData, ewalletProvider: e.target.value })}
      >
        <option value="">Select Provider</option>
        <option value="PayPal">PayPal</option>
        <option value="Gopay">Gopay</option>
        <option value="OVO">OVO</option>
        <option value="Dana">Dana</option>
      </Select>
      {errors.ewalletProvider && <ErrorMessage>{errors.ewalletProvider}</ErrorMessage>}
    </FormGroup>
    <FormGroup>
      <Label>E-Wallet Number</Label>
      <Input
        type="text"
        placeholder="Enter e-wallet number"
        value={formData.ewalletNumber || ""}
        onChange={(e) => setFormData({ ...formData, ewalletNumber: e.target.value })}
      />
      {errors.ewalletNumber && <ErrorMessage>{errors.ewalletNumber}</ErrorMessage>}
    </FormGroup>
  </div>
);

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingCost, setShippingCost] = useState(0);
  const [address, setAddress] = useState({
    fullName: "",
    addressLine: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
  });
  const [addressErrors, setAddressErrors] = useState({});

  const totalPrice = wishlist.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setShowPaymentForm(true);
  };

  const validateForm = () => {
    const newErrors = {};

    if (paymentMethod === "Credit Card") {
      if (!formData.cardNumber) newErrors.cardNumber = "Card number is required.";
      if (!formData.expirationDate) newErrors.expirationDate = "Expiration date is required.";
      if (!formData.cvv) newErrors.cvv = "CVV is required.";
    } else if (paymentMethod === "Bank Transfer") {
      if (!formData.bankName) newErrors.bankName = "Bank name is required.";
      if (!formData.accountNumber) newErrors.accountNumber = "Account number is required.";
      if (!formData.accountHolderName) newErrors.accountHolderName = "Account holder name is required.";
    } else if (paymentMethod === "E-Wallet") {
      if (!formData.ewalletProvider) newErrors.ewalletProvider = "E-Wallet provider is required.";
      if (!formData.ewalletNumber) newErrors.ewalletNumber = "E-Wallet number is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateAddress = () => {
    const newErrors = {};

    if (!address.fullName) newErrors.fullName = "Full name is required.";
    if (!address.addressLine) newErrors.addressLine = "Address line is required.";
    if (!address.city) newErrors.city = "City is required.";
    if (!address.postalCode) newErrors.postalCode = "Postal code is required.";
    if (!address.phoneNumber) newErrors.phoneNumber = "Phone number is required.";

    setAddressErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitPayment = () => {
    if (!validateForm() || !validateAddress()) return;

    setShowNotification(true);
    clearWishlist();
    setShowPaymentForm(false);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  const handleShippingMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setShippingMethod(selectedMethod);

    // Set shipping cost based on the selected method
    switch (selectedMethod) {
      case "Standard":
        setShippingCost(5.0);
        break;
      case "Express":
        setShippingCost(10.0);
        break;
      case "Next Day":
        setShippingCost(15.0);
        break;
      default:
        setShippingCost(0);
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const isWishlistEmpty = wishlist.length === 0;

  return (
    <WishlistContainer>
      <WishlistTitle>Your Cart</WishlistTitle>
      <WishlistDescription>Saved items for later.</WishlistDescription>

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

      <AddressSection>
        <h3>Shipping Address</h3>
        <AddressForm>
          <FormGroup>
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={address.fullName}
              onChange={handleAddressChange}
            />
            {addressErrors.fullName && <ErrorMessage>{addressErrors.fullName}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label>Address Line</Label>
            <Input
              type="text"
              name="addressLine"
              placeholder="Enter address line"
              value={address.addressLine}
              onChange={handleAddressChange}
            />
            {addressErrors.addressLine && <ErrorMessage>{addressErrors.addressLine}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              placeholder="Enter city"
              value={address.city}
              onChange={handleAddressChange}
            />
            {addressErrors.city && <ErrorMessage>{addressErrors.city}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label>Postal Code</Label>
            <Input
              type="text"
              name="postalCode"
              placeholder="Enter postal code"
              value={address.postalCode}
              onChange={handleAddressChange}
            />
            {addressErrors.postalCode && <ErrorMessage>{addressErrors.postalCode}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label>Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={address.phoneNumber}
              onChange={handleAddressChange}
            />
            {addressErrors.phoneNumber && <ErrorMessage>{addressErrors.phoneNumber}</ErrorMessage>}
          </FormGroup>
        </AddressForm>
      </AddressSection>

      <ShippingSection>
        <h3>Shipping Method</h3>
        <FormGroup>
          <ShippingMethod>
            <ShippingLabel>
              <input
                type="radio"
                name="shippingMethod"
                value="Standard"
                checked={shippingMethod === "Standard"}
                onChange={handleShippingMethodChange}
              />
              Standard Shipping (5-7 business days)
            </ShippingLabel>
            <ShippingCost>$5.00</ShippingCost>
          </ShippingMethod>
          <ShippingMethod>
            <ShippingLabel>
              <input
                type="radio"
                name="shippingMethod"
                value="Express"
                checked={shippingMethod === "Express"}
                onChange={handleShippingMethodChange}
              />
              Express Shipping (2-3 business days)
            </ShippingLabel>
            <ShippingCost>$10.00</ShippingCost>
          </ShippingMethod>
          <ShippingMethod>
            <ShippingLabel>
              <input
                type="radio"
                name="shippingMethod"
                value="Next Day"
                checked={shippingMethod === "Next Day"}
                onChange={handleShippingMethodChange}
              />
              Next Day Shipping
            </ShippingLabel>
            <ShippingCost>$15.00</ShippingCost>
          </ShippingMethod>
        </FormGroup>
      </ShippingSection>

      <PaymentSection>
        <TotalPrice>
          Subtotal: ${totalPrice.toFixed(2)} <br />
          Shipping: ${shippingCost.toFixed(2)} <br />
          Total: ${(totalPrice + shippingCost).toFixed(2)}
        </TotalPrice>
        <PaymentForm>
          <FormGroup>
            <Label>Payment Method</Label>
            <Select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="E-Wallet">E-Wallet</option>
            </Select>
          </FormGroup>
          {paymentMethod === "Credit Card" && (
            <CreditCardForm formData={formData} setFormData={setFormData} errors={errors} />
          )}
          {paymentMethod === "Bank Transfer" && (
            <BankTransferForm formData={formData} setFormData={setFormData} errors={errors} />
          )}
          {paymentMethod === "E-Wallet" && (
            <EWalletForm formData={formData} setFormData={setFormData} errors={errors} />
          )}
          <CheckoutButton
            disabled={isWishlistEmpty || !paymentMethod || !shippingMethod}
            onClick={handleSubmitPayment}
          >
            Checkout
          </CheckoutButton>
        </PaymentForm>
      </PaymentSection>

      {showNotification && (
        <Notification>
          <h3>Payment Successful!</h3>
          <p>Your order has been placed successfully.</p>
          <CloseButton onClick={closeNotification}>Close</CloseButton>
        </Notification>
      )}
    </WishlistContainer>
  );
};

export default Wishlist;