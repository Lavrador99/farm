import React from 'react';
import {Button, ButtonProps} from 'react-native-elements';

interface ButtonUniqueProps extends ButtonProps {
  text: string;
  onClick: Function;
}

const ButtonPig = (props: ButtonUniqueProps) => {
  const {
    text,
    containerStyle,
    buttonStyle,
    onClick,
    disabled,
    icon,
    iconRight,
    titleStyle,
    type,
    raised,
  } = props;

  const onPress = () => {
    onClick();
  };

  return (
    <Button
      disabled={disabled}
      onPress={() => onPress()}
      icon={icon}
      title={text}
      iconRight={iconRight}
      containerStyle={containerStyle}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      raised={raised}
      type={type}
    />
  );
};

export default ButtonPig;
