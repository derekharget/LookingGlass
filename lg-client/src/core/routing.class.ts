import {Request, Response, Application} from 'express';
import {Commands} from './commands.class';


export class Routing {
    public routes(app: Application): void {

        app.route('/ping4')
            .post(async (req: Request, res: Response) => {
                const {host} = req.body;

                if(host.length === 0) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'No host input'}));
                }

                const command = new Commands(host);

                const dataResponse = await command.ping4();

                if(!dataResponse) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'Invalid host'}));
                }



                res.header('Content-Type', 'application/json');
                res.send(JSON.stringify({ response: 'success', data: dataResponse}));
            });

    }
}
