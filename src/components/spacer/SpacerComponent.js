import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}: ${value}`;
};
const SpacerComponent = styled(View)`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

SpacerComponent.defaultProps = {
  position: "top",
  size: "small",
};

export default SpacerComponent;
