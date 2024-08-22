import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';


interface Props {
    loading: boolean;
}

export default function LoadingComponent({loading}:Props) {

    
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <CircularProgress style={{ color:"#ccc59b"}}  />
        </Backdrop>

    )
}