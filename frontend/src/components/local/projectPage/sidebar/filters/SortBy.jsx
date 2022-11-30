import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function SortBy({ handleChange }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (value) => {
        handleChange(null, "sort", value)
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                sx={{ width: "75px" }}
                id="basic-button"
                variant='outlined'
                color="secondary"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                NEWEST
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleClose(1)}>New to Old</MenuItem>
                <MenuItem onClick={() => handleClose(-1)}>Old to New</MenuItem>
            </Menu>
        </div>
    );
}
