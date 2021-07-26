import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Product } from '../interfaces/productInterface';
import { ProductPoster } from './ProductPoster';

interface Props{
    title: string,
    products: Product[],
}

export const HorizontalSlider = ({title, products}: Props) => {
    return (
        <View style={{ height: 260}}>
            <Text style={styles.title}> {title} </Text>

            <FlatList
                data={products}
                renderItem={ ({item} : any) => (
                    <ProductPoster product={item}/>
                )}
                keyExtractor={ (item) => item.id.toString()}
                horizontal= {true}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold'
    }
})
