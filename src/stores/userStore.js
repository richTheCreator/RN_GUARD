import { AsyncStorage } from 'react-native';
import { observable, action } from 'mobx';

class UserStore {
  @observable uid = '';
  @observable authorized = false;
  /** ** SIGN IN FLOW *** */

  // make the call to the FBSDK - ( done in signUp component )
  // pass the token into the signIn function
  // save the token to AsyncStorage
  // *optional -- call graphQL for more user data
  // create the user in mongoDB
  // pass access_token header

  load = async () => {
    const values = await AsyncStorage.getItem('user/authorized');
    return JSON.parse(values) || {};
  };

  save = async (FBtoken) => {
    await AsyncStorage.setItem('user/authorized', JSON.stringify({ FBtoken }));
  };

    remove = async () => {
      await AsyncStorage.removeItem('user/authorized');
    };

  @action signIn = async (FBtoken) => {
    if (FBtoken) {
      this.save(FBtoken);
      this.authorized = true;
    }
    // const { firstName, lastName } = await this.getUserData();
    return true;
  };

  @action signUp = async (FBtoken) => {
    if (FBtoken) {
      this.save(FBtoken);
      this.authorized = true;
    }
    // call graphQL for more user info
    // save user info to mongo
    return true;
  };

  @action logout = async () => {
    await this.remove();
    this.authorized = false;
    return true;
  };
}

export default new UserStore();
