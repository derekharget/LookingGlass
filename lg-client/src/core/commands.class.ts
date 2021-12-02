import shell = require('shelljs');
import {Validation} from './validation.class';

export class Commands {
    private validator: Validation;

    constructor(target: string) {
        this.validator = new Validation(target);
    }

    public async ping4(): Promise<string | boolean> {
        const host = this.validator.validateAndReturn();

        if (host) return false;

        const cmd = `ping -c 10 -w15 ${host}`;

        return await this.executeCMD(cmd);

    }

    public async ping6(): Promise<string | boolean> {
        const host = this.validator.validateAndReturn();

        if (host) return false;

        const cmd = `ping -c 10 -w15 ${host}`;

        return await this.executeCMD(cmd);
    }

    public async mtr4(): Promise<string|boolean> {
        const host = this.validator.validateAndReturn();

        if (host) return false;

        const cmd = `mtr -4 --report --report-wide ${host}`;

        return await this.executeCMD(cmd);
    }


    public async mtr6(): Promise<string|boolean> {
        const host = this.validator.validateAndReturn();

        if (host) return false;

        const cmd = `mtr -6 --report --report-wide ${host}`;

        return await this.executeCMD(cmd);
    }

    public async traceroute4(): Promise<string | boolean> {
        const host = this.validator.validateAndReturn();

        if (host) return false;

        const cmd = `traceroute -4 -w2 ${host}`;

        return await this.executeCMD(cmd);

    }


    public async traceroute6(): Promise<string | boolean> {
        const host = this.validator.validateAndReturn();

        if (host) return false;

        const cmd = `traceroute -6 -w2 ${host}`;

        return await this.executeCMD(cmd);

    }


    private async executeCMD(command: string): Promise<string> {
        return await shell.exec(command);
    }

}

const cc = new Commands('https://google.com');

console.log(cc.ping4());
