import * as React from 'react';
import { useMemo, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import textSize from '../Common/sizes';
import { Typography, useTheme } from '@giovannicapizzi/beer-ui';
import styled from 'styled-components';
import { lightShadowStyle } from '../Common/styles';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface Unit {
  label: string;
  value: string;
}

export interface UnitFieldProps extends TextInputProps {
  size: 'small' | 'medium' | 'large';
  text: string | number;
  unit: Unit;
  onUnitChange: (item: Unit) => any;
  onChange: (value: any) => void;
  units: Unit[];
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

interface PipeProps {
  background: string;
}

const Pipe = styled(View)<PipeProps>`
  width: 1px;
  height: 60%;
  margin: 0 4px;
  background-color: ${(p) => p.background};
`;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  unitRow: {
    flexDirection: 'row',
    marginRight: 8,
    padding: 12,
  },
  units: {
    borderWidth: 1,
    paddingTop: 42,
    paddingBottom: 12,
    marginTop: -28, // min-height 56/2
    backgroundColor: 'white',
    borderRadius: 8,
  },
  unit: {
    marginHorizontal: 8,
  },
  invalidView: {
    flexDirection: 'row',
  },
  invalidText: {
    flex: 1,
    marginLeft: 14,
    marginVertical: 4,
  },
});

export const UnitField: React.FC<UnitFieldProps> = ({
  size,
  text,
  unit,
  onChange,
  units,
  onUnitChange,
  shadow,
  invalidText,
  ...props
}) => {
  const { unitField: palette } = useTheme();
  const fontSize = textSize[size];
  const [showUnits, setShowUnits] = useState(false);
  const color = invalidText ? palette.error : palette.color;
  const borderColor = invalidText ? palette.border.error : palette.border.color;

  const unitRows = useMemo(
    () =>
      units?.map((it, idx) => {
        return (
          <TouchableHighlight
            key={idx}
            underlayColor={palette.accent}
            onPress={() => {
              onUnitChange(it);
              setShowUnits(false);
            }}
          >
            <View style={styles.unitRow}>
              <Typography
                text={it.label}
                size="medium"
                variant="primary"
                textStyle={{ color }}
              />
            </View>
          </TouchableHighlight>
        );
      }),
    [color, onUnitChange, palette.accent, units]
  );

  return (
    <View style={styles.root}>
      <TextFieldWrap
        borderColor={color}
        background={palette.background}
        style={shadow && !showUnits && lightShadowStyle}
      >
        <TextField
          fontSize={fontSize}
          onChangeText={onChange}
          value={text ? text.toString() : ''}
          color={color}
          placeholderTextColor={color}
          {...props}
        />
        <Pipe background={color} />
        <Typography
          text={unit.value}
          size="medium"
          variant="primary"
          textStyle={[styles.unit, { color }]}
        />
        <TouchableOpacity onPress={() => setShowUnits(!showUnits)}>
          <FontAwesomeIcon
            icon={showUnits ? faChevronUp : faChevronDown}
            color={color}
            size={22}
          />
        </TouchableOpacity>
      </TextFieldWrap>
      {invalidText && !showUnits && (
        <View style={styles.invalidView}>
          <Typography
            text={invalidText}
            textStyle={[styles.invalidText, { color: palette.error }]}
          />
        </View>
      )}
      {showUnits && (
        <View style={[styles.units, { borderColor }]}>{unitRows}</View>
      )}
    </View>
  );
};
