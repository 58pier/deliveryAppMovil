import React from 'react'
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../styles/appTheme';

export const ProductScreen = () => {
    return (
        <ScrollView>
            <View style={globalStyles.globalMargin}>

                <View style={{...styles.navBar, flex:1 ,flexDirection: 'row'}}>
                        <Text style={{marginBottom: 5}}><Icon name='chevron-back-outline' size={30} color='gray' /></Text>
                        <Text style={{position: 'absolute', right:0 }}><Icon name='heart-outline' size={30} color='gray' /></Text>
                </View>

                <View style={styles.portada}>
                    <Image
                        source={{uri: 'https://www.elheraldo.co/sites/default/files/articulo/2020/07/23/pizza-americana.jpg'}}
                        style={styles.imagePortada}
                    />
                    <View style={styles.botones}>
                        <Icon
                            name= 'add-circle'
                            size={30}
                        />
                        <Text style={{fontSize: 35, marginHorizontal: 20, fontWeight: '200'}}>1</Text>
                        <Icon
                            name= 'remove-circle'
                            size={30}
                        />
                    </View>

                    <Text style={{fontSize: 30, marginVertical: 10}}>Pizza Americana</Text>
                </View>

                <View style={styles.info}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            name='star'
                            size={20}
                            style={{marginRight: 20}}
                        />
                        <Text style={{}}>3.6</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            name='time-outline'
                            size={20}
                            style={{marginRight:10}}
                        />
                        <Text>30 min aprox.</Text>
                    </View>
                </View>

                <View style={{marginHorizontal: 20, marginVertical: 10}}>
                    <Text style={{marginBottom: 5, fontWeight: 'bold', fontSize: 17}}>Detalles</Text>
                    <Text>Una deliciosa pizza americana para disfrutar en familia</Text>
                </View>

                <Text style={{fontSize: 30, marginVertical: 10, textAlign: 'center'}}>Restaurantes</Text>
                {/* //container cards restaurante */}
                <View> 
                    <View style={styles.restauranteCard}>
                        <Image
                            source={{uri: 'https://lapiazzetta.com.pe/wp-content/uploads/2020/06/Sancho2-1024x768.jpg'}}
                            style={styles.imageRestaurante}
                        />
                        <View style={{alignSelf: 'flex-start', width: 130}}>
                            <Text style={{fontSize: 20}}>Don Sancho</Text>
                            <Text style={{color: 'gray'}}>Restaurante familiar variado</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text>3.6</Text>
                                <Icon 
                                    name='star'
                                    size={15}
                                    style={{
                                        marginVertical: 10,
                                        marginHorizontal: 5
                                    }}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize: 20}}>S/.15.00</Text>
                        </View>
                    </View>
                    <View style={styles.restauranteCard}>
                        <Image
                            source={{uri: 'https://lapiazzetta.com.pe/wp-content/uploads/2020/06/PiazzettaHuanuco1-1024x683.jpg'}}
                            style={styles.imageRestaurante}
                        />
                        <View style={{alignSelf: 'flex-start', width: 130}}>
                            <Text style={{fontSize: 20}}>La Piazzetta</Text>
                            <Text style={{color: 'gray'}}>Pizzeria familiar y bar</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text>4.1</Text>
                                <Icon 
                                    name='star'
                                    size={15}
                                    style={{
                                        marginVertical: 10,
                                        marginHorizontal: 5
                                    }}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize: 20}}>S/.17.00</Text>
                        </View>
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
    portada:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagePortada: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 5,
    },
    botones: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 5
    },
    restauranteCard:{
        flex: 1,
        // backgroundColor: 'red',
        borderRadius: 10,
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10
    },
    imageRestaurante:{
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        shadowColor: 'black',
        shadowOpacity: 0.5
    }
})
