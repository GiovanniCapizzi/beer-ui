import * as React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const ButtonStyle = styled(View)`
  background: green;
  font-weight: bold;
  padding: 16px;
  border-radius: 16px;
`;

export const Button = () => {
  return (
    <ButtonStyle>
      <Text style={{color: 'white', fontWeight: 'bold'}}>Button</Text>
    </ButtonStyle>
  );
};


