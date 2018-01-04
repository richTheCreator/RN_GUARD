import React from 'react';
import { Image } from 'react-native';
import { Col } from 'react-native-easy-grid';
import Styles from './Styles';

const Avatar = (props) => {
  const {
    source, size,
  } = props;

  return (
    <Col style={{ paddingRight: 10 }} size={-1} >
      <Image
        imageResizeMode="contain"
        style={[Styles.layout.avatar, {
              height: size,
              width: size,
              borderRadius: size / 2
            }]}
        source={{ uri: source }}
      />
    </Col>
  );
};

export default Avatar;
