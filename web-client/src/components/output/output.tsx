import { Box } from '@mui/material';
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

const Terminal = styled('pre')({
    color: 'white',
    fontSize: '10px',
    overflow: 'auto',
    wordWrap: 'normal',
});

interface OutputInputsTypes {
    loading: boolean;
    output: string;
}

export default function Output({ loading, output }: OutputInputsTypes) {
    const loadingSpinner = () => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 200,
                    width: '100%',
                }}
            >
                <CircularProgress
                    sx={{ color: 'white' }}
                    thickness={3}
                    size={60}
                />
            </Box>
        );
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                padding: 1,
                borderRadius: '0px 0px 12px 12px',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
            }}
        >
            {!loading && <Terminal>{output}</Terminal>}
            {loading && loadingSpinner()}
        </Box>
    );
}
