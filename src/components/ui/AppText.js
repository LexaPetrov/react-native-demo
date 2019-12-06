import React from 'react';
import { Text, StyleSheet } from "react-native"


export const AppText = (props) => {
    //console.log("props.children: " + props.children);
    return (
        <Text style={ {...styles.default, ...props.style} }>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular'
    },

    title: {
        fontFamily: 'roboto-regular'
    }
})