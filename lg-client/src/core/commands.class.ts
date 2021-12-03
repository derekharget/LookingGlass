import shell = require('shelljs');
import {Validation} from './validation.class';

export class Commands {


    public async ping4(target: string): Promise<string | boolean> {
        const validator = new Validation();

        const host = validator.validateAndReturn(target);

        if (!host) return false;

        const cmd = `ping -c 10 -w15 ${host}`;

        return await shell.exec(cmd).stdout.toString();

    }

    public async ping6(target: string): Promise<string | boolean> {
        const validator = new Validation();

        const host = validator.validateAndReturn(target);

        if (!host) return false;

        const cmd = `ping6 -c 10 -w15 ${host}`;

        return await shell.exec(cmd).stdout.toString();
    }


    public async mtr4(target: string): Promise<string|boolean> {
        const validator = new Validation();

        const host = validator.validateAndReturn(target);

        if (!host) return false;

        const cmd = `mtr -4 --report --report-wide ${host}`;

        return await shell.exec(cmd).stdout.toString();
    }


    public async mtr6(target: string): Promise<string|boolean> {
        const validator = new Validation();

        const host = validator.validateAndReturn(target);

        if (!host) return false;

        const cmd = `mtr -6 --report --report-wide ${host}`;

        return await shell.exec(cmd).stdout.toString();
    }

    public async traceroute4(target: string): Promise<string | boolean> {
        const validator = new Validation();

        const host = validator.validateAndReturn(target);

        if (!host) return false;

        const cmd = `traceroute -4 -w2 ${host}`;

        return await shell.exec(cmd).stdout.toString();
    }


    public async traceroute6(target: string): Promise<string | boolean> {
        const validator = new Validation();

        const host = validator.validateAndReturn(target);

        if (!host) return false;

        const cmd = `traceroute -6 -w2 ${host}`;

        return await shell.exec(cmd).stdout.toString();

    }

}
