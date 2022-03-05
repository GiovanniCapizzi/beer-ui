import * as React from 'react';
import { useMemo, useState } from 'react';
import {
  StyleSheet,
  TextInputProps,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { Typography, useTheme } from 'beer-ui';
import styled from 'styled-components';
import { lightShadowStyle } from '../Common/styles';
import {
  faChevronDown,
  faChevronUp,
  faStar as faStarSolid,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import textSize from '../Common/sizes';

interface RatingViewProps {
  placeholder: string;
  value: number;
  color: string;
  fontSize: number;
}

export interface RatingFieldProps extends TextInputProps {
  size: 'small' | 'medium' | 'large';
  rating: number;
  placeholder: string;
  onRatingChange: (rating: number) => any;
  shadow?: boolean;
}

interface RatingFieldWrapProps {
  borderColor: string;
  background: string;
}

const RatingFieldWrap = styled(View)<RatingFieldWrapProps>`
  border: 1px solid ${(p) => p.borderColor};
  border-radius: 42px;
  flex-direction: row;
  background-color: ${(p) => p.background};
  padding: 0 16px;
  align-items: center;
  z-index: 1;
`;

const styles = StyleSheet.create({
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  italic: {
    fontStyle: 'italic',
  },
  star: {
    marginLeft: 4,
  },
  stars: {
    ...lightShadowStyle,
    paddingTop: 42,
    paddingBottom: 12,
    marginTop: -28, // min-height 56/2
    backgroundColor: 'white',
    borderRadius: 8,
  },
});

const RatingView: React.FC<RatingViewProps> = ({
  placeholder,
  value,
  color,
  fontSize,
}) => {
  return (
    <View style={styles.starRow}>
      <Typography
        text={value ? value.toString() : placeholder}
        variant="primary"
        textStyle={[{ color, fontSize }, !value && styles.italic]}
      />
      {!!value && (
        <FontAwesomeIcon
          icon={faStarSolid}
          color={color}
          size={fontSize}
          style={styles.star}
        />
      )}
    </View>
  );
};

export const RatingField: React.FC<RatingFieldProps> = ({
  size,
  rating,
  onRatingChange,
  shadow,
  placeholder,
}) => {
  const { unitField: palette } = useTheme();
  const fontSize = textSize[size];
  const [showSelect, setShowSelect] = useState(false);
  const color = palette.color;

  const starRows = useMemo(
    () =>
      [...Array(6).keys()].map((it, idx) => {
        return (
          <TouchableHighlight
            key={idx}
            underlayColor={palette.accent}
            onPress={() => {
              onRatingChange(it);
              setShowSelect(false);
            }}
          >
            <RatingView
              color={color}
              placeholder={placeholder}
              value={it}
              fontSize={fontSize}
            />
          </TouchableHighlight>
        );
      }),
    [color, fontSize, onRatingChange, palette.accent, placeholder]
  );

  return (
    <View>
      <RatingFieldWrap
        borderColor={color}
        background={palette.background}
        style={shadow && !showSelect && lightShadowStyle}
      >
        <RatingView
          color={color}
          placeholder={placeholder}
          value={rating}
          fontSize={fontSize}
        />
        <TouchableOpacity onPress={() => setShowSelect(!showSelect)}>
          <FontAwesomeIcon
            icon={showSelect ? faChevronUp : faChevronDown}
            color={color}
            size={textSize.medium}
          />
        </TouchableOpacity>
      </RatingFieldWrap>
      {showSelect && <View style={styles.stars}>{starRows}</View>}
    </View>
  );
};
