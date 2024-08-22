import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "../models/Product";
import agent from "../API/agent/agent";

export default class ProductStore {
    products: Product[] = [];
    isLoading = false;


    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.loadProducts();
    }

    async loadProducts() {
        this.setLoading(true);
        try {
            const products = await agent.Products.list();
            runInAction(() => {
                this.setProducts(products);
            });
        } catch (error) {
            this.handleError(error);
        } finally {
            this.setLoading(false);
        }
    }

    setProducts(products: Product[]) {
        this.products = products;
    }

    setLoading(state: boolean) {
        this.isLoading = state;
    }

    handleError(error: any) {
        console.error("Failed to load products", error);
    }
}
