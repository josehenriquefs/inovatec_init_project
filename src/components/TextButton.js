import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const Button = (props) => {
    
    const textColor = props.filled ? COLORS.white : COLORS.primary;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...props.style,
                position: props.position,
                margin: props.margin,
                marginTop: props.marginTop, 
                left: props.left, 
                right: props.right}}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: props.fontSize, fontWeight: props.fontWeight, ... { color: textColor } }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

 const styles = StyleSheet.create({
    button: { 
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Button