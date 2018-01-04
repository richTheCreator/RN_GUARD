import { AsyncStorage } from 'react-native';
import { observable } from 'mobx';
import axios from 'axios';
import { SIGNUP_URL, SUPER_SECRET_API } from './api';

class UserStore {
  @observable uid = '';
  @observable authorized = false;
  @observable userData = undefined;
  /** ** SIGN IN FLOW *** */

  // make the call to the FBSDK - ( done in signUp component )
  // pass the token into the signIn function
  // save the token to AsyncStorage
  // *optional -- call graphQL for more user data
  // create the user in mongoDB
  // pass access_token header

  load = async () => {
    const values = await AsyncStorage.getItem('user/authorized');
    return JSON.parse(values) || false;
  };

  save = async (FBtoken) => {
    await AsyncStorage.setItem('user/authorized', JSON.stringify({ FBtoken }));
  };

  remove = async () => {
    await AsyncStorage.removeItem('user/authorized');
    this.authorized = false;
  };

  createUser = async (FBtoken) => {
    const config = {
      headers: {
        access_token: FBtoken
      }
    };
    // const testObj = { fullname: 'Richard Morales' };
    return await axios.post(SIGNUP_URL, {}, config);
  }

  signIn = async (FBtoken) => {
    if (FBtoken) {
      this.save(FBtoken);
      this.authorized = true;
      return true;
    }
    // const { firstName, lastName } = await this.getUserData();
    return false;
  };

  signUp = async (FBtoken) => {
    if (FBtoken) {
      this.createUser(FBtoken).then((data) => {
        if (data.data.user.alreadyCreated) {
          alert('A user already exists with this info.');
          return;
        }
        console.warn('NEW_USER_CREATED', data.data.user);
        this.userData = data.data.user;
        this.save(FBtoken);
        this.authorized = true;
      }).catch(err => console.warn('ERR_CREATING_USER:', err));
    }
    // call graphQL for more user info
    // save user info to mongo
    return true;
  };

  callSecretRoute = async () => {
    await this.load()
      .then((FBtoken) => {
        console.warn('FBtoken', FBtoken);
        const config = {
          headers: {
            access_token: FBtoken.FBtoken
          }
        };
        axios.get(SUPER_SECRET_API, config)
          .then((data) => {
            alert(data.data.message);
          }).catch(err => console.warn('ERR_SECRET_ROUTE:', err));
      }).catch(err => console.warn('ERR_SECRET_ROUTE:', err));
  }

  logout = async () => {
    await this.remove();
    this.authorized = false;
    return true;
  };
}

export default new UserStore();
