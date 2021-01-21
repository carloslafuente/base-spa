import { Color } from '../models/color.model';

export const colorsArray: Color[] = [
  {
    name: 'default',
    hexCode: '#ffffff',
  },
  {
    name: 'primary',
    hexCode: '#673ab7',
  },
  {
    name: 'accent',
    hexCode: '#ffd740',
  },
  {
    name: 'warn',
    hexCode: '#f44336',
  },
  {
    name: 'white',
    hexCode: '#ffffff',
  },
  {
    name: 'black',
    hexCode: '#000000',
  },
  {
    name: 'red',
    hexCode: '#f44336',
  },
  {
    name: 'pink',
    hexCode: '#e91e63',
  },
  {
    name: 'purple',
    hexCode: '#9c27b0',
  },
  {
    name: 'deepPurple',
    hexCode: '#673ab7',
  },
  {
    name: 'indigo',
    hexCode: '#3f51b5',
  },
  {
    name: 'blue',
    hexCode: '#2196f3',
  },
  {
    name: 'lightBlue',
    hexCode: '#03a9f4',
  },
  {
    name: 'cyan',
    hexCode: '#00bcd4',
  },
  {
    name: 'teal',
    hexCode: '#009688',
  },
  {
    name: 'green',
    hexCode: '#4caf50',
  },
  {
    name: 'lightGreen',
    hexCode: '#8bc34a',
  },
  {
    name: 'lime',
    hexCode: '#cddc39',
  },
  {
    name: 'yellow',
    hexCode: '#ffeb3b',
  },
  {
    name: 'amber',
    hexCode: '#ffc107',
  },
  {
    name: 'orange',
    hexCode: '#ff9800',
  },
  {
    name: 'deepOrange',
    hexCode: '#ff5722',
  },
  {
    name: 'brown',
    hexCode: '#795548',
  },
  {
    name: 'grey',
    hexCode: '#9e9e9e',
  },
  {
    name: 'blueGrey',
    hexCode: '#607d8b',
  },
];

export const colors: any = {
  default: '#ffffff',
  primary: '#673ab7',
  accent: '#ffd740',
  warn: '#f44336',
  white: '#ffffff',
  black: '#000000',
  red: '#f44336',
  pink: '#e91e63',
  purple: '#9c27b0',
  deepPurple: '#673ab7',
  indigo: '#3f51b5',
  blue: '#2196f3',
  lightBlue: '#03a9f4',
  cyan: '#00bcd4',
  teal: '#009688',
  green: '#4caf50',
  lightGreen: '#8bc34a',
  lime: '#cddc39',
  yellow: '#ffeb3b',
  amber: '#ffc107',
  orange: '#ff9800',
  deepOrange: '#ff5722',
  brown: '#795548',
  grey: '#9e9e9e',
  blueGrey: '#607d8b',
};

export const getColor = (name: string): Color => {
  const response = colorsArray.find((color) => color.name === name);
  if (response == undefined) {
    return getColor('default');
  }
  return response;
};
