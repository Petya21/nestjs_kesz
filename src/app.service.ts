import { Injectable } from '@nestjs/common';
import { quotes } from './quotes';

@Injectable()
export class AppService {
  private quotes = quotes

  findAll(){
    return this.quotes;
  }

  randomQuote(){
    return this.quotes[Math.floor(Math.random()*this.quotes.length)].quote;
  }

  topAuthor(){
    const authorMap = new Map<string, number>();
    this.quotes.forEach((quote)=> {
      authorMap.set(quote.author, (authorMap.get(quote.author) || 0)+ 1);
    })
    return Array.from(authorMap);
  }

  Findquote(id:number){
    const user = this.quotes.find((quote) => quote.id ===id);
    return user;
  }
}


