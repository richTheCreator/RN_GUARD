import React from 'react';
import {
  Text,
  Image,
  StatusBar
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import Logo from '../../assets/images/RN_GUARD.png';
import { Button } from '@common/';
import { Colors } from '@theme/';
import Styles from './Styles';

const Landing = () => (
  <Grid style={Styles.ui.container}>
    <StatusBar
      barStyle="light-content"
    />
    <Row
      style={Styles.ui.wrapper}
    >
      <Col style={{ alignItems: 'center' }}>
        <Image
          style={Styles.ui.lgIcon}
          source={Logo}
          imageResizeMode="contain"
        />
        <Text style={Styles.fonts.title}>
          RN-GUARD
        </Text>
        <Button BGcolor={Colors.Green} onPress={() => Actions.push('SignIn')} >
          Sign In
        </Button>
        <Button BGcolor={Colors.Orange} onPress={() => Actions.push('SignUp')} >
          Sign Up
        </Button>
      </Col>
    </Row>
  </Grid>
);


export default Landing;
