# Order Service

### To start service:

- Install YARN Packages

```sh
    yarn install
```

- Set .env file

```sh
    cp .env.example .env
```

- Start service

```sh
    yarn start:dev
```

- Run tests coverage

```sh
    yarn test:coverage
```

| Routes       | Path                 |
| ------------ | -------------------- |
| GetAllOrders | [GET] [/orders]      |
| GetOrderById | [GET] [/orders/:id ] |
| CreateOrder  | [POST] [/orders]     |
