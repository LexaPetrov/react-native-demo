import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { THEME } from '../theme';

export const MainScreen = (props) => {
    const [devceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)


    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }
        Dimensions.addEventListener('change', update)
        return () => {
            Dimensions.removeEventListener('change', update)
        }
    })
    

    let content = (
        <View style={{ width: devceWidth }}>
            <FlatList
            keyExtractor={item => item.id.toString()}
            data={props.todos}
            renderItem={({ item }) => (
                <Todo todo={item} onRemove={props.removeTodo} onOpen={props.openTodo} />
            )}
        />
        </View>
    )

    if (props.todos.length === 0) {
        content =
            <View style={styles.imgWrap}>
                <Image style={styles.image} 
                source={require('../../assets/no-items.png')}/>
                 {/* <Image style={styles.image} 
                source={{uri: 'https://st2.depositphotos.com/2038163/11363/v/950/depositphotos_113637050-stock-illustration-moderm-minimalis-initial-logo-rn.jpg'}}/> */}
            </View>
    }

    return (
        <View>
            <AddTodo onSubmit={props.addTodo} />
            {content}
        </View>
    )
}


const styles = StyleSheet.create({
    imgWrap: {
        alignItems:'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },

    image: {
        width: "100%",
        height: '100%',
        resizeMode: 'contain'
    }
})