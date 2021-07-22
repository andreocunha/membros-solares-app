import React from 'react'
import { View, StatusBar, FlatList } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { Item } from '../../components/Item'
import { membros } from './membros.js';


export default function Membros(){
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#030245'/>
            <Header />
            <View style={styles.membersArea}>
                <FlatList 
                    data={membros}
                    renderItem={({item}) => <Item {...item}/> }
                    keyExtractor={({id}) => String(id)}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
