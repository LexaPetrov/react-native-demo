import React from 'react';
import { View, StyleSheet } from "react-native"


export const AppCard = (props) => {
    //console.log("props.children: " + props.children);
    return (
        <View style={ {...styles.default, ...props.style} }>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: 'row',
        maxWidth: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',                  // это
        shadowRadius: 2,                      // тени
        shadowOpacity: 0.3,                   // для 
        shadowOffset: {width: 2, height: 2}, // айос
        elevation: 8,                        //это тень для андроида
        backgroundColor: '#fff',
        borderRadius: 10,

    }
})