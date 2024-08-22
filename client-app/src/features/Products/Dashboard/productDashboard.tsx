import { observer } from 'mobx-react-lite';
import ProductList from './productList';
import { useStore } from '../../../app/stores/store';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';

export default observer (function ProductDashboard() {


    const { productStore } = useStore();

    const { products, isLoading } = productStore; 

    useEffect(() => {
        if(products.length === 0)
            productStore.loadProducts();
    }, [products.size]);


    if (isLoading) return <LoadingComponent loading={isLoading} />;

    return (
        <>
        <ProductList/>
        </>
    )
}
)