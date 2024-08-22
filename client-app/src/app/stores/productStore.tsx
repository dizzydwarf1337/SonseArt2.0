import { action, makeAutoObservable, runInAction } from "mobx";
import { Product } from "../models/Product";
import agent from "../API/agent/agent";

export default class ProductStore {
    products: Product[] = [];
    isLoading: boolean = false;
    loadingButton: boolean = false;


    constructor() {
        makeAutoObservable(this, {
            loadProducts: action,
            setLoading: action,
            setProducts: action, 
            setLoadingButton: action,
        }, { autoBind: true });
    }

    async loadProducts() {
        this.setLoading(true);
        agent.Products.list()
            .then((data) => {
                this.setProducts(data);
                
            })
            .catch((error => { console.log(error); }))
        await new Promise(f => setTimeout(f, 1000));
        this.setLoading(false);
    }

    setProducts(products: Product[]) {
        runInAction(() => {
            (
                this.products = products
            )
        });
    }

    setLoading(state: boolean) {
        runInAction(() => {
            this.isLoading = state;
        });
    }
    
    async deleteProduct(id: string) {
        agent.Products.delete(id).catch((error => { console.log(error); }))
        await new Promise(f => setTimeout(f, 1000));
        this.products = this.products.filter(x => x.id !== id);
    }

    async createProduct(product: Product) {
        agent.Products.create(product).catch((error => { console.log(error); }))
        await new Promise(f => setTimeout(f, 1000));
        this.products.push(product);
    }

    handleError(error: any) {
        console.error("Failed to load products", error);
    }
}
