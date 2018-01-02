import React from 'react';
import {
  Image,
  Dimensions,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Logo from '../assets/images/Logo_w-gradient.png';
import Styles from './Styles';

const window = Dimensions.get('window');

const Launch = () => (
  <Grid style={Styles.container}>
    <Row
      style={[Styles.wrapper, { width: window.width, height: window.height }]}
    >
      <Col style={{ alignItems: 'center' }}>
        <Image
          style={{ height: 150, width: 150, marginBottom: 40 }}
          source={Logo}
        />
      </Col>
    </Row>
  </Grid>
);


export default Launch;
