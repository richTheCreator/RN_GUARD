import Colors from './Colors';

const Bungee = 'Bungee-Regular';
const muliXB = 'Muli-ExtraBold';

const title = {
  textAlign: 'center',
  fontFamily: Bungee,
  fontSize: 52,
  color: Colors.Dark,
  marginBottom: 25
};
const btn = {
  fontFamily: Bungee,
  fontSize: 24,
  color: Colors.Dark,
  letterSpacing: 0.8,
};
const body = {
  fontFamily: muliXB,
  fontSize: 21,
  color: Colors.Black,
  letterSpacing: 0,
  lineHeight: 28,
};

const Fonts = {
  title: {
    ...title
  },
  btn: {
    ...btn,
    color: Colors.offWhite
  },
  body: {
    ...body
  },
};

export default Fonts;
