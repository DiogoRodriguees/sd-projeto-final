import { ClientsModuleOptions, Transport } from '@nestjs/microservices';

export const EmailClientConfig: ClientsModuleOptions = [
  {
    name: 'EMAIL_CLIENT',
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'EMAIL_QUEUE',
      queueOptions: {
        durable: false,
      },
    },
  },
];
