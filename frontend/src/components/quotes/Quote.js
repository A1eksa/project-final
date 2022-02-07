import React, { useEffect } from 'react';
import { useSelector, batch, useDispatch } from 'react-redux';
import quote from '../../reducers/quote';
import { API_URL } from '../../utils/constants';

import { 
  QuoteWrapper, 
  Name, 
  QuoteText,
} from './_QuotesStyles';


export const Quote = () => {
  const quotes = useSelector((store) => store.quote);
  const message = useSelector((store) => store.quote.message);
  const author = useSelector((store) => store.quote.author);
  // const id = useSelector((store) => store.quote._id);
  
  const dispatch = useDispatch();

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch(API_URL('quotes'))
      .then((res) => res.json())
      .then((data) => {
        console.log('THE RESPONSE', data)
        if (data.success) {
          batch(() => {
            // dispatch(quote.actions.quoteId(data.response._id));
            dispatch(quote.actions.setMessage(data.response.message));
            dispatch(quote.actions.setAuthor(data.response.author));
            dispatch(quote.actions.setError(null));
          });
        } else {
          batch(() => {
            // dispatch(quote.actions.quoteId(null));
            dispatch(quote.actions.setMessage(null));
            dispatch(quote.actions.setAuthor(null));
            dispatch(quote.actions.setError(data.response));
          });
        }
      });
  }, []);

  return (
    // <div>
    //   <p>{quotes.message}</p>
    //   <p>{quotes.author}</p>
    //   <button onClick={refreshPage}>PRESS</button>
    // </div>
    <QuoteWrapper>
      <QuoteText>{quotes.message}</QuoteText>
      <Name>{quotes.author}</Name>
      <button onClick={refreshPage}>PRESS</button>
    </QuoteWrapper>
  );
};

