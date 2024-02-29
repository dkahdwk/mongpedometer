import CustomText from 'components/custom/CustomText';
import styled, { css } from 'styled-components/native';

export const List = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 16px 0;
`;

export const Label = styled(CustomText)<{ width?: number; isDisabled?: boolean }>`
  ${(props) =>
    props.width &&
    css`
      width: ${String(props.width)}px;
    `};
  font-size: 16px;
  color: ${(props) => props.theme.colors.darkBlue};
  ${(props) =>
    props.isDisabled &&
    css`
      color: ${props.theme.colors.darkBlue};
    `};
`;
