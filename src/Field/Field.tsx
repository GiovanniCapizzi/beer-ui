import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import textSize from '../Common/sizes';
import { Typography, useTheme } from 'beer-ui';
import styled from 'styled-components';
import { lightShadowStyle } from '../Common/styles';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export interface FieldProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  size: 'small' | 'medium' | 'large';
  text: string;
  onChange: (value: any) => void;
  shadow?: boolean;
  invalidText?: string;
}

interface TextFieldWrapProps {
  borderColor: string;
  background: string;
}

const TextFieldWrap = styled(View)<TextFieldWrapProps>`
  border: 1px solid ${(p) => p.borderColor};
  border-radius: 42px;
  flex-direction: row;
  background-color: ${(p) => p.background};
  padding: 0 16px;
  align-items: center;
  min-height: 56px;
`;

interface TextFieldProps {
  fontSize: number;
  color: string;
}

const TextField = styled(TextInput)<TextFieldProps>`
  flex: 1;
  font-size: ${(p) => p.fontSize}px;
  color: ${(p) => p.color};
  padding: 10px 0;
  border-radius: 42px;
`;

const styles = StyleSheet.create({
  invalidText: {
    marginLeft: 14,
    marginVertical: 4,
  },
});

export const Field: React.FC<FieldProps> = ({
  style,
  textStyle,
  size,
  text,
  shadow,
  onChange,
  invalidText,
  ...props
}) => {
  const { field: palette } = useTheme();
  const fontSize = textSize[size];
  const color = invalidText ? palette.error : palette.color;
  return (
    <View>
      <TextFieldWrap
        background={palette.background}
        borderColor={color}
        style={[shadow && lightShadowStyle, style]}
      >
        <TextField
          style={textStyle}
          fontSize={fontSize}
          onChangeText={onChange}
          value={text}
          color={color}
          placeholderTextColor={color}
          {...props}
        />
        {invalidText && (
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            color={palette.error}
            size={22}
          />
        )}
      </TextFieldWrap>
      {invalidText && (
        <Typography
          text={invalidText}
          textStyle={[styles.invalidText, { color: palette.error }]}
        />
      )}
    </View>
  );
};
