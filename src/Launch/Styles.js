import { Colors, Fonts } from '../assets/Globals';

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
    backgroundColor: 'transparent',
    flex: -1,
    alignItems: 'center',
    paddingBottom: 24,
  },
  triangle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 800,
    borderTopWidth: 250,
    borderRightColor: 'transparent',
    borderTopColor: Colors.offWhite,
    zIndex: -1,
    transform: [
      { rotate: '180deg' }
    ]
  },
  fonts: {
    tagline,
    btn,
  }
};

export default Styles;
