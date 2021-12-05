import { styled } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React from 'react';

const InputContainer = styled('div')({
    backgroundColor: 'white',
    fontSize: '13px',
    width: '100%',
    height: '100%',
    border: '1px solid lightgray',
    borderRadius: 8,
    marginBottom: 2,
});

export default function InputSelector() {
    return (
        <InputContainer>
            <List component="nav" aria-label="mailbox folders">
                <ListItem>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider textAlign="left">Target</Divider>
                <ListItem>
                    <TextField
                        id="outlined-basic"
                        label="IP/Host"
                        variant="outlined"
                        size="small"
                    />
                </ListItem>
                <Divider textAlign="left">IPv4/IPv6</Divider>
                <ListItem>
                    <div>
                        <RadioGroup
                            row
                            aria-label="position"
                            name="position"
                            defaultValue="top"
                        >
                            <FormControlLabel
                                value="start"
                                control={<Radio />}
                                label="IPv4"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="start"
                                control={<Radio />}
                                label="IPv6"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </div>
                </ListItem>
                <Divider textAlign="left">Action</Divider>
                <ListItem>
                    <div>
                        <RadioGroup
                            row
                            aria-label="position"
                            name="position"
                            defaultValue="top"
                        >
                            <FormControlLabel
                                value="start"
                                control={<Radio />}
                                label="Ping"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="start"
                                control={<Radio />}
                                label="Traceroute"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="start"
                                control={<Radio />}
                                label="MTR"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </div>
                </ListItem>
            </List>
        </InputContainer>
    );
}
