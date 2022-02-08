import React from 'react';
import styled from 'styled-components';


export const EmptyTodo = () => {

    return (

        <EmptyState>
            <Label>You don't have any todos</Label>
            <H4>Let's create some!</H4>
            <P>Click the green button upper right corner.</P>
        </EmptyState>
)

}

const EmptyState = styled.div`
background-color: var(--grey-100)
height: 100%;
min-width: 343px;
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
margin: 0;
`

const Label = styled.p`
font-size: 14;
color: var(--text-secondary);
font-weight: 300;
margin: 0;
`