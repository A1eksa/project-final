import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaRainbow } from 'react-icons/fa';


export const EmptyTodo = () => {

    return (

        <EmptyState>
            <Label>You don't have any todos</Label>
            <H4>Let's create some!</H4>
            <P>Click the green button in the upper right corner.</P>
            <IconContext.Provider
                    value={{
                      color: '#444444',
                      className: 'global-class-name',
                      size: '4rem',
                      style: { verticalAlign: 'middle', marginLeft: '0.05rem' },
                    }}
                  >
                                  <FaRainbow />
            </IconContext.Provider>
        </EmptyState>
)

}

const EmptyState = styled.div`
// background-color: var(--level-two);
// box-shadow: var(--box-shadow);
height: 100%;
max-width: 343px;
min-height: 190px;
padding: 3rem;
border-radius: 10px;
`

const H4 = styled.h4`
font-size: 2rem;
line-height: 2rem;
color: var(--text-secondary);
font-weight: 200;
margin: 0.5rem 0;
`

const P = styled.p`
font-size: 1.125rem;
color: var(--text-secondary);
font-weight: 200;
margin: 1rem 0;
`

const Label = styled.p`
font-size: 14;
color: var(--text-secondary);
font-weight: 300;
margin: 0;
`