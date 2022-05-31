# Customer Service

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

- Run database seed

```sh
    yarn db:seed
```

- Run tests coverage

```sh
    yarn test:coverage
```

| Routes          | Path                    |
| --------------- | ----------------------- |
| GetAllCustomers | [GET] [/customers]      |
| GetCustomerById | [GET] [/customers/:id ] |
