import styled from 'styled-components';

//******** SIGNIN FORM NEW ********//

export const BoxContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 3rem;
  box-shadow: var(--box-shadow);
`;

export const MutedLink = styled.a`
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
  text-decoration: none;
  margin-top: 2rem;
`;

export const BoldLink = styled.a`
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  cursor: pointer;
`;

export const NewInput = styled.input`
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
  margin-bottom: 1rem;
  margin-top: 0.5rem;
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

export const SubmitButton = styled.button`
  padding: 1rem;
  border-radius: 8px;
  color: var(--grey-600);
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 300;
  transition: 0.4s;
  border: none;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  background-color: var(--accent-green);
  :hover {
    background-color: var(--grey-300);
    color: var(--grey-600);
    cursor: pointer;
  }
`;

//******** SIGNIN FORM OLD ********//

export const PageWrapper = styled.section`
  max-width: 400px;
  margin: 0 auto;
`;

export const Line = styled.div`
  margin-top: 4rem;
  height: 4px;
  width: 96px;
  background-color: #1a1a1a;
`;

export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  line-height: 3.2rem;
  margin-bottom: 0;
  max-width: 240px;
  margin-top: 1.5rem;
  color: #1a1a1a;
`;

export const H2 = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2rem;
  margin-bottom: 0;
  max-width: 240px;
  margin-top: 1.5rem;
  color: var(--primary);
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 0;
  max-width: 240px;
  margin-top: 4rem;
  color: var(--primary);
`;

export const FormTitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2rem;
  margin-bottom: 0;
  max-width: 300px;
  margin-top: 1.5rem;
  color: #1a1a1a;
`;

export const Preamble = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  line-height: 1.875rem;
  margin-bottom: 0;
  max-width: 400px;
  color: #1a1a1a;
`;

export const FormWrapper = styled.form`
  padding: 2rem;
  border-radius: 10px;
  margin-top: 3rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  color: #1a1a1a;
  width: 100%;
  transition: 0.2s;
  font-size: 1rem;
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
  border: 1px solid var(--grey-200);
  background-color: var(--level-one);
  margin-bottom: 1rem;
  margin-top: 0.5rem;
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
  font-weight: 300;
  transition: 0.4s;
  border: none;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  background-color: var(--accent-green);
  :hover {
    background-color: var(--grey-300);
    color: var(--grey-600);
    cursor: pointer;
  }
`;
