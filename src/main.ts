import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const startApp = async () => {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
};

startApp();
