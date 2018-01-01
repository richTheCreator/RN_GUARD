import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';

const Button = (props) => {
  const { botMargin, topMargin, onPress, children, ghost } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Styles.btnType.main,
        { marginBottom: botMargin, marginTop: topMargin },
        ghost ? Styles.btnType.ghostButton :
        Styles.btnType.buttonFill
      ]}
    >
      <Text
        style={ghost ? Styles.fonts.BTNaccent : Styles.fonts.BTNlight}
      >
        { children }
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  botMargin: PropTypes.number,
  topMargin: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  ghost: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
