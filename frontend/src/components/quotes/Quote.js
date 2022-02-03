import React, { useState, useEffect } from 'react';
import { QuoteWrapper, Author, QuoteText } from './_QuotesStyles';

export const Quote = () => {
  const [quote, setQuote] = useState({});
  const [render, setRender] = useState();

  // useEffect(() => {
  //   generateQuote();
  // }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     setRender();
  //   }, 10 * 1000);
  //   return () => clearTimeout();
  // }, []);

  const generateQuote = () => {
    fetch('http://api.quotable.io/random')
      .then((res) => res.json())
      .then((quote) => setQuote(quote));
  };

  return (
    <QuoteWrapper>
      <QuoteText>{quote.content}</QuoteText>
      <Author>{quote.author}</Author>
      <button onClick={generateQuote}>PRESS</button>
    </QuoteWrapper>
  );
};

// setQuote(data)
// setInterval(Quote, 1000);

// https://zenquotes.io/api/today
// http://api.quotable.io/random /// ok api
// https://api.paperquotes.com/apiv1/quotes/
