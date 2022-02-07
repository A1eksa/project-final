import React, { useState, useEffect } from 'react';
// import { useSelector, batch, useDispatch } from 'react-redux';
import quote from '../../reducers/quote';
import { API_URL } from '../../utils/constants';
import { IconContext } from 'react-icons';
import { FaRedoAlt } from 'react-icons/fa';

import { 
  QuoteWrapper, 
  Name, 
  QuoteText,
  QuoteButton,
} from './_QuotesStyles';


export const QuoteTwo = () => {
  const [theQuote, setTheQuote] = useState({})
//   const dispatch = useDispatch();

  const getNewQuote = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch(API_URL('quotes'))
      .then((res) => res.json())
      .then((data) => {
        setTheQuote(data.response);
        console.log('Is this the quote',data);
      });
  }, []);

  return (
    // <div>
    //   <p>{quotes.message}</p>
    //   <p>{quotes.author}</p>
    //   <button onClick={refreshPage}>PRESS</button>
    // </div>
    <QuoteWrapper>
      <QuoteText>{theQuote.message}</QuoteText>
      <Name>/ {theQuote.author}</Name>
      <IconContext.Provider
        value={{
            color: '#444444',
            className: 'global-class-name',
            size: '1.125rem',
            fontWeight: 'bold',
            style: { verticalAlign: 'middle', marginLeft: '0.05rem' },
        }}
        >
      <QuoteButton onClick={() => getNewQuote()}>
        <FaRedoAlt />
      </QuoteButton>
      </IconContext.Provider>
    </QuoteWrapper>
  );
};

