export interface IColors {
  primary: string;
  secondary: string;
  dark: string;
  light: string;
  text: {
    primary: string;
    secondary: string;
    accent: string;
    accentDark: string;
  };
}

const colors: IColors = {
  primary: '#FBCE3E',
  secondary: '#FBB23E',
  dark: '#E8A131',
  light: '#FFF',
  text: {
    primary: '#FFF',
    secondary: '#585858',
    accent: '#FBCE3E',
    accentDark: '#FBB23E',
  },
};

export default colors;
