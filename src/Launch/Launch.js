import React from 'react';
import {
  Image,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Logo from '../assets/images/RN_GUARD.png';
import Styles from './Styles';

const Launch = () => (
  <Grid style={Styles.ui.container}>
    <Row
      style={Styles.ui.wrapper}
    >
      <Col style={{ alignItems: 'center' }}>
        <Image
          style={Styles.ui.smIcon}
          source={Logo}
          imageResizeMode="contain"
        />
      </Col>
    </Row>
  </Grid>
);


export default Launch;
