import React from 'react'
import { Container, Main, Title, Make, Description } from './styles';

const Card = React.memo(({ make, model, year, info }) => {
  return (
    <Container>
      <Main>
        <Title>Vehicle</Title>
        <Make>{`${make} ${model} ${year}`}</Make>
        <Description>
          {info}
        </Description>
      </Main>
    </Container>
  )
});

export default Card