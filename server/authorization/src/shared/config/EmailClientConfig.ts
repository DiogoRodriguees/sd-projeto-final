import { ClientsModuleOptions, Transport } from '@nestjs/microservices';

export const EmailClientConfig: ClientsModuleOptions = [
  {
    name: 'EMAIL_CLIENT',
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@rabbitmq:5672'],
      queue: 'EMAIL_QUEUE',
      queueOptions: {
        durable: false,
      },
    },
  },
];
