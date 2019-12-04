import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native';
import { THEME } from '../theme';

export const AddTodo = (props) => {
    const [val, setVal] = useState(' ');


    const pressHandler = () => {
        if (val.trim()) {
            props.onSubmit(val)
            setVal("")
        } else {
            Alert.alert('нормально пиши!')
        }
    }

    return (
        <View style={styles.block}>

            <TextInput style={styles.input}
                onChangeText={setVal}
                value={val}
                placeholder={'пиши сюда'}
            />
            <Button title={"Добавить"} onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        maxWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        //borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})