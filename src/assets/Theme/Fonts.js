import Colors from './Colors';

const XTRA = 'Muli-ExtraBold';
const BOLD = 'Muli-Bold';

const H2 = {
  fontFamily: XTRA,
  fontSize: 41,
  lineHeight: 56,
  color: Colors.Black
};
const H3 = {
  fontFamily: XTRA,
  fontSize: 26,
  color: Colors.Black,
  letterSpacing: 1,
  lineeHeight: 28,
};
const H4 = {
  fontFamily: XTRA,
  fontSize: 21,
  color: Colors.Black,
  letterSpacing: 0,
  lineeHeight: 28,
};
const instructions = {
  fontFamily: BOLD,
  fontSize: 24,
  color: Colors.Dark,
  letterSpacing: 0.8,
  lineHeight: 32,
};
const labels = {
  fontFamily: BOLD,
  fontSize: 16,
  color: Colors.Grey,
  lineHeight: 28,
};
const body = {
  fontFamily: BOLD,
  fontSize: 16,
  color: Colors.Dark,
  lineHeight: 24,
};
const small = {
  fontFamily: BOLD,
  fontSize: 12,
  color: Colors.Dark,
  lineHeight: 18,
};
const btn = {
  fontFamily: 'Bungee-Regular',
  fontSize: 24,
  color: Colors.Dark,
  letterSpacing: 0.8,
};

const Fonts = {
  H2: {
    ...H2
  },
  H2_white: {
    ...H2,
    color: Colors.offWhite
  },
  H3: {
    ...H3
  },
  H3_green: {
    ...H3,
    color: Colors.Green
  },
  H3_blue: {
    ...H3,
    color: Colors.Blue
  },
  instructions: {
    ...instructions
  },
  H4: {
    ...H4
  },
  H4_blue: {
    ...H4,
    color: Colors.Blue
  },
  H4_green: {
    ...H4,
    color: Colors.Green
  },
  H4_purple: {
    ...H4,
    color: Colors.Purple
  },
  H4_dark: {
    ...H4,
    color: Colors.Dark
  },
  labels: {
    ...labels
  },
  body: {
    ...body
  },
  body_grey: {
    ...body,
    color: Colors.Grey
  },
  btn: {
    ...btn
  },
  small: {
    ...small
  }
};

export default Fonts;
