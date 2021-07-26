import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../styles/appTheme';
import { HorizontalSlider } from '../components/HorizontalSlider';
import {data} from '../db/db'

import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {

    const {products, categories} = data

    return (
        <ScrollView>
            <View style={globalStyles.globalMargin} >

                <View style={styles.textContainer}>
                    <View style={{flex:1 ,flexDirection: 'row'}}>
                        <Text style={{marginBottom: 5}}><Icon name='menu-outline' size={30} color='gray' /></Text>
                        <Text style={{position: 'absolute', right:0 }}><Icon name='notifications-outline' size={30} color='gray' /></Text>
                    </View>
                    <Text style={styles.title} >Hola</Text>
                    <Text style={styles.userTitle}>Piero Pozo</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="search-outline" style={styles.searchIcon} size={20} color="gray" />
                    <TextInput
                        value=''
                        placeholder='Buscar Comidas, Restaurantes'
                        style={{
                            fontSize: 18,
                            color: '#424242',
                            borderColor: '#000',
                            flex: 1,
                            paddingTop: 10,
                            paddingRight: 10,
                            paddingBottom: 10,
                            paddingLeft: 0,
                            backgroundColor: '#fff',
                        }}
                    />
                </View>

                <HorizontalSlider products={products} title='Mejores Platos' />
                <HorizontalSlider products={categories} title='Categorias Populares' />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 32,
        color: 'gray'
    },
    userTitle:{
        fontSize: 32,
        color: 'black'
    },
    textContainer:{
        marginTop: 30,
        marginBottom: 20
    },
    inputContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 30
    },
    searchIcon: {
        padding: 15
    }
})
