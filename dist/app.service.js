"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const quotes_1 = require("./quotes");
let AppService = class AppService {
    constructor() {
        this.quotes = quotes_1.quotes;
    }
    findAll() {
        return this.quotes;
    }
    randomQuote() {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)].quote;
    }
    topAuthor() {
        const authorMap = new Map();
        this.quotes.forEach((quote) => {
            authorMap.set(quote.author, (authorMap.get(quote.author) || 0) + 1);
        });
        return Array.from(authorMap);
    }
    Findquote(id) {
        const user = this.quotes.find((quote) => quote.id === id);
        return user;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map