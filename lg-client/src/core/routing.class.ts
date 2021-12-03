import {Request, Response, Application} from 'express';
import {Commands} from './commands.class';


export class Routing {
    public routes(app: Application): void {

        app.route('/ping4')
            .post(async (req: Request, res: Response) => {
                const {host} = req.body;

                if(!host || host.length === 0) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'No host input'}));
                    return;
                }

                const command = new Commands();

                const dataResponse = await command.ping4(host);

                if(!dataResponse) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'Invalid host'}));
                    return;
                }

                res.header('Content-Type', 'application/json');
                res.send(JSON.stringify({ response: 'success', data: dataResponse}));
            });



        app.route('/ping6')
            .post(async (req: Request, res: Response) => {
                const {host} = req.body;

                if(!host || host.length === 0) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'No host input'}));
                    return;
                }

                const command = new Commands();

                const dataResponse = await command.ping6(host);

                if(!dataResponse) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'Invalid host'}));
                    return;
                }

                res.header('Content-Type', 'application/json');
                res.send(JSON.stringify({ response: 'success', data: dataResponse}));
            });


        app.route('/mtr4')
            .post(async (req: Request, res: Response) => {
                const {host} = req.body;

                if(!host || host.length === 0) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'No host input'}));
                    return;
                }

                const command = new Commands();

                const dataResponse = await command.mtr4(host);

                if(!dataResponse) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'Invalid host'}));
                    return;
                }

                res.header('Content-Type', 'application/json');
                res.send(JSON.stringify({ response: 'success', data: dataResponse}));
            });

        app.route('/mtr6')
            .post(async (req: Request, res: Response) => {
                const {host} = req.body;

                if(!host || host.length === 0) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'No host input'}));
                    return;
                }

                const command = new Commands();

                const dataResponse = await command.mtr6(host);

                if(!dataResponse) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'Invalid host'}));
                    return;
                }

                res.header('Content-Type', 'application/json');
                res.send(JSON.stringify({ response: 'success', data: dataResponse}));
            });


        app.route('/traceroute4')
            .post(async (req: Request, res: Response) => {
                const {host} = req.body;

                if(!host || host.length === 0) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'No host input'}));
                    return;
                }

                const command = new Commands();

                const dataResponse = await command.traceroute4(host);

                if(!dataResponse) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'Invalid host'}));
                    return;
                }

                res.header('Content-Type', 'application/json');
                res.send(JSON.stringify({ response: 'success', data: dataResponse}));
            });


        app.route('/traceroute6')
            .post(async (req: Request, res: Response) => {
                const {host} = req.body;

                if(!host || host.length === 0) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'No host input'}));
                    return;
                }

                const command = new Commands();

                const dataResponse = await command.traceroute6(host);

                if(!dataResponse) {
                    res.header('Content-Type', 'application/json');
                    res.send(JSON.stringify({response: 'Invalid host'}));
                    return;
                }

                res.header('Content-Type', 'application/json');
                res.send(JSON.stringify({ response: 'success', data: dataResponse}));
            });

    }
}
