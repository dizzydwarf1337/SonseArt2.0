
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography, TextField } from '@mui/material';
import React from 'react'
import { Product } from '../../../app/models/Product'

interface Props {
    product: Product;
}
export default function ProductListItem({ product }: Props) {

    return (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
                <CardContent>
                    <Typography className="CardName" variant="body1" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {product.price}
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'space-between' }}>
                    <Button size="small" variant="contained" color="primary">
                        Details
                    </Button>
                    <Button size="small" color="secondary">
                        Edit
                    </Button>
                    <Button size="small" color="error">
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )

}