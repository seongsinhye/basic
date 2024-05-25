import React from 'react';
import Button1 from './cssReact/Button1';
import Button2 from './cssReact/Button2';
import styled, { css } from 'styled-components';
import TailwindComponent from './TailwindComponent';

const Container = styled.div`
  display: flex;
`

const Button = styled.button`
  background-color: tan;
  border-radius: 50px;
  margin-left: 10px;
  padding: 10px;
  /* ${(props) => props.primary &&
    css `
    background-color: tan;
    border-radius: 20px;
    `} */
`


export default function AppCss() {
  return (
    <>
      <Button1 />
      <Button2 />
      <Container>
        <Button >Nomal Button</Button>
        <Button >Nomal Button</Button>
      </Container>
      <TailwindComponent/>
    </>
  );
}

