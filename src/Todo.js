import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Todo = (props) => {
    const longPressHandler = () => {
        props.onRemove(props.todo.id)
    }

    return (
        <TouchableOpacity activeOpacity={0.5}
            onPress={() => console.log('pressed', props.todo.id)}
            //onLongPress={props.onRemove.bind(null, props.todo.id)}
            onLongPress={longPressHandler}
        >
            <View style={styles.todo}>
                <Text>{props.todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})