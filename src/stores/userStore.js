import { AsyncStorage } from 'react-native';
import { observable, action, reaction } from 'mobx';
import { autobind } from 'core-decorators';
import { persist } from 'mobx-persist';
import { Actions } from 'react-native-router-flux';

import axios from 'axios';
import { SIGNUP_URL, SIGNIN_URL, SUPER_SECRET_API } from './api';

@autobind
class UserStore {
  @observable uid = '';
  @observable authorized = null;
  @persist('object') @observable userData = undefined;

  constructor() {
    // listen for store changes
    reaction(() =>
      this.authorized, (authorized) => {
      // handle auth routing
      authorized ? Actions.Home() : Actions.Landing();
    });
  }

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
    const fromSignUp = true;
    return axios.post(SIGNUP_URL, { fromSignUp }, config);
  }

  fetchUser = async (FBtoken) => {
    const config = {
      headers: {
        access_token: FBtoken
      }
    };
    return axios.post(SIGNIN_URL, {}, config);
  }

  signIn = async (FBtoken) => {
    if (FBtoken) {
      this.fetchUser(FBtoken).then((data) => {
        this.userData = data.data.user;
        this.save(FBtoken);
        this.authorized = true;
      }).catch(() => alert('Please "Sign Up" First'));
    }
    return true;
  };

  signUp = async (FBtoken) => {
    if (FBtoken) {
      this.createUser(FBtoken).then((data) => {
        if (data.data.user.alreadyCreated) {
          alert('A user already exists with this info.');
          return;
        }
        this.userData = data.data.user;
        this.save(FBtoken);
        this.authorized = true;
      }).catch(err => console.warn('ERR_CREATING_USER:', err));
    }
    return true;
  };

  callSecretRoute = async () => {
    const FBtoken = await this.load();
    const config = {
      headers: {
        access_token: FBtoken.FBtoken
      }
    };
    axios.get(SUPER_SECRET_API, config)
      .then((data) => {
        alert(data.data.message);
      }).catch(err => console.warn('ERR_SECRET_ROUTE:', err));
  }

  logout = async () => {
    await this.remove();
    this.authorized = false;
    return true;
  };
}

export default new UserStore();
