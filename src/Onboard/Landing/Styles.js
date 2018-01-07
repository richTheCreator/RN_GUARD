import {
  Dimensions,
} from 'react-native';
import { Colors, Fonts } from '@theme/';

const window = Dimensions.get('window');

const appName = {
  textAlign: 'center',
  fontFamily: 'Bungee-Regular',
  fontSize: 52,
  color: Colors.Dark,
  marginBottom: 25
};

const btn = {
  ...Fonts.btn,
  paddingRight: 16,
  textAlign: 'right'
};
const Styles = {
  container: {
    flex: 1,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    width: window.width,
    height: window.height,
  },
  buttonWrapper: {
    flex: -1,
    alignItems: 'flex-end',
    padding: 34,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0
  },
  btnContainer: {
    backgroundColor: 'transparent',
    flex: -1,
    alignItems: 'center',
    paddingBottom: 24,
  },
  modalHeader: {
    flex: -1,
    width: window.width,
    zIndex: 1000,
    position: 'absolute',
    top: 40,
    height: 60,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20
  },
  fonts: {
    appName,
    btn,
  }
};

export default Styles;
