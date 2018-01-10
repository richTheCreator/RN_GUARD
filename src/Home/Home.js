import React, { Component } from 'react';
import {
  Text,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { create } from 'mobx-persist';
import { observer } from 'mobx-react/native';
import { Colors } from '@theme/';
import UserStore from '../stores/userStore';
import Styles from './Styles';
import { Avatar, Button } from '../components/Common';

const hydrate = create({ storage: AsyncStorage });
hydrate('userData', UserStore);

@observer class Home extends Component {
 handleSignOut = () => {
   UserStore.logout();
 }

 handleApiCall = () => {
   UserStore.callSecretRoute();
 }

 render() {
   return (
     <Grid style={Styles.container}>
       <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
         <Row
           style={Styles.ui.wrapper}
         >
           <Col style={Styles.ui.alignCenter}>
             {UserStore.userData !== undefined ?
               <Col style={[Styles.ui.alignCenter, { marginBottom: 50 }]}>
                 <Avatar source={UserStore.userData.avatar} size={100} />
                 <Text style={Styles.fonts.body}>
                 Welcome! {'\n'} {UserStore.userData.fullname}
                 </Text>
               </Col> :
               <Col style={[Styles.ui.alignCenter, { marginBottom: 50 }]}>
                 <ActivityIndicator />
               </Col>
           }
             <Button
               BGcolor={Colors.Green}
               onPress={this.handleSignOut}
             >
               Sign Out
             </Button>
           </Col>
         </Row>
       </SafeAreaView>
     </Grid>
   );
 }
}

export default Home;
