import shell = require('shelljs');
import {Validation} from './validation.class';

export class Commands {
    private validator: Validation;

    constructor(private target: string) {
        this.validator = new Validation(target);
    }

    public async ping4(): Promise<string | boolean> {
        const host = this.validator.validateAndReturn();

        if (!host) return false;

        const cmd = `ping ${host}`;

        return await shell.exec(cmd).stdout.toString();

    }

    public async ping6(): Promise<string | boolean> {
        const host = this.validator.validateAndReturn();

        if (!host) return false;

        const cmd = `ping -c 10 -w15 ${host}`;

        return await shell.exec(cmd).stdout.toString();
    }

    public async mtr4(): Promise<string|boolean> {
        const host = this.validator.validateAndReturn();

        if (!host) return false;

        const cmd = `mtr -4 --report --report-wide ${host}`;

        return await shell.exec(cmd).stdout.toString();
    }


    public async mtr6(): Promise<string|boolean> {
        const host = this.validator.validateAndReturn();

        if (!host) return false;

        const cmd = `mtr -6 --report --report-wide ${host}`;

        return await shell.exec(cmd).stdout.toString();
    }

    public async traceroute4(): Promise<string | boolean> {
        const host = this.validator.validateAndReturn();

        if (!host) return false;

        const cmd = `traceroute -4 -w2 ${host}`;

        return await shell.exec(cmd).stdout.toString();
    }


    public async traceroute6(): Promise<string | boolean> {
        const host = this.validator.validateAndReturn();

        if (!host) return false;

        const cmd = `traceroute -6 -w2 ${host}`;

        return await shell.exec(cmd).stdout.toString();

    }

}

const cc = new Commands('https://google.com');

console.log(cc.ping4());
