
import React, { useState, useEffect } from 'react';
import "../../../app/layout/styles.css"
import ProductListItem from './productListItem';
import { Grid } from '@mui/material';
import { useStore } from '../../../app/stores/store'; 
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
export default observer (function ProductList() {

    const { productStore } = useStore();

    const { products} = productStore; 
    return (
        
        <>
            <Grid container spacing={3} justifyContent="space-between">
                {products.map((product) => (
                    <ProductListItem key={product.id} product={product} />
                ))}
            </Grid>
        </>
    );
}
)