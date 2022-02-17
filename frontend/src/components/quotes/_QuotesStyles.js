import styled from 'styled-components';

export const QuoteWrapper = styled.div`
  max-width: 500px;
  min-width: 10px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    border-bottom: 1px solid var(--grey-100);
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
`;

export const QuoteText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--text-secondary);
  margin: 0;

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1.4rem;
    font-weight: 600;
  }
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

  @media (max-width: 767px) {
    margin-right: 0;
  }
`;
