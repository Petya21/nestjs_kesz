import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('quotes')
  @Render('index')
  findAll(){
    return{
      quotes: this.appService.findAll()
    } 
  }

  @Get('randomQuote')
  randomQuote(){
    return this.appService.randomQuote();
  }

  @Get('topAuthor')
  topAuthor(){
    return this.appService.topAuthor();
  }

  @Get('quote/:id')
  Findquote(@Param('id') id: string){
    return this.appService.Findquote(+id);
  }
}
