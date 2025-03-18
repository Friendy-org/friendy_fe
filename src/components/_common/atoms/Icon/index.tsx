import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IconProps {
  name: string;
  size: string;
  color?: string;
}

export default function Icon({ name, size, color = 'default' }: IconProps) {
  let iconSize = 24;

  if (size === 'x_sm') {
    iconSize = 13;
  } else if (size === 'sm') {
    iconSize = 18;
  } else if (size === 'md') {
    iconSize = 24;
  } else if (size === 'lg') {
    iconSize = 32;
  }

  const iconColor = color === 'gray' ? '#626262' : '#333333';

  return (
    <FeatherIcon
      name={name}
      size={iconSize}
      color={iconColor}
    />
  );
}
