import React from 'react';
import { Text as DefaultText, TextStyle, StyleProp, TextProps, Animated } from 'react-native';
import styled from 'styled-components/native';

interface DefaultProps extends TextProps {
  style?: StyleProp<TextStyle> & Animated.AnimatedProps<StyleProp<Text>>;
  isAnimated?: boolean;
  children?: any;
}

const CreateAnimatedText = Animated.createAnimatedComponent(DefaultText);

const CustomText = ({ isAnimated, children, style, numberOfLines }: DefaultProps) => {
  return isAnimated ? (
    <AnimatedText style={style} numberOfLines={numberOfLines} allowFontScaling={false}>
      {children}
    </AnimatedText>
  ) : (
    <CommonText style={style} numberOfLines={numberOfLines} allowFontScaling={false}>
      {children}
    </CommonText>
  );
};

const AnimatedText = styled((props) => <CreateAnimatedText {...props} />)`
  font-family: ${(props) => props.theme.families.regular};
  letter-spacing: -0.32px;
  color: ${(props) => props.theme.colors.neutral100};
`;

const CommonText = styled(DefaultText)`
  font-family: ${(props) => props.theme.families.regular};
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.neutral100};
`;

export default CustomText;
