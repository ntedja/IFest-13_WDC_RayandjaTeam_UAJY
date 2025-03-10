import React, { useState } from 'react';
import styled from 'styled-components';

const TradeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Source Sans Pro', sans-serif;
  margin-top : 50px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const TradeForm = styled.form`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    border-color: #A27B5C;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  &:focus {
    border-color: #A27B5C;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background: #A27B5C;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #8a6a4f;
  }
`;

const TradeList = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TradeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  flex: 1;
  margin-left: 1.5rem;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const TradeButton = styled.button`
  background: #A27B5C;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #8a6a4f;
  }
`;


const Trade = () => {
  const [tradeItems, setTradeItems] = useState([
    {
      id: 1,
      name: "Vintage Leather Jacket",
      description: "A classic vintage leather jacket in excellent condition.",
      image: "/assets/jacket.jpg",
    },
    {
      id: 2,
      name: "Designer Handbag",
      description: "A stylish designer handbag, perfect for any occasion.",
      image: "/assets/bags2.jpg",
    },
    {
      id: 3,
      name: "Limited Edition Sneakers",
      description: "Rare limited edition sneakers, barely worn.",
      image: "/assets/shoes.jpg",
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    itemName: '',
    itemDescription: '',
    itemImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: tradeItems.length + 1,
      name: formData.itemName,
      description: formData.itemDescription,
      image: URL.createObjectURL(formData.itemImage),
    };
    setTradeItems([...tradeItems, newItem]);
    alert("Trade request submitted successfully!");
    setFormData({
      name: '',
      email: '',
      itemName: '',
      itemDescription: '',
      itemImage: null,
    });
  };

  return (
    <TradeContainer>
      <Title>Trade Your Fashion Items</Title>
      <Description>
        Exchange your old fashion items with designers and brands.
      </Description>

      {/* Trade Form */}
      <TradeForm onSubmit={handleSubmit}>
        <FormTitle>Submit Your Trade Request</FormTitle>
        <FormGroup>
          <Label>Your Name</Label>
          <Input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Your Email</Label>
          <Input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Item Name</Label>
          <Input type="text" name="itemName" placeholder="Enter the item name" value={formData.itemName} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Item Description</Label>
          <TextArea name="itemDescription" placeholder="Describe the item you want to trade" value={formData.itemDescription} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Upload Image</Label>
          <Input type="file" name="itemImage" accept="image/*" onChange={handleChange} required />
        </FormGroup>
        <SubmitButton type="submit">Submit Trade Request</SubmitButton>
      </TradeForm>

      {/* Trade List */}
      <TradeList>
        <FormTitle>Available Items for Trade</FormTitle>
        {tradeItems.map((item) => (
          <TradeItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemDetails>
            <TradeButton>Trade Now</TradeButton>
          </TradeItem>
        ))}
      </TradeList>
    </TradeContainer>
  );
};

export default Trade