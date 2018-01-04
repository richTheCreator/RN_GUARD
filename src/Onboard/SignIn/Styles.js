import { Colors, Fonts } from '../../assets/Globals';

const tagline = {
  ...Fonts.instructions,
  textAlign: 'center'
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
    backgroundColor: '#FFF',
    justifyContent: 'center'
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
    flex: -1,
    alignItems: 'center',
    paddingBottom: 24,
  },
  fonts: {
    tagline,
    btn,
  }
};

export default Styles;
