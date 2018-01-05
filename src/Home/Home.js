import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  AsyncStorage,
  TouchableWithoutFeedback,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { persist, create } from 'mobx-persist';
import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';
import UserStore from '../stores/userStore';
import Styles from './Styles';
import Colors from '../assets/Globals/Colors';
import { Avatar, Button } from '../components/Common';

const window = Dimensions.get('window');
const hydrate = create({ storage: AsyncStorage });
hydrate('userData', UserStore)

@observer class Home extends Component {
 handleSignOut = () => {
   UserStore.logout();
   Actions.Landing();
 }

 handleApiCall = () => {
   UserStore.callSecretRoute();
 }

 render() {
   return (
     <Grid style={Styles.container}>
       <Row
         style={[Styles.wrapper, { width: window.width, height: window.height }]}
       >
         <Col style={Styles.alignCenter}>
           {UserStore.userData !== undefined &&
             <Col style={[Styles.alignCenter, { marginBottom: 50 }]}>
               <Avatar source={UserStore.userData.avatar} size={100} />
               <Text style={Styles.fonts.tagline}>
                 Welcome {'\n'} {UserStore.userData.fullname}!
               </Text>
             </Col>
           }
           <Button
             BGcolor={Colors.Green}
             onPress={this.handleSignOut}
           >
             Sign Out
           </Button>
           <Button
             BGcolor={Colors.Purple}
             onPress={this.handleApiCall}
           >
             Super Secret!
           </Button>
         </Col>
       </Row>
     </Grid>

   );
 }
}

export default Home;
