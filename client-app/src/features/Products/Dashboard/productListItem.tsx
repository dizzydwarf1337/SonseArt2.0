// ProductListItem.tsx
import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography, CircularProgress } from '@mui/material';
import { Product } from '../../../app/models/Product';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

interface Props {
    product: Product;
}

export default observer(function ProductListItem({ product }: Props) {
    const { productStore } = useStore();
    const { deleteProduct } = productStore;

    const handleDelete = async () => {
        setLoadingButton(true);
        await deleteProduct(product.id);
        setLoadingButton(false);
    };
    const [loadingButton, setLoadingButton] = React.useState(false);
    return (
        <Grid item key={product.id}>
            <Card style={{ position: 'relative' }}>
                <CardContent>
                    <Typography className="CardName" variant="body1" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {product.price}
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'space-between' }}>
                    <Button size="small" variant="contained" color="error">
                        Details
                    </Button>
                    <Button
                        onClick={handleDelete}
                        size="small"
                        color="error"
                        disabled={loadingButton}
                        style={{ position: 'relative' }}
                    > 
                        {loadingButton ? (
                            <CircularProgress size={24} style={{ position: 'absolute', left: '25%', color: "red" }} />
                        ) : 
                            'Delete'
                        }
                    </Button>

                </CardActions>
            </Card>
        </Grid>
    );
});

