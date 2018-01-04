import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Styles from './Styles';

const Button = (props) => {
  const { onPress, children, BGcolor } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[Styles.btnMain, { backgroundColor: BGcolor }]}
    >
      <View>
        <Text
          style={Styles.fonts.btn}
        >
          { children }
        </Text>
      </View>
    </TouchableOpacity>
  );
};


export default Button;
