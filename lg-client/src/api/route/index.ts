import {Request, Response, Application} from 'express';
import shell = require('shelljs');

export class Routes {
    public routes(app: Application): void {
        app.route('/ping')
            .post(async (req: Request, res: Response) => {

                const {count, host} = req.body;

                console.log(count, host);

                const cmd = `ping -c ${count} ${host}`;

                const response = await shell.exec(cmd);



                res.header('Content-Type', 'application/json');
                res.send(JSON.stringify({data: response.stdout}));
            });


        app.route('/traceroute')
            .get(async (req: Request, res: Response) => {
                const response = await shell.exec('tracert google.com');

                res.header('Content-Type', 'application/json');
                res.send(JSON.stringify({data: response.stdout}));

            })
    }
}
