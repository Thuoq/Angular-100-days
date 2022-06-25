export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

export const authors: Author[] = [
  {
    id: 1,
    firstName: 'Thoung',
    lastName: 'Baby',
    email: 'thuong@gmail.com',
    gender: 'female',
    ipAddress: '123'
  },
  {
    id: 2,
    firstName: 'Sambi',
    lastName: 'Log',
    email: 'sambi@gmail.com',
    gender: 'male',
    ipAddress: '5123'
  },
  {
    id: 3,
    firstName: 'Bit',
    lastName: 'Log To',
    email: 'bit@gmail.com',
    gender: 'female',
    ipAddress: '5123'
  }

];
