// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import modal from '../../reducers/modal';


// export const OptionModal = () => {
//   const options = useSelector((store) => store.modal.options);

//   const dispatch = useDispatch();


//   const closeOptions = () => {
//     dispatch(modal.actions.setOptions(false));
//   };

//   return (
//     <>
//       <div className={options ? 'modal active' : 'modal'}>
//         <div>
//           <button className='close-button' onClick={closeOptions}>
//             Options ...
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
