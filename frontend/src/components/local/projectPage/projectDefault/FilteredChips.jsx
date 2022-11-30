import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

export default function FilteredChips({ item }) {




    const handleClick = () => {
        console.info('You clicked the Chip.');
    };



    return (
        <Stack direction="row" className={'chipsContainer'} spacing={1} sx={{ flexWrap: "wrap" }}>
            {
                item ? item?.map(tool => (
                    <Chip label={tool} />
                )) : <Chip label="All" />
            }
        </Stack>
    );
}
