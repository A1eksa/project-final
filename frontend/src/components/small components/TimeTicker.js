import React, { useEffect, useState } from "react";
import styled from 'styled-components'

export const TimeWrapper = styled.div`
display: flex;
flex-direction: column;
`

export const H4 = styled.h4`
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 200;
    margin: 0;
    font-feature-settings: 'lnum' 1;
`

export const Label = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: var(--text-secondary);
    margin-bottom: 0;
    text-align: right;
`




export const TimeTicker = () => {
    const [timeState, setTimeState] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setTimeState(date.toLocaleTimeString())
        }, 1000)
    }, [])

    return (
          <TimeWrapper>
            <Label>Your local time is</Label>
            <H4>{timeState}</H4>
          </TimeWrapper>
        );
      }

    setInterval(TimeTicker, 1000);
  
  
