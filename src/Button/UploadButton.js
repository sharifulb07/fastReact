import React from 'react';
import {styled} from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';

import { Stack } from '@mui/material';



const Input=styled('input')({
    display:'none',
});

function UploadButton(props) {
    return (
        <div>
            <Stack direction="row" spacing={2} alignItems="right">
                <label htmlFor='contained-button-file'>
                    <Input accept="image/" id='contained-button-file' multiple type='file' />
                    <Button variant='contained' component='span'>Upload</Button>
                </label>

                {/* <label htmlFor='icon-button-file'>
                    <Input accept='image/' id='icon-button-file' type='file' />
                    <IconButton color='primary' aria-label='upload-picture' component='span'>
                        <icons />
                    </IconButton>
                </label> */}
            </Stack>
            
        </div>
    );
}

export default UploadButton;