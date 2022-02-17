import styled from 'styled-components';

//******** Header styles ********//

export const HeaderWrapper = styled.header`
box-sizing: border-box;
width: 100%;
// height: 64px;
padding: 2rem 2rem 2.5rem 2rem;
display flex;
align-items: center;
justify-content: space-between;
position: fixed;
top:0;
background-color: var(--background);

@media (max-width: 767px) {
  align-items: flex-start;
  padding: 1rem;
}
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 50%;
  gap: 1.5rem;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const H1 = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 300;
  max-width: 220px;
  margin: 0;
  color: var(--text-primary);

  @media (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;
