import { FontFamilyTypes, TextAlignType, TextDecorationType } from 'types/interfaces';
import { ScrollView } from 'react-native';
import styled, { css } from 'styled-components/native';
import CustomText from 'components/CustomText';
import theme from 'styles/theme';

// 가장 기본이 되는 최상위 View 컨테이너
export const CommonContainer = styled.View`
  flex: 1;
  background-color: white;
`;

export const CommonSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const CommonScrollContainer = styled(ScrollView)`
  flex: 1;
  background-color: #fff;
`;

// flex-direction: row 형태의 기본
export const CommonRow = styled.View<{
  width?: string;
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  alignSelf?: 'flex-start' | 'center' | 'flex-end';
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  flex?: number;
}>`
  ${(props) => css`
    flex-direction: row;
    ${props?.flex && `flex: ${props.flex}`};
    align-items: ${props.alignItems || 'center'};
    ${props.alignSelf && `align-self: ${props.alignSelf}`};
    ${props.width && `width: ${props.width}`};
    margin: ${props?.marginTop || 0}px ${props?.marginRight || 0}px ${props?.marginBottom || 0}px
      ${props?.marginLeft || 0}px;
  `};
`;

export const CommonColumn = styled.View<{
  flex?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}>`
  ${(props) => css`
    flex-direction: column;
    ${props?.flex && `flex: ${props.flex}`};
    margin: ${props?.marginTop || 0}px ${props?.marginRight || 0}px ${props?.marginBottom || 0}px
      ${props?.marginLeft || 0}px;
  `}
`;

export const CommonBetweenRow = styled.View<{
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  flex?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}>`
  ${(props) => css`
    flex-direction: row;
    justify-content: space-between;
    ${props?.flex && `flex: ${props.flex}`};
    align-items: ${props.alignItems || 'center'};
    margin: ${props?.marginTop || 0}px ${props?.marginRight || 0}px ${props?.marginBottom || 0}px
      ${props?.marginLeft || 0}px;
  `};
`;

export const CommonWrap = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const CommonVerticalDivider = styled.View<{
  marginHorizontal?: number;
  borderColor?: string;
  marginTop?: number;
  height?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}>`
  ${(props) => css`
    width: 1px;
    height: ${props.height || 29}px;
    border-width: 0.5px;
    border-color: ${props.borderColor || theme.colors.neutral15};
    margin: ${props?.marginTop || 0}px ${props.marginHorizontal ?? (props?.marginRight || 0)}px
      ${props?.marginBottom || 0}px ${props.marginHorizontal ?? (props?.marginLeft || 0)}px;
  `};
`;

// 선에 대한 컴포넌트 (예: ------------ 이런 형태. 점선은 아님)
export const CommonDivider = styled.View<{
  marginVertical?: number;
  borderColor?: string;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}>`
  ${(props) => css`
    border-top-width: 1px;
    border-color: ${props.borderColor || theme.colors.neutral10};
    margin: ${props.marginVertical ?? (props?.marginTop || 0)}px ${props?.marginRight || 0}px
      ${props.marginVertical ?? (props?.marginBottom || 0)}px ${props?.marginLeft || 0}px;
  `}
`;

// 각 하단 탭의 메인 헤더 타이틀에 해당하는 스타일
export const CommonMainTitle = styled(CustomText)<{
  color?: string;
  lineHeight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}>`
  ${(props) => css`
    font-size: 20px;
    font-family: ${props.theme.families.semiBold};
    line-height: ${props.lineHeight || 28}px;
    margin: ${props?.marginTop || 0}px ${props?.marginRight || 0}px ${props?.marginBottom || 0}px
      ${props?.marginLeft || 0}px;
  `}
`;

export const CommonText = styled(CustomText)<{
  flexShrink?: number;
  flex?: number;
  color?: string;
  size?: number;
  lineHeight?: number;
  textDecoration?: TextDecorationType;
  textAlign?: TextAlignType;
  family?: FontFamilyTypes;
  underline?: boolean;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}>`
  ${(props) => css`
    color: ${props?.color || '#111'};
    font-size: ${props?.size || 14}px;
    line-height: ${props?.lineHeight || 24}px;
    ${props?.textAlign && `text-align: ${props.textAlign}`};
    ${props?.flexShrink && `flex-shrink: ${props.flexShrink}`};
    ${props?.flex && `flex: ${props.flex}`};
    ${props?.underline && `text-decoration: underline`};
    ${props?.textDecoration && `text-decoration: ${props.textDecoration}`};
    ${props?.family === 'extraBold' && `font-family: ${props.theme.families.extraBold}`};
    ${props?.family === 'extraLight' && `font-family: ${props.theme.families.extraLight}`};
    ${props?.family === 'semiBold' && `font-family: ${props.theme.families.semiBold}`};
    ${props?.family === 'black' && `font-family: ${props.theme.families.black}`};
    ${props?.family === 'light' && `font-family: ${props.theme.families.light}`};
    ${props?.family === 'medium' && `font-family: ${props.theme.families.medium}`};
    ${props?.family === 'bold' && `font-family: ${props.theme.families.bold}`};
    ${props?.family === 'regular' && `font-family: ${props.theme.families.regular}`};
    ${props?.family === 'thin' && `font-family: ${props.theme.families.thin}`};
    margin: ${props?.marginTop || 0}px ${props?.marginRight || 0}px ${props?.marginBottom || 0}px
      ${props?.marginLeft || 0}px;
  `};
`;

export const CommonBoldText = styled(CustomText)<{
  flex?: number;
  size?: number;
  color?: string;
  underline?: boolean;
  lineHeight?: number;
  textAlign?: TextAlignType;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}>`
  ${(props) => css`
    color: ${props.color || '#1e1e1e'};
    font-size: ${props?.size || 14}px;
    font-family: ${props.theme.families.semiBold};
    ${props?.flex && `flex: ${props.flex}`};
    ${props?.underline && `text-decoration: underline`};
    ${props?.textAlign && `text-align: ${props.textAlign}`};
    line-height: ${props?.lineHeight || 24}px;
    margin: ${props?.marginTop || 0}px ${props?.marginRight || 0}px ${props?.marginBottom || 0}px
      ${props?.marginLeft || 0}px;
  `};
`;

// (flatList) ItemSeparatorComponent 에 쓰이는 공용 스타일
export const CommonListLine = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.neutral30};
`;

export const CommonLabel = styled(CustomText)<{
  flex?: number;
  width?: string;
  size?: number;
  textAlign?: TextAlignType;
  family?: FontFamilyTypes;
  underline?: boolean;
  lineHeight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}>`
  ${(props) => css`
    ${props?.flex && `flex: ${props.flex}`};
    ${props?.width && `width: ${props.width}`};
    color: ${props.theme.colors.darkBlue};
    font-size: ${props?.size || 14}px;
    line-height: ${props?.lineHeight || 24}px;
    ${props?.textAlign && `text-align: ${props.textAlign}`};
    ${props?.underline &&
    `text-decoration: underline; text-decoration-color: ${props.theme.colors.darkBlue}`};
    ${props?.family === 'extraBold' && `font-family: ${props.theme.families.extraBold}`};
    ${props?.family === 'extraLight' && `font-family: ${props.theme.families.extraLight}`};
    ${props?.family === 'semiBold' && `font-family: ${props.theme.families.semiBold}`};
    ${props?.family === 'black' && `font-family: ${props.theme.families.black}`};
    ${props?.family === 'light' && `font-family: ${props.theme.families.light}`};
    ${props?.family === 'medium' && `font-family: ${props.theme.families.medium}`};
    ${props?.family === 'bold' && `font-family: ${props.theme.families.bold}`};
    ${props?.family === 'regular' && `font-family: ${props.theme.families.regular}`};
    ${props?.family === 'thin' && `font-family: ${props.theme.families.thin}`};
    margin: ${props?.marginTop || 0}px ${props?.marginRight || 0}px ${props?.marginBottom || 0}px
      ${props?.marginLeft || 0}px;
  `}
`;

export const CommonInputTitle = styled(CustomText)<{ flex?: number; marginTop?: number }>`
  ${(props) =>
    typeof props.flex !== 'undefined' &&
    css`
      flex: ${props.flex};
    `};
  font-size: 16px;
  line-height: 19.2px;
  margin: ${(props) => (typeof props.marginTop !== 'undefined' ? props.marginTop : 30)}px 0 20px 0;
`;

export const CommonPointText = styled(CustomText)<{
  flex?: number;
  size?: number;
  underline?: boolean;
  family?: FontFamilyTypes;
  textAlign?: TextAlignType;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  lineHeight?: number;
  marginLeft?: number;
}>`
  ${(props) => css`
    ${props?.flex && `flex: ${props.flex}`};
    color: ${props.theme.colors.primary};
    font-size: ${props?.size || 18}px;
    font-family: ${props.theme.families.semiBold};
    line-height: ${props.lineHeight || 18}px;
    ${props?.textAlign && `text-align: ${props.textAlign}`};
    ${props.underline &&
    `text-decoration: underline; text-decoration-color: ${props.theme.colors.primary};`};
    ${props?.family === 'extraBold' && `font-family: ${props.theme.families.extraBold}`};
    ${props?.family === 'extraLight' && `font-family: ${props.theme.families.extraLight}`};
    ${props?.family === 'semiBold' && `font-family: ${props.theme.families.semiBold}`};
    ${props?.family === 'black' && `font-family: ${props.theme.families.black}`};
    ${props?.family === 'light' && `font-family: ${props.theme.families.light}`};
    ${props?.family === 'medium' && `font-family: ${props.theme.families.medium}`};
    ${props?.family === 'bold' && `font-family: ${props.theme.families.bold}`};
    ${props?.family === 'regular' && `font-family: ${props.theme.families.regular}`};
    ${props?.family === 'thin' && `font-family: ${props.theme.families.thin}`};
    margin: ${props?.marginTop || 0}px ${props?.marginRight || 0}px ${props?.marginBottom || 0}px
      ${props?.marginLeft || 0}px;
  `}
`;

export const CommonScreenTitle = styled(CustomText)<{
  flex?: number;
  size?: number;
  textAlign?: TextAlignType;
  underline?: boolean;
  lineHeight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}>`
  ${(props) => css`
    ${props?.flex && `flex: ${props.flex}`};
    ${props?.underline && `text-decoration: underline`};
    ${props?.textAlign && `text-align: ${props.textAlign}`};
    color: ${props.theme.colors.neutral100};
    font-family: ${props.theme.families.semiBold};
    font-size: ${props?.size || 20}px;
    line-height: ${props.lineHeight || 28}px;
    margin: ${props?.marginTop || 0}px ${props?.marginRight || 0}px ${props?.marginBottom || 0}px
      ${props?.marginLeft || 0}px;
  `}
`;

export const CommonLine = styled.View<{
  marginVertical?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}>`
  ${(props) => css`
    width: 100%;
    height: 16px;
    background-color: ${(props) => props.theme.colors.neutral10};
    margin: ${(props.marginVertical ?? props?.marginTop) || 0}px ${props?.marginRight || 0}px
      ${(props.marginVertical ?? props?.marginBottom) || 0}px ${props?.marginLeft || 0}px;
  `}
`;

export const CommonPaddingContainer = styled.View<{ flex?: number }>`
  ${(props) => css`
    ${props?.flex && `flex: ${props?.flex}`};
    padding: 0 16px 0 16px;
  `}
`;
