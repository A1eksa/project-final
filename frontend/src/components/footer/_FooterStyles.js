import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--footer);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 0;
  position: fixed;
  padding: 1.5rem 2rem;
  z-index: 2;
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MadeByWrapper = styled.div``;

export const P = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: var(--text-primary);
`;

export const LogOutButton = styled.button`
  height: 48px;
  border-radius: 24px;
  padding: 0 2rem;
  color: var(--text-primary);
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 300;
  transition: 0.4s;
  border: none;
  margin: 0 4rem 0 1.5rem;
  max-width: 200px;
  background-color: var(--accent-green);
  :hover {
    background-color: var(--level-two);
    color: var(--text-primary);
    cursor: pointer;
  }
`;
