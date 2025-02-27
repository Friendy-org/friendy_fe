import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IconProps {
  name: string;
  size: string;
  color?: string;
}

export default function Icon({ name, size, color }: IconProps) {
  const iconSize = size === 'x_sm' ? 13 : size === 'sm' ? 18 : 24;
  const iconColor = color === 'gray' ? '#626262' : '#333333';

  return <FeatherIcon name={name} size={iconSize} color={iconColor} />;
}
