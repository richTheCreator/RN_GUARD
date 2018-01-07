import React from 'react';
import {
  Image,
  Dimensions,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Logo from '../assets/images/RN_GUARD.png';
import Styles from './Styles';

const window = Dimensions.get('window');

const Launch = () => (
  <Grid style={Styles.container}>
    <Row
      style={[Styles.wrapper, { width: window.width, height: window.height }]}
    >
      <Col style={{ alignItems: 'center' }}>
        <Image
          style={{ height: 156, width: 142, marginBottom: 25 }}
          source={Logo}
          imageResizeMode="contain"
        />
      </Col>
    </Row>
  </Grid>
);


export default Launch;
