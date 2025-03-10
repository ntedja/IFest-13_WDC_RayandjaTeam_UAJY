import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 2rem;
  padding-top: 6rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  min-height: 100vh;
  color: #1a1a1a;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContactDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const ContactContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;

const ContactForm = styled.form`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #1a1a1a;
  background: #ffffff;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #1a1a1a;
  background: #ffffff;
  resize: vertical;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactDescription>
        Have questions or feedback? Reach out to us!
      </ContactDescription>

      <ContactContent>
        {/* Formulir Kontak */}
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" placeholder="Subject" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" placeholder="Your message" required />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>

        {/* Informasi Kontak */}
        <ContactInfo>
          <InfoItem>
            <InfoTitle>Address</InfoTitle>
            <InfoText>
              123 Fashion Street, <br />
              Yogyakarta, Indonesia
            </InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Email</InfoTitle>
            <InfoText>support@rayandja.com</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Phone</InfoTitle>
            <InfoText>+62 123 4567 890</InfoText>
          </InfoItem>
        </ContactInfo>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;