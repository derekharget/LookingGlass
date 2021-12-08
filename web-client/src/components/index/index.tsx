import { Grid } from '@mui/material';
import { useState } from 'react';
import InputSelector from '../input-selector/input-selector';
import Output from '../output/output';
import serverResponse from '../../helpers/server-response';

export default function Index() {
    const [loading, isLoading] = useState<boolean>(false);
    const [output, setOutput] = useState<string>('');

    const responseSubmitted = async (
        host: string,
        ip: string,
        lookup: string,
        location: number
    ): Promise<void> => {
        isLoading(true);

        const data = await serverResponse(location, ip, lookup, host);

        setOutput(data);
        isLoading(false);
    };

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
        >
            <Grid item xs="auto">
                <InputSelector formSubmit={responseSubmitted} />
            </Grid>

            <Grid item>
                <Output loading={loading} output={output} />
            </Grid>
        </Grid>
    );
}
