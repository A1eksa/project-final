import styled from 'styled-components';

// export const SlideOutWrapper = styled.section`
// &.modal-active
//     className: sidebar;
//     padding: rem;
//     background-color: #ffffff;
//     width: 400px;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     position: fixed;
//     bottom: 0;
//     right: -100%;
//     transition: 850ms;
//     box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
// &.modal-inactive {
//     right: 0;
//     transition: 350ms;
//   }
// `

// export const AddModal = styled.div`
//   &.modal-active {
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
//       rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
//     padding: 0 0 10px 0;
//     z-index: 10;
//     display: flex;
//     flex-direction: column;
//     justify-content: start;
//     gap: 50px;
//     align-items: center;
//     position: absolute;
//     top: 18%;
//     background: #212427;
//     color: #ffff;
//     width: 50%;
//     height: 80%;
//     border-radius: 15px;
//     overflow-y: scroll;
//     label {
//       font-weight: 600;
//     }
//   }
//   &.modal-inactive {
//     display: none;
//   }
//   form {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     gap: 20px;
//     width: 60%;
//   }
// `;

// export const OpenToggleWrapper = styled.div`
// background-color: transparent;
// height: 64px;
// display: flex;
// flex-direction: row;
// align-items: center;
// // justify-content: flex-end;
// // margin-right: 1.5rem;
// `

export const CloseToggleWrapper = styled.div`
  background-color: #ffffff;
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
`;

// export const OpenToggle = styled.button`
// height: 48px;
// width: 48px;
// border-radius: 50%;
// background-color: var(--accent-green);
// color: var(--text-primary);
// font-size: 2rem;
// line-height: 2rem;
// border: none;
// transition: 0.3s;
// :hover {
//     background-color: #f1f1f1;
//     color: var(--text-primary);
//     cursor: pointer;
//     transform: rotate(360deg);
//   }
// `

export const CloseToggle = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: var(--accent-green);
  color: var(--text-primary);
  font-size: 3rem;
  line-height: 2rem;
  font-family: Raleway;
  font-weight: 200;
  border: none;
  transform: rotate(45deg);
`;
