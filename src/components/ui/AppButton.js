import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppTextBold } from './AppTextBold';
import { THEME } from './../../theme';


export const AppButton = (props, color= THEME.MAIN_COLOR) => {
 

    return (
        <TouchableOpacity onPress={onPress} style={{...styles.button, backgroundColor: color}}>
                <View>
                    <AppTextBold>
                        { props.children}
                    </AppTextBold>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   buton: {
       paddingHorizontal: 20,
       paddingVertical: 10,
       borderRadius: 5,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center'
   }    
})