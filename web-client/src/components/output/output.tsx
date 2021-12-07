import { Box } from '@mui/material';
import { styled } from '@mui/system';

const dataOutput = `
Start: Sun Dec  5 00:38:59 2021
HOST: EdgeRouter-12                   Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- cm-72-241-113-2.buckeyecom.net   0.0%    10   22.5  17.6   7.3  22.6   4.5
  2.|-- cm-24-53-168-81.buckeyecom.net   0.0%    10   15.0  23.7  14.0  60.6  14.0
  3.|-- ???                             100.0    10    0.0   0.0   0.0   0.0   0.0
  4.|-- cm-24-53-169-53.maxxsouthbb.net  0.0%    10   11.4  17.1  11.4  19.4   2.4
  5.|-- cm-72-240-67-197.buckeyecom.net  0.0%    10   52.1  58.3  52.1  66.4   4.2
  6.|-- 108.170.249.161                  0.0%    10   56.8  51.8  48.3  56.8   2.6
  7.|-- 209.85.246.231                   0.0%    10   53.4  55.1  50.3  60.1   2.8
  8.|-- dns.google                       0.0%    10   56.5  53.5  49.0  58.7   2.8
`;

const Terminal = styled('pre')({
    color: 'white',
    fontSize: '10px',
    overflow: 'auto',
    wordWrap: 'normal',
});

export default function Output() {
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
            <Terminal>{dataOutput}</Terminal>
        </Box>
    );
}
