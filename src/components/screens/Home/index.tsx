import React from 'react';
import {Container} from './styles';
import {Image} from 'react-native';

const HomeScreen = () => {
  return (
    <Container>
      <Image source={require('../../../assets/images/logo.png')} width="100" />
    </Container>
  );
};

export default HomeScreen;
