// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import modal from '../../reducers/modal';
// import { HabitEditForm } from '../habits/HabitEditForm';
// import './SlideOut.css';

// import {
//   P,
//   OpenToggle,
//   CloseToggle,
//   // SlideOutWrapper,
//   // OpenToggleWrapper,
//   CloseToggleWrapper,
// } from './_ModalStyles';

// // const SlideOut = (isEditModalActive, toggleEditModal) => {
// export const HabitsSlideOut = () => {
//   const slideout = useSelector((store) => store.modal.slideout);
//   const [form, setForm] = useState('habit-edit');

//   const dispatch = useDispatch();

//   const closeSlideOut = () => {
//     // dispatch modal.actions.setSlideout
//     dispatch(modal.actions.setSlideout(false));
//   };

//   return (
//     <>
//       <div className={slideout ? 'modal active' : 'modal'}>
//         <CloseToggleWrapper>
//           <P>Close</P>
//           <CloseToggle className='close-button' onClick={closeSlideOut}>
//             +
//           </CloseToggle>
//         </CloseToggleWrapper>
//         {form === 'habit-edit' &&<HabitEditForm />}
//       </div>
//     </>
//   );
// };
