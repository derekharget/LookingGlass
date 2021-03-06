import { Box, styled } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import {
    ButtonGroup,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import React, { FormEvent } from 'react';
import getUsersIPFN from '../../helpers/get-users-ip';
import locations from '../../locations';

const InputContainer = styled('div')({
    backgroundColor: 'white',
    fontSize: '13px',
    width: '100%',
    height: '100%',
    border: '1px solid lightgray',
    borderRadius: '12px 12px 0px 0px',
});

interface inputInterface {
    formSubmit: (
        // eslint-disable-next-line no-unused-vars
        hostInput: string,
        // eslint-disable-next-line no-unused-vars
        ipType: string,
        // eslint-disable-next-line no-unused-vars
        lookupType: string,
        // eslint-disable-next-line no-unused-vars
        selectedLocation: number
    ) => Promise<void>;
}

export default function InputSelector({ formSubmit }: inputInterface) {
    // User Selector types
    const [ipType, setIPType] = React.useState<string>('ipv4');
    const [lookupType, setLookupType] = React.useState<string>('ping');
    const [hostInput, setHostInput] = React.useState<string>('');

    // User IP Address Type
    const [userIP, setUsersIP] = React.useState<string>('');

    // Get Users IP Address
    React.useEffect(() => {
        (async () => {
            setUsersIP(await getUsersIPFN());
        })();
    }, []);

    const ipChangeHandler = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string
    ) => {
        setIPType(newAlignment);
    };

    const lookupChangeHandler = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string
    ) => {
        setLookupType(newAlignment);
    };

    /* Location Menu ******************************************** */

    const [open, setOpen] = React.useState<boolean>(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedLocation, setSelectedLocation] = React.useState<number>(0);

    const handleMenuItemClick = (
        _event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number
    ) => {
        setSelectedLocation(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    // Send data to other component

    const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        formSubmit(hostInput, ipType, lookupType, selectedLocation);
    };

    return (
        <InputContainer>
            <List component="nav" aria-label="mailbox folders">
                <ListItem>Your IP: {userIP}</ListItem>
                <Divider textAlign="left">Target</Divider>
                <ListItem>
                    <TextField
                        id="outlined-basic"
                        label="IP/Host"
                        variant="outlined"
                        size="small"
                        value={hostInput}
                        onChange={(e) => setHostInput(e.target.value)}
                    />
                </ListItem>
                <Divider textAlign="left">Settings</Divider>
                <ListItem>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            width: '100%',
                        }}
                    >
                        <ToggleButtonGroup
                            color="primary"
                            value={ipType}
                            exclusive
                            onChange={ipChangeHandler}
                            size="small"
                        >
                            <ToggleButton value="ipv4">IPv4</ToggleButton>
                            <ToggleButton value="ipv6">IPv6</ToggleButton>
                        </ToggleButtonGroup>

                        <Divider orientation="vertical" />

                        <ToggleButtonGroup
                            color="primary"
                            value={lookupType}
                            exclusive
                            onChange={lookupChangeHandler}
                            size="small"
                        >
                            <ToggleButton value="ping">Ping</ToggleButton>
                            <ToggleButton value="traceroute">
                                Traceroute
                            </ToggleButton>
                            <ToggleButton value="mtr">MTR</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </ListItem>
                <Divider textAlign="left">Location</Divider>
                <ListItem>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <div>
                            <ButtonGroup
                                variant="contained"
                                ref={anchorRef}
                                aria-label="split button"
                            >
                                <Button onClick={() => handleToggle()}>
                                    {`${locations[selectedLocation].city}, ${locations[selectedLocation].state}`}
                                </Button>
                                <Button size="small" onClick={handleToggle}>
                                    <ArrowDropDownIcon />
                                </Button>
                            </ButtonGroup>
                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === 'bottom'
                                                    ? 'center top'
                                                    : 'center bottom',
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener
                                                onClickAway={handleClose}
                                            >
                                                <MenuList id="split-button-menu">
                                                    {locations.map(
                                                        (option, index) => (
                                                            <MenuItem
                                                                key={option.id}
                                                                selected={
                                                                    index ===
                                                                    selectedLocation
                                                                }
                                                                onClick={(
                                                                    event
                                                                ) =>
                                                                    handleMenuItemClick(
                                                                        event,
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                {`${option.city}, ${option.state}`}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                sx={{ width: 100 }}
                                onClick={onSubmitHandler}
                            >
                                Test
                            </Button>
                        </div>
                    </Box>
                </ListItem>
            </List>
        </InputContainer>
    );
}
