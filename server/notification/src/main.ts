import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './modules/AppModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'EMAIL_QUEUE',
      queueOptions: {
        durable: false,
      },
    },
  });
  app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
