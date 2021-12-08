import axios from 'axios';
import locations from '../locations';

const method = (hostType: string, action: string): string => {
    let endpointMethod: string = '';

    switch (`${hostType}.${action}`) {
        case 'ipv4.ping':
            endpointMethod = 'ping4';
            break;
        case 'ipv6.ping':
            endpointMethod = 'ping6';
            break;
        case 'ipv4.traceroute':
            endpointMethod = 'traceroute4';
            break;
        case 'ipv6.traceroute':
            endpointMethod = 'traceroute6';
            break;
        case 'ipv4.mtr':
            endpointMethod = 'mtr4';
            break;
        case 'ipv6.mtr':
            endpointMethod = 'mtr6';
            break;
        default:
            endpointMethod = 'error';
            break;
    }

    return endpointMethod;
};

export default async function serverResponse(
    server: number,
    ip: string,
    action: string,
    host: string
): Promise<string> {
    const endpointMethod = method(ip, action);

    const { endpoint: serverLocation } = locations[server];

    const data = await axios.post(
        `http://${serverLocation}/${endpointMethod}`,
        {
            host,
        }
    );

    return data.data.data;
    // get rid of the errors
    // return Promise.resolve(method('ipv4', 'mtr'));
}
