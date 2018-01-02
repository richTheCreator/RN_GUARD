import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import UserStore from '../stores/userStore';
import Styles from './Styles';
import Colors from '../assets/Globals/Colors';

const window = Dimensions.get('window');

class Home extends Component {
  componentDidUpdate() {
    if (this.props.user) {
      console.warn('USER!', user);
      // Actions.Home();
    }
  }
 handleSignOut = () => {
   UserStore.remove();
   Actions.Landing();
 }
 render() {
   return (
     <Grid style={Styles.container}>
       <Row
         style={[Styles.wrapper, { width: window.width, height: window.height }]}
       >
         <Col style={{ alignItems: 'center' }}>
           <Text style={Styles.fonts.tagline}>
                  Welcome home!
           </Text>
           <TouchableWithoutFeedback
             onPress={this.handleSignOut}
           >
             <Text style={[Styles.fonts.tagline, { color: Colors.Blue }]}>
                  Sign Out
             </Text>
           </TouchableWithoutFeedback>
         </Col>
       </Row>
     </Grid>

   );
 }
}

export default Home;
