export declare class AppService {
    private quotes;
    findAll(): {
        id: number;
        quote: string;
        author: string;
    }[];
    randomQuote(): string;
    topAuthor(): [string, number][];
    Findquote(id: number): {
        id: number;
        quote: string;
        author: string;
    };
}
