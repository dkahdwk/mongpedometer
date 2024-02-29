import React from 'react';
import { CommonText } from 'styles/styles';
import styled from 'styled-components/native';
import Pedometer from 'components/Pedometer';

const HomeMainScreen = () => {
  return (
    <Container>
      <Title>만보기</Title>
      <Pedometer />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  background-color: #fff;
`;

const Title = styled(CommonText)`
  font-size: 20px;
  text-align: center;
`;

export default HomeMainScreen;
