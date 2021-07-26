import React from 'react'
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../styles/appTheme';
import { ResultProduct } from '../components/ResultProduct';

export const SearchScreen = () => {
    return (
        <ScrollView>
            <View style={globalStyles.globalMargin}>
                    <View style={{...styles.navBar, flex:1 ,flexDirection: 'row'}}>
                        <Text style={{marginBottom: 5}}><Icon name='chevron-back-outline' size={30} color='gray' /></Text>
                        <Text style={{marginLeft: 22, color: 'black', fontSize: 22}} >Encuentra tu plato favorito</Text>
                        <Text style={{position: 'absolute', right:0 }}><Icon name='person-circle-outline' size={30} color='gray' /></Text>
                    </View>

                <View style={styles.inputContainer}>
                    <Icon name="search-outline" style={styles.searchIcon} size={20} color="gray" />
                    <TextInput
                        value='Pizzas'
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

                <View style={styles.textContainer}>
                    <Text style={styles.title} >Se encontraron</Text>
                    <Text style={styles.title} >80 resultados</Text>
                </View>

                <View style={styles.results}>
                    <View style={{...styles.columnResults, marginTop: 35}}>
                        <ResultProduct
                            title='Pizza americana'
                            uri='https://www.elheraldo.co/sites/default/files/articulo/2020/07/23/pizza-americana.jpg'    
                            precio='12.00'
                            info='Pizza muy deliciosa y clásica'
                        />
                        <ResultProduct
                            title='Pizza vegetariana'
                            uri='https://t1.rg.ltmcdn.com/es/images/5/2/4/img_pizza_vegetariana_casera_12425_orig.jpg'    
                            precio='17.00'
                            info='Pizza baja en grasas'
                        />
                        <ResultProduct
                            title='Pizza americana'
                            uri='https://www.elheraldo.co/sites/default/files/articulo/2020/07/23/pizza-americana.jpg'    
                            precio='12.00'
                            info='Pizza muy deliciosa y clásica'
                        />

                    </View>
                    <View style={styles.columnResults}>
                        <ResultProduct
                            title='Pizza Peperonni'
                            uri='https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale'    
                            precio='15.00'
                            info='Pizza hecha a base de carne de res y de cerd'
                        />
                        <ResultProduct
                            title='Pizza Hawaiana'
                            uri='https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/como-hacer-pizza-hawaiana.jpg'    
                            precio='12.00'
                            info='Pizza dulce a base de piña y carne'
                        />
                        <ResultProduct
                            title='Pizza americana'
                            uri='https://www.elheraldo.co/sites/default/files/articulo/2020/07/23/pizza-americana.jpg'    
                            precio='12.00'
                            info='Pizza muy deliciosa y clásica'
                        />
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    navBar:{
        marginVertical: 15
    },
    title:{
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
    },
    searchIcon: {
        padding: 15
    },
    results:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around'
    },
    columnResults:{
    }
})