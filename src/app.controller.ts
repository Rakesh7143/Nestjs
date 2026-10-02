import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postMethod(): string {
    return 'This is a POST method response from the AppController.';
  }

  @Get('/users')
  getUsers(): string {
    return 'This is a GET method response for /users from the AppController.';
  }

  @Get('/users/details')
  getUsersDetails(): object {
    return {
      id: 1,
      name: 'John Doe',
      email: 'test@gmail.com'
    };
  }
}
