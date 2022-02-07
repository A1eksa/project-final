import React, { useState, useEffect } from 'react';
import { QuoteWrapper, Name, QuoteText } from './_QuotesStyles';
import { useSelector, batch, useDispatch } from 'react-redux';
import quote from '../../reducers/quote';
import { API_URL } from '../../utils/constants';

export const Quote = () => {
  const thoughts = useSelector((store) => store.quote);
  console.log('thoughts', quote);
  const dispatch = useDispatch();

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch(API_URL('quotes'))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          batch(() => {
            dispatch(quote.actions.set_Id(data.response._id));
            dispatch(quote.actions.setMessage(data.response.message));
            dispatch(quote.actions.setAuthor(data.response.author));
            dispatch(quote.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(quote.actions.set_Id(null));
            dispatch(quote.actions.setMessage(null));
            dispatch(quote.actions.setAuthor(null));
            dispatch(quote.actions.setError(data.response));
          });
        }
      });
  }, []);

  return (
    <QuoteWrapper>
      <QuoteText>{thoughts.message}</QuoteText>
      <Name>{thoughts.author}</Name>
      <button onClick={refreshPage}>PRESS</button>
    </QuoteWrapper>
  );
};
