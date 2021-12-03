import {URL} from 'url';


export class Validation {

    private isIp = require('is-ip');
    private validateDomain = require('is-valid-domain');

    public validateAndReturn(target: string): boolean;
    public validateAndReturn(target: string): string;
    public validateAndReturn(target: string): any {

        if (this.validDomain(target)) {
            return target;
        }

        if(this.validIP(target)) {
            return target;
        }

        return false;

    }


    //Check if IP is valid v4 or v6
    private validIP(target: string): boolean {
        return this.isIp(target);
    };

    // Check if domain is valid
    private validDomain(target: string): boolean {
        return this.validateDomain(target);
    }


}

