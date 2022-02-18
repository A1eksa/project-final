import styled from 'styled-components';

export const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-primary);

  @media (max-width: 767px) {
    font-size: 1.125rem;
  }
`;

export const CardWrapper = styled.div`
  min-width: 343px;
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  padding 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  background-color: var(--todo-card);

  @media (max-width: 767px) {
    min-width: 320px;
  }
`;

export const TodoSubject = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 0.5rem;
`;

export const TodoText = styled.p`
  font-size: 0.875rem;
  margin-top: 0.3rem;
  color: var(--text-primary);
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled.p`
  font-size: 0.875rem;
  color: var(--text-primary);
  margin: 0;
`;

export const Category = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  margin: 0;
  border-radius: 12px;
  color: var(--text-primary);
`;

export const CategoryLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: var(--text-primary);
  width: 100%;
  transition: 0.2s;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-primary);
  margin: 0;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FormCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  padding-bottom: 2rem;
  width: 100%;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  height: 32px;
  width: 48px;
  cursor: pointer;
  position: absolute;
  opacity: 0;
`;

export const CheckboxContainer = styled.span`
  display: flex;
  width: 95%;
  height: 32px;
  border-radius: 32px;
  background-color: var(--checkbox);
  pointer-events: none;
  position: absolute;
  z-index: -1;

  ${HiddenCheckbox}:checked + && {
    background-color: var(--accent-green);
  }
`;

export const CheckboxLabel = styled.label`
  min-width: 70px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: var(--grey-600);
  transition: 0.2s;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  padding: 0 1rem;
  z-index: 2;
`;


export const StyledDeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  margin-right: 0.5rem;
  transition: 0.4s;
  border: none;
  max-width: 200px;
  background-color: var(--accent-yellow);
  :hover {
    background-color: var(--grey-300);
    cursor: pointer;
    transform: rotate(360deg);
    cursor: pointer;
  }
`;

export const StyledDeleteIcon = styled.img`
  height: 14px;
  width: 14px;
`

export const StyledEditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  margin-right: 0.5rem;
  transition: 0.4s;
  border: none;
  max-width: 200px;
  background-color: var(--accent-green);
  :hover {
    background-color: var(--grey-300);
    cursor: pointer;
    transform: rotate(360deg);
    cursor: pointer;
  }
`;

export const StyledEditIcon = styled.img`
  height: 18px;
  width: 18px;
`
