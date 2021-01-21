import { BasicField } from '../models/basic-field.model';

const formTemplate: BasicField[] = [
  {
    type: 'textBox',
    label: 'Name',
  },
  {
    type: 'number',
    label: 'Age',
  },
  {
    type: 'select',
    label: 'favorite book',
    options: ['Jane Eyre', 'Pride and Prejudice', 'Wuthering Heights'],
  },
];
export default formTemplate;
