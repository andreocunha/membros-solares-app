import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import LogoSolares from '../../assets/logo.png';

export function Header(){
    return (
        <View style={styles.container}>
            <Image source={LogoSolares} style={styles.image}/>
            <Text style={styles.title}>Membros da Telemeteam</Text>
        </View>
    )
}