import express, {Application, Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import {Routing} from "./core/routing.class";

class App {
    public app: Application;
    public routes: Routing = new Routing();

    constructor() {
        this.app = express();
        this.config();
        this.routes.routes(this.app);

    }

    private config(): void {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        });
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }
}

export default new App().app;
