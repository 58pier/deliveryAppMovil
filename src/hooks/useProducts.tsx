import { useEffect, useState } from "react"
import productsDB from "../api/productsDB"
import { Product } from '../interfaces/productInterface';


export const useProducts = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProducts =  () => {
        productsDB.get<Product[]>('/products')
        .then( productos =>
            console.log(productos)
        ).catch(error => console.log(JSON.stringify(error, null, 2)));

        setIsLoading(false);
    }

    useEffect(() => {
        getProducts();
    },[])

    return {
        products,
        isLoading
    }
}
