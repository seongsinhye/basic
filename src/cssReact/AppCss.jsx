import React from 'react';
import Button1 from './Button1';
import Button2 from './Button2';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
`


const Button = styled.button`
  background-color: rebeccapurple;
  border-radius: 50px;
  ${(props) => props.primary &&
    css `
    background-color: tan;
    border-radius: 20px;
    `}
`


export default function AppCss() {
  return (
    <>
      <Button1 />
      <Button2 />
      <Container>
        <Button >Nomal Button</Button>
        <Button primary >Nomal Button</Button>
      </Container>
    </>
  );
}

