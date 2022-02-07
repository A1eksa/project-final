import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-primary);
`;
export const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  // min-width: 300px;
`;

export const CardWrapper = styled.div`
min-width: 343px;
width: 100%;
box-shadow: var(--box-shadow);
border-radius: 10px;
padding 1rem;
box-sizing: border-box;
margin-bottom: 1rem;
background-color: var(--level-one);
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

export const DeleteButton = styled.button`
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
  background-color: var(--accent-yellow);
  :hover {
    background-color: var(--grey-300);
    color: var(--text-primary);
    cursor: pointer;
    transform: rotate(360deg);
    cursor: pointer;
  }
`;

export const EditButton = styled.button`
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

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
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

export const HiddenRadioButton = styled.input.attrs({
  type: 'radio',
})`
  height: 32px;
  width: 48px;
  cursor: pointer;
  position: absolute;
  opacity: 0;
`;

export const RadioButton = styled.span`
  display: flex;
  width: 95%;
  height: 32px;
  border-radius: 32px;
  background-color: var(--grey-100);
  pointer-events: none;
  position: absolute;
  z-index: -1;

  ${HiddenRadioButton}:checked + && {
    background-color: var(--accent-green);
  }
`;
