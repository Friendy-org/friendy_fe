import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IconProps {
  name: string;
  size: string;
  color?: string;
}

export default function Icon({ name, size, color = 'default' }: IconProps) {
  let iconSize = 24;
  let iconColor = '#333333';

  if (size === 'x_sm') {
    iconSize = 13;
  } else if (size === 'sm') {
    iconSize = 18;
  } else if (size === 'md') {
    iconSize = 24;
  } else if (size === 'lg') {
    iconSize = 32;
  }

  if (color === 'gray') {
    iconColor = '#626262';
  } else if (color === 'primary') {
    iconColor = '#009315';
  } else if (color === 'secondary') {
    iconColor = '#198AB9';
  } else if (color === 'tertiary') {
    iconColor = '#F02F30';
  }

  return (
    <FeatherIcon
      name={name}
      size={iconSize}
      color={iconColor}
    />
  );
}
