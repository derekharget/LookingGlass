import {URL} from 'url';


class Validation {

    private isIp = require('is-ip');
    private validateDomain = require('is-valid-domain');

    constructor(private target: string) {
    }

    //Check if IP is valid v4 or v6

    public validIP(): boolean {

        return this.isIp(this.target);
    };


    public validateAndReturnDomain(): boolean;
    public validateAndReturnDomain(): string;
    public validateAndReturnDomain(): any {

        if (this.validDomain()) {
            return this.stripDomainData();
        }

        return false;

    }


    // Check if domain is valid
    private validDomain(): boolean {
        return this.validateDomain(this.stripDomainData());
    }


    private stripDomainData(): string {
        const {hostname} = new URL(this.target)
        return hostname;
    }

}

// Failing Hostname
// const val = new Validation('http://wwwm/sdfasd/sadf');
// console.log(val.validateAndReturnDomain());

// Passing Hostname
// const val = new Validation('http://www.google.com/sdfasd/sadf');
// console.log(val.validateAndReturnDomain());

// Passing IPv4
// const val = new Validation('8.8.8.8');
// console.log(val.validIP());

// Passing IPv6
// const val = new Validation('da5a:efb2:3a6d::cafb:85c8');
// console.log(val.validIP());

// Failing ipv6
// const val = new Validation('da5a:efb2:3a6d::g');
// console.log(val.validIP());


