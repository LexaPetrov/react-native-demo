import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {THEME} from '../theme'


export const TodoScreen = (props) => {
    console.log(props);

    return (
        <View>
            <Text>{props.todo.title}</Text>
            <View style={styles.buttons}>
                <View style={styles.button}> 
                    <Button title={'назад'} color={THEME.GREY_COLOR} onPress={props.goBack} />
                </View>
                <View style={styles.button}> 
                    <Button title={'удалить'} color={THEME.DANGER_COLOR} onPress={() => console.log('to remove')} />
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        width: '40%',
        backfaceVisibility: 'visible',
        borderRadius: 10,
        borderWidth: 1
    }
})