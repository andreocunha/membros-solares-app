import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Item(props){
    const [details, setDetails] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={() => setDetails(!details)} activeOpacity={0.7}>
            <View style={styles.smallCard}>
                <Image 
                    source={{ uri: props.photo }} 
                    style={styles.image}
                />
                <Text style={styles.text}>{props.name}</Text>    
            </View>
            {
                details &&    
                <View style={styles.moreInfo}>
                    <Text style={styles.text}>{props.description}</Text>
                </View>
            }
                        
        </TouchableOpacity>
    )
}