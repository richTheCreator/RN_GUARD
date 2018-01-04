import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import Logo from '../../assets/images/RN_GUARD.png';
import { Button } from '../../components/Common';
import Streaks from '../../assets/images/Logo_name.png';
import Styles from './Styles';
import { Colors } from '../../assets/Globals';

const window = Dimensions.get('window');

const Landing = () => (
  <Grid style={Styles.container}>
    <Row
      style={[Styles.wrapper, { width: window.width, height: window.height }]}
    >
      <Col style={{ alignItems: 'center' }}>
        <Image
          style={{ height: 220, width: 200, marginBottom: 25 }}
          source={Logo}
          imageResizeMode="contain"
        />
        <Text style={Styles.fonts.appName}>
        RN-GUARD
        </Text>
        <Button BGcolor={Colors.Green} onPress={() => Actions.push('SignIn')} >
          Sign In
        </Button>
        <Button BGcolor={Colors.Purple} onPress={() => Actions.push('SignUp')} >
          Sign Up
        </Button>
      </Col>
    </Row>
  </Grid>
);


export default Landing;
