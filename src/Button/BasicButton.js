import React from 'react';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';

function BasicButton(props) {
    return (
        <div>
            <Stack spacing={2} direction="row">

                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='contained' disabled>Contained</Button>
                <Button variant='contained' disableElevation>DisableElevation</Button>
                <Button variant='outlined' href='#'>Outlined</Button>
            </Stack>
            <Stack spacing={2} alignItems="left" >
                <Button
                onClick={()=>{
                    alert('clicked!');
                }}
                
                >Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href='#'>Link</Button>
                {/* color based button  */}

                <Button sx={{width:300}} variant='contained' color='secondary'>Secondary</Button>
                <Button sx={{width:300}} variant='contained' color='success'>Secondary</Button>
                <Button sx={{width:300}} variant='contained' color='error'>Error</Button>


                <Button sx={{width:300}} size="small" variant='contained'>Small</Button>
                <Button sx={{width:300}} size="medium  " variant='contained'>Medium</Button>
                <Button sx={{width:300}} size="large" variant='contained'>Large</Button>

            </Stack>
        </div>
    );
}

export default BasicButton;