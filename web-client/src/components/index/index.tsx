import { Grid } from '@mui/material';
import InputSelector from '../input-selector/input-selector';
import Output from '../output/output';

export default function Index() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
        >
            <Grid item xs="auto">
                <InputSelector />
            </Grid>

            <Grid item>
                <Output />
            </Grid>
        </Grid>
    );
}
