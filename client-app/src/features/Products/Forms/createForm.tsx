import { FormControl, Input } from '@mui/material';
import React from 'react';

export default function createForm() {



    return (
        <FormControl>
            <Input></Input>
            <Button onClick type="submit" variant="contained" color="primary" disabled={loadingButton}>
                Create
            </Button>
        </FormControl>
    )
}