import ProductModel from '@src/models/product.model';

const products = [
  {
    _id: undefined,
    name: 'LED LG Smart TV',
  },
  {
    _id: undefined,
    name: 'Tecno Camon 12 pro',
  },
  {
    _id: undefined,
    name: 'Phone 13 pro max',
  },
  {
    _id: undefined,
    name: 'Macbook M1',
  },
  {
    _id: undefined,
    name: 'DsTv Decoder',
  },
  {
    _id: undefined,
    name: 'Papas Pissa BIG',
  },
];

async function run() {
  await products.forEach(e => {
    console.log(e);
    ProductModel.create(e);
  });
}

run();
