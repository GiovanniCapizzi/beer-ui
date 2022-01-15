export interface IColors {
  primary: string;
  secondary: string;
  dark: string;
  text: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const colors: IColors = {
  primary: '#FBCE3E',
  secondary: '#FBB23E',
  dark: '#E8A131',
  text: {
    primary: '#585858',
    secondary: '#FFF',
    accent: '#FBB23E'
  },
};

export default colors;
