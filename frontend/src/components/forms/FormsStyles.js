import styled from 'styled-components';

// HABIT FORM //

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
  width: 100%;
  height: 32px;
  border-radius: 32px;
  background-color: var(--radiobutton);
  pointer-events: none;
  position: absolute;
  z-index: -1;

  ${HiddenRadioButton}:checked + && {
    background-color: var(--accent-green);
  }
`;

export const CategoryLabel = styled.label`
  min-width: 90px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: var(--text-primary);
  transition: 0.2s;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export const RegularityLabel = styled.label`
  // min-width: 50%;
  height: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: var(--text-primary);
  transition: 0.2s;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export const FormCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // padding-top: 1rem;
  width: 100%;
  justify-content: space-between;
`;

export const FormWrapper = styled.form`
  border-radius: 10px;
  margin-top: 1rem;
  z-index: -1;

  @media (max-width: 767px) {
    margin-top: 1rem;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  color: var(--text-primary);
  width: 100%;
  transition: 0.2s;
  font-size: 1rem;
  line-height: 1.3rem;
  font-weight: 400;
  margin-top: 1rem;
`;

export const Input = styled.input`
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 300;
  text-decoration: inherit;
  text-transform: inherit;
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  padding: 16px;
  border: 1px solid var(--grey-500);
  background-color: var(--level-one);
  margin: 0.5rem 0 0.5rem 0;
  outline: none;
  transition: 0.4s;
  :hover {
    cursor: pointer;
    box-shadow: var(--box-shadow);
  }
  :focus {
    ::placeholder {
      color: var(--text-secondary);
    }
    padding: 16px;
    background-color: var(--level-two);
    border: none;
    ::placeholder {
      color: var(--text-secondary);
    }
    :focus {
      color: var(--text-secondary);
      font-size: 14px;
    }
  }
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 8px;
  color: var(--grey-600);
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 500;
  transition: 0.4s;
  border: none;
  width: 100%;
  // margin-bottom: 1rem;
  margin-top: 1rem;
  background-color: var(--accent-green);
  :hover {
    background-color: var(--grey-300);
    color: var(--grey-600);
    cursor: pointer;
  }
`;

export const Preamble = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  line-height: 1.875rem;
  margin-bottom: 0;
  max-width: 400px;
  color: var(--text-primary);

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1.3rem;
    margin-left: 0.5rem;
  }
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 0;
  max-width: 240px;
  margin-top: 1rem;
  color: var(--text-primary);

  @media (max-width: 767px) {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1rem;
    margin-left: 0.5rem;
  }
`;

export const Asterix = styled.span`
  font-size: 30px;
  color: var(--text-primary);
`;

export const Required = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
