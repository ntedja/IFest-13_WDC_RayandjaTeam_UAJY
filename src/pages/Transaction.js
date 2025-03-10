// Transaction.js
import styled from 'styled-components';

const TransactionContainer = styled.div`
  padding: 2rem;
`;

const Transaction = () => {
  return (
    <TransactionContainer>
      <h1>Transaction History</h1>
      <p>View your past purchases.</p>
    </TransactionContainer>
  );
};

export default Transaction;