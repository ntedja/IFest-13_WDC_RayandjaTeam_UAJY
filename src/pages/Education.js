import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaLeaf,
  FaRecycle,
  FaRegSmile,
  FaQuestionCircle,
  FaTshirt,
} from "react-icons/fa";

// Animasi fade-in
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Kontainer Utama
const EducationContainer = styled.div`
  background: #f5f7fa;
  color: #333;
  padding: 4rem 2rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

// Bagian Hero
const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background: url("IFest-13_WDC_RayandjaTeam_UAJY/assets/background.jpeg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
`;

const HeroText = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  max-width: 850px;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

// Judul seksi
const SectionTitle = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  font-weight: bold;
  color: #222;
  margin: 3rem 0 1rem;
`;

const InfoContainer = styled.div`
  max-width: 1000px;
  margin: 3rem auto; /* Auto margin akan membuatnya rata tengah */
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center; /* Jika ingin teks di dalamnya juga rata tengah */
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #27ae60;
`;

// Solutions Section
const SolutionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 3rem auto;
  padding: 0 1rem;
`;

const SolutionCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SolutionIcon = styled.div`
  font-size: 2.5rem;
  color: #27ae60;
  margin-bottom: 1rem;
`;

// Artikel Edukasi Section
const ArticleSectionContainer = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
`;

const EduArticleCard = styled.a`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const EduArticleImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const EduArticleContent = styled.div`
  padding: 1rem;
`;

const EduArticleTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const EduArticleDesc = styled.p`
  font-size: 1rem;
  color: #555;
`;

// Testimoni Section
const TestimonialSection = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  font-style: italic;
  position: relative;
`;

const TestimonialQuote = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #222;
`;

// FAQ Section
const FAQSection = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  cursor: pointer;
`;

const FAQQuestion = styled.h4`
  font-size: 1.2rem;
  color: #222;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FAQAnswer = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

// Chatbot Section (sudah ada)
const ChatbotContainer = styled.div`
  max-width: 850px;
  margin: 4rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
`;

const ChatMessages = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ChatMessage = styled.div`
  background: ${({ sender }) => (sender === "user" ? "#dfffd6" : "#f0f0f0")};
  color: #333;
  padding: 0.8rem;
  border-radius: 10px;
  max-width: 75%;
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const ChatInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ChatButton = styled.button`
  padding: 0.8rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #219150;
  }
`;

// Chatbot Data
const chatbotResponses = {
  "what is sustainable fashion":
    "Sustainable fashion is a clothing production practice that considers environmental & social impacts. By choosing organic materials and supporting ethical production, we can reduce pollution and exploitation.",
  "how to reduce fashion waste":
    "Start by buying less, recycling old clothes, and choosing brands that follow slow fashion principles. You can also try thrifting and upcycling.",
  "what are the alternatives to fast fashion":
    "Alternatives include thrifting, supporting slow fashion, and choosing high-quality, durable products instead of cheap items that wear out quickly.",
};

const Education = () => {
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [faqOpen, setFaqOpen] = useState({});

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage = { text: chatInput, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse =
        chatbotResponses[chatInput.toLowerCase()] ||
        "Sorry, I don't understand. Try asking another way.";
      const botMessage = { text: botResponse, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setChatInput("");
  };

  const toggleFAQ = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <EducationContainer>
      <HeroSection>
        <HeroOverlay />
        <HeroText>
          "The fashion industry produces 92 million tons of waste every year.
          It's time for change!"
        </HeroText>
      </HeroSection>

      <SectionTitle>🌱 Solutions for Sustainable Fashion</SectionTitle>
      <InfoContainer>
        <p>
          The fashion industry is one of the biggest polluters. By choosing
          sustainable products, you can help reduce the negative impact on the
          environment and support ethical production.
        </p>
        <p>
          Simple steps like choosing organic materials, recycling clothes, and
          buying second-hand items can make a big difference.
        </p>
      </InfoContainer>

      <SolutionsContainer>
        <SolutionCard>
          <SolutionIcon>
            <FaLeaf />
          </SolutionIcon>
          <h3>Choose Organic Ingredients</h3>
          <p>
            Choose clothes made from natural materials such as linen, hemp, or
            organic cotton.
          </p>
        </SolutionCard>
        <SolutionCard>
          <SolutionIcon>
            <FaRecycle />
          </SolutionIcon>
          <h3>Recycle & Reuse</h3>
          <p>
            Recycle and reuse old clothes to prevent them from ending up in
            landfills.
          </p>
        </SolutionCard>
        <SolutionCard>
          <SolutionIcon>
            <FaTshirt />
          </SolutionIcon>
          <h3>Slow Fashion</h3>
          <p>
            Support brands that produce high-quality and ethically made
            clothing.
          </p>
        </SolutionCard>
      </SolutionsContainer>

      <SectionTitle>📰 Educational Articles</SectionTitle>
      <ArticleSectionContainer>
        <EduArticleCard
          href="https://www.bbc.com/fashion-environment"
          target="_blank"
        >
          <EduArticleImage
            src="IFest-13_WDC_RayandjaTeam_UAJY/assets/lingkungan2.jpg"
            alt="Fashion Environment"
          />
          <EduArticleContent>
            <EduArticleTitle>
              How Fashion Affects the Environment?
            </EduArticleTitle>
            <EduArticleDesc>
              BBC explains the massive impact of the fashion industry on
              pollution and global waste.
            </EduArticleDesc>
          </EduArticleContent>
        </EduArticleCard>
        <EduArticleCard
          href="https://www.nytimes.com/sustainable-fashion"
          target="_blank"
        >
          <EduArticleImage
            src="IFest-13_WDC_RayandjaTeam_UAJY/assets/trend.jpg"
            alt="Sustainable Fashion Trends"
          />
          <EduArticleContent>
            <EduArticleTitle>Sustainable Fashion Trends</EduArticleTitle>
            <EduArticleDesc>
              The New York Times discusses the shift in consumer behavior
              towards more ethical and sustainable fashion.
            </EduArticleDesc>
          </EduArticleContent>
        </EduArticleCard>
        <EduArticleCard
          href="https://www.nytimes.com/sustainable-fashion"
          target="_blank"
        >
          <EduArticleImage
            src="IFest-13_WDC_RayandjaTeam_UAJY/assets/trend.jpg"
            alt="Sustainable Fashion Trends"
          />
          <EduArticleContent>
            <EduArticleTitle>Sustainable Fashion Trends</EduArticleTitle>
            <EduArticleDesc>
              The New York Times discusses the shift in consumer behavior
              towards more ethical and sustainable fashion.
            </EduArticleDesc>
          </EduArticleContent>
        </EduArticleCard>
      </ArticleSectionContainer>

      <SectionTitle>😊 Testimonials</SectionTitle>
      <TestimonialSection>
        <TestimonialCard>
          <TestimonialQuote>
            "Since supporting slow fashion, I feel more responsible for the
            environment. Every choice I make is an investment for the future!"
          </TestimonialQuote>
          <TestimonialAuthor>- Anita, 30 years old</TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialQuote>
            "Recycling my old clothes has given new meaning to my lifestyle. It
            inspires me to keep innovating!"
          </TestimonialQuote>
          <TestimonialAuthor>- Budi, 35 years old</TestimonialAuthor>
        </TestimonialCard>
      </TestimonialSection>

      <SectionTitle>
        <FaQuestionCircle style={{ marginRight: "0.5rem" }} />
        FAQ
      </SectionTitle>
      <FAQSection>
        {[
          {
            question: "What is sustainable fashion?",
            answer:
              "Sustainable fashion refers to clothing production that considers environmental, social, and economic impacts. It involves using eco-friendly materials and ethical practices.",
          },
          {
            question: "Why is fast fashion harmful to the environment?",
            answer:
              "Fast fashion produces a large amount of waste, consumes a lot of water, and often involves production practices with significant environmental impact, including carbon emissions and water pollution.",
          },
          {
            question: "How can I support sustainable fashion?",
            answer:
              "You can support sustainable fashion by choosing brands that follow ethical principles, buying second-hand items, recycling, and opting for high-quality, long-lasting clothing.",
          },
        ].map((item, index) => (
          <FAQItem key={index} onClick={() => toggleFAQ(index)}>
            <FAQQuestion>
              <FaQuestionCircle style={{ color: "#27ae60" }} />
              {item.question}
            </FAQQuestion>
            <FAQAnswer isOpen={faqOpen[index]}>{item.answer}</FAQAnswer>
          </FAQItem>
        ))}
      </FAQSection>

      <SectionTitle>💬 Ask the Chatbot about Sustainable Fashion</SectionTitle>
      <ChatbotContainer>
        <ChatMessages>
          {messages.map((msg, index) => (
            <ChatMessage key={index} sender={msg.sender}>
              {msg.text}
            </ChatMessage>
          ))}
        </ChatMessages>
        <ChatInputContainer>
          <ChatInput
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask something about sustainable fashion..."
          />
          <ChatButton onClick={handleSendMessage}>Send</ChatButton>
        </ChatInputContainer>
      </ChatbotContainer>
    </EducationContainer>
  );
};

export default Education;
