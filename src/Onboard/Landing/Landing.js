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
import Icon from 'react-native-vector-icons/Feather';
import Logo from '../../assets/images/Logo_w-gradient.png';
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
          style={{ height: 150, width: 150, marginBottom: 40 }}
          source={Logo}
        />
        <Image style={{ height: 50, width: 266, marginBottom: 16 }} source={Streaks} />
        <Text style={Styles.fonts.tagline}>
        Performance, for life.
        </Text>
      </Col>
      <Col style={[Styles.buttonWrapper, { width: window.width }]}>
        <TouchableWithoutFeedback
          onPress={() => Actions.push('SignIn')}
        >
          <Row style={Styles.btnContainer}>
            <Text style={Styles.fonts.btn}>
            Sign In
            </Text>
            <Icon
              name="arrow-right"
              size={32}
              color={Colors.Blue}
            />
          </Row>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => Actions.push('SignUp')}
        >
          <Row style={Styles.btnContainer}>
            <Text style={Styles.fonts.btn}>
            Sign Up
            </Text>
            <Icon
              name="arrow-right"
              size={32}
              color={Colors.Blue}
            />
          </Row>
        </TouchableWithoutFeedback>
      </Col>
      <View style={Styles.triangle} />
    </Row>
  </Grid>
);


export default Landing;
