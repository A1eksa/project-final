import styled from 'styled-components';

export const CloseToggleWrapper = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 767px) {
    height: 48px;
    margin-top: 1rem;
  }
`;

export const P = styled.p`
  margin: 0 1rem 0 0;
  color: var(--text-primary);
`;

export const CloseToggle = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 48px;
  background-color: var(--accent-green);
  color: var(--grey-600);
  font-size: 3rem;
  line-height: 2rem;
  font-family: Raleway;
  font-weight: 400;
  border: none;
  transform: rotate(45deg);
  transition: 0.3s;
  :hover {
    background-color: var(--closebuttonhover);
    color: var(--text-primary);
    cursor: pointer;
    transform: rotate(360deg);
  }

  @media (max-width: 767px) {
    height: 44px;
    width: 44px;
    border-radius: 22px;
  }
`;
