import styled from 'styled-components';

export const CloseToggleWrapper = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  align-items: center;
  justify-content: flex-end;
  // margin-right: 1.5rem;
`;

export const P = styled.p`
  margin: 0 1rem 0 0;
  color: var(--text-primary);
`;

export const CloseToggle = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: var(--accent-green);
  color: var(--grey-600);
  font-size: 3rem;
  line-height: 2rem;
  font-family: Raleway;
  font-weight: 200;
  border: none;
  transition: 0.3s;
  :hover {
    background-color: var(--closebuttonhover);
    color: var(--text-primary);
    cursor: pointer;
    transform: rotate(360deg);
  }
`;
