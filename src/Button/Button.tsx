import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

const ButtonStyle = styled(View)`
  background: green;
  font-weight: bold;
  padding: 16px;
  border-radius: 16px;
`;

export interface ButtonProps {
  title: string;
  onPress: () => any;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonStyle>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
      </ButtonStyle>
    </TouchableOpacity>
  );
};
