import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { useTheme } from "styled-components/native";

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

const SpacerView = styled(View)`
  ${({ variant }) => variant};
`;
const SpacerComponent = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
SpacerComponent.defaultProps = {
  position: "top",
  size: "small",
};

export default SpacerComponent;
