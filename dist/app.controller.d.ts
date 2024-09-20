import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(): {
        quotes: {
            id: number;
            quote: string;
            author: string;
        }[];
    };
    randomQuote(): string;
    topAuthor(): [string, number][];
    Findquote(id: string): {
        id: number;
        quote: string;
        author: string;
    };
}
