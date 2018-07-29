import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	app.useGlobalPipes(new ValidationPipe({transform: true}));
	await app.listen(3000);
}
bootstrap();
