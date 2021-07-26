import React from 'react'
import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';
import { Product } from '../interfaces/productInterface';

interface Props{
    product: Product
}

export const ProductPoster = ({product} : Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                width: 200,
                height: 200,
                marginHorizontal: 5,
                marginVertical: 5,
                paddingBottom: 15,
                paddingHorizontal: 10,
            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{uri:product.image}}
                    style={styles.image}
                />
            </View>
                <Text style={styles.title}>{product.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    imageContainer:{
        marginVertical: 5,
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10
    },
    image: {
        flex:1,
        borderRadius: 25
    },
    title:{
        alignSelf: 'center',
        fontSize: 17,
        color: 'gray'
    }
})