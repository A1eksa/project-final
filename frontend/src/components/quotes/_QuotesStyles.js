import styled from 'styled-components';

export const QuoteWrapper = styled.div`
// margin-left: 220px;
min-width: 343px;
max-width: 50%;
box-shadow: var(--box-shadow);
border-radius: 10px;
padding 1rem;
box-sizing: border-box;
margin-bottom: 1rem;`;

export const QuoteText = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 0;
`;

export const Author = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: var(--text-secondary);
`;
