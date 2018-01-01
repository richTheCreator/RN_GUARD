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

class Home extends Component {
  componentDidUpdate() {
    if (this.props.user) {
      console.warn('USER!', user);
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
                  Welcome home!
              </Text>
            </TouchableWithoutFeedback>
          </Col>
          <View style={Styles.triangle} />
        </Row>
      </Grid>

    );
  }
}

export default Home;
