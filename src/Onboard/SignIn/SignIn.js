import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
// import { LoginManager } from 'react-native-fbsdk';
import Styles from './Styles';

const window = Dimensions.get('window');

class SignIn extends Component {
  componentDidUpdate() {
    if (this.props.user) {
      this.props.dispatch(reset('loginForm'));
      // Actions.Home();
    }
  }

  render() {
    return (
      <Grid style={Styles.container}>
        <Row
          style={[Styles.wrapper, { width: window.width, height: window.height }]}
        >
          <Col style={{ alignItems: 'center' }}>
            <TouchableWithoutFeedback
              onPress={Actions.pop}
            >
              <Text style={Styles.fonts.tagline}>
                  Close Modal.
              </Text>
            </TouchableWithoutFeedback>
          </Col>
          <View style={Styles.triangle} />
        </Row>
      </Grid>

    );
  }
}

export default SignIn;
