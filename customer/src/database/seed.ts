import CustomerModel from '@src/models/customer.model';

const customers = [
  {
    _id: undefined,
    name: 'Zell',
    email: 'testing1@gmail.com',
  },
  {
    _id: undefined,
    name: 'Vincy',
    email: 'testing2@gmail.com',
  },
  {
    _id: undefined,
    name: 'Shion',
    email: 'testing3@gmail.com',
  },
  {
    _id: undefined,
    name: 'James',
    email: 'testing4@gmail.com',
  },
  {
    _id: undefined,
    name: 'Peters',
    email: 'testing5@gmail.com',
  },
  {
    _id: undefined,
    name: 'John',
    email: 'testing6@gmail.com',
  },
  {
    _id: undefined,
    name: 'Henry',
    email: 'testing7@gmail.com',
  },
  {
    _id: undefined,
    name: 'Kendrick',
    email: 'testing8@gmail.com',
  },
  {
    _id: undefined,
    name: 'Stanley',
    email: 'testing9@gmail.com',
  },
  {
    _id: undefined,
    name: 'Amos',
    email: 'testing10@gmail.com',
  },
];

async function run() {
  await customers.forEach(e => {
    console.log(e);
    CustomerModel.create(e);
  });
}

run();
