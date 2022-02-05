import * as React from 'react';
import { useMemo } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import textSize from '../Common/sizes';
import { Typography, useTheme } from 'beer-ui';
import styled from 'styled-components';
import { lightShadowStyle } from '../Common/styles';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface Result {
  title: string;
  subtitle?: string;
  category?: string;
  image?: ImageSourcePropType;
}

export interface SearchFieldProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  resultsStyle?: StyleProp<ViewStyle>;
  size: 'small' | 'medium' | 'large';
  text: string;
  onChange: (value: any) => void;
  results?: Result[];
  noResultMessage: string;
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
  z-index: 1;
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

interface ResultProps {
  background: string;
}

const Result = styled(View)<ResultProps>`
  flex-direction: row;
  background-color: ${(p) => p.background};
`;

const styles = StyleSheet.create({
  image: {
    width: 54,
    height: 54,
    margin: 8,
    borderRadius: 27,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  results: {
    ...lightShadowStyle,
    paddingTop: 42,
    paddingBottom: 24,
    marginTop: -28, // min-height 56/2
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
});

export const SearchField: React.FC<SearchFieldProps> = ({
  style,
  textStyle,
  resultsStyle,
  size,
  text,
  onChange,
  results,
  noResultMessage,
  ...props
}) => {
  const { searchField: palette } = useTheme();
  const fontSize = textSize[size];

  const data = useMemo(
    () =>
      results?.map(({ title, subtitle, category, image }, idx) => (
        <Result
          key={idx}
          background={idx % 2 ? palette.row.accent : palette.row.light}
        >
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.content}>
            <View>
              <Typography
                text={title}
                variant="secondary"
                textStyle={{ color: palette.row.title }}
              />
              <Typography text={subtitle || ''} variant="secondary" />
            </View>
            <Typography text={category || ''} textStyle={styles.bold} />
          </View>
        </Result>
      )),
    [palette.row, results]
  );

  return (
    <View>
      <TextFieldWrap
        borderColor={palette.color}
        background={palette.background}
        style={[!results && lightShadowStyle, style]}
      >
        <TextField
          style={textStyle}
          fontSize={fontSize}
          onChangeText={onChange}
          value={text}
          color={palette.color}
          placeholderTextColor={palette.color}
          {...props}
        />
        {!!text && (
          <TouchableOpacity onPress={() => onChange('')}>
            <FontAwesomeIcon icon={faTimes} color={palette.color} size={22} />
          </TouchableOpacity>
        )}
      </TextFieldWrap>
      {!!results && (
        <View style={[styles.results, resultsStyle]}>
          {results.length ? (
            data
          ) : (
            <Typography text={noResultMessage} variant="secondary" />
          )}
        </View>
      )}
    </View>
  );
};
