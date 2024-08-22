
import React, { useState, useEffect } from 'react';
import agent from '/src/app/API/agent/agent';
import Product from '../../../app/models/Product';
import "../../../app/layout/styles.css"
import ProductListItem from './productListItem';
import { Grid } from '@mui/material';
import { useStore } from '../../../app/stores/store'; 
export default  function ProductList() {

    const { productStore } = useStore();

    const { products, isLoading } = productStore; 

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
