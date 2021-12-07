interface locationsTypes {
    id: string;
    city: string;
    state: string;
    endpoint: string;
}

const locations: locationsTypes[] = [
    {
        id: 'chicago-il',
        city: 'Chicago',
        state: 'Illinois',
        endpoint: '127.0.0.1:3000',
    },
    {
        id: 'las-angeles-ca',
        city: 'Las Angeles',
        state: 'California',
        endpoint: '127.0.0.1:3000',
    },
    {
        id: 'new-york-city-ny',
        city: 'New York City',
        state: 'New York',
        endpoint: '127.0.0.1:3000',
    },
];

export default locations;
