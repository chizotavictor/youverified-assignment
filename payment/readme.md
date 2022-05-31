# Payment Service

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

- Start GRPC server

```sh
    yarn grpc:start
```

- Start AMQP worker

```sh
    yarn queue-worker:start
```

- Run tests coverage

```sh
    yarn test:coverage
```

| Routes               | Path                           |
| -------------------- | ------------------------------ |
| GetAllPayments       | [GET] [/payments]              |
| GetPaymentById       | [GET] [/payments/:id ]         |
| ProcessPayment (Pay) | [POST] [/payments/:id/process] |
