import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
    uri: string,
    title: string,
    info: string,
    precio: string
}

export const ResultProduct = ({uri,title,info,precio,} : Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri}}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.info}>{info}</Text>
            <Text style={styles.precio}>Desde S/. {precio}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 170,
        height: 220,
        marginBottom: 50,
        backgroundColor: 'white',
        elevation: 5,
    },
    image:{
        top: -30,
        width:130,
        height: 130,
        borderRadius: 100,
        alignSelf: 'center',
    },
    title:{
        top: -20,
        fontSize: 20,
        textAlign: 'center'
    },
    info:{
        top: -15,
        color: 'gray',
        textAlign: 'center'
    },
    precio:{
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        top: -10,
    }

})
