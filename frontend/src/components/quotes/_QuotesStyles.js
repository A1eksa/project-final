import styled from 'styled-components';

export const QuoteWrapper = styled.div`
  max-width: 343px;
  box-sizing: border-box;
`;

export const QuoteText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--text-secondary);
  margin-bottom: 0;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: var(--text-secondary);
`;

export const QuoteButton = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  color: var(--text-primary);
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 300;
  margin-right: 0.5rem;
  transition: 0.4s;
  border: none;
  max-width: 200px;
  background-color: var(--accent-green);
  :hover {
    background-color: var(--grey-300);
    color: var(--text-primary);
    cursor: pointer;
    transform: rotate(360deg);
    cursor: pointer;
  }
`;
