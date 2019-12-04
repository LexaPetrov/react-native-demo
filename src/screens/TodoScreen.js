import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import {THEME} from '../theme'
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/EditModal';


export const TodoScreen = (props) => {
    const [modal, setModal] = useState(false)
    const saveHandler = (title) => {
        props.onSave(props.todo.id, title)
        setModal(false)
    }

    

    return (
        <View>
            <EditModal value={props.todo.title} visible={modal} 
            onSave={saveHandler}
            onCancel={() => setModal(false)}/>

            <AppCard style={styles.card}>
            <Text style={styles.title}>{props.todo.title}</Text>
            <Button title={'ред.'} onPress={() => setModal(true)} />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}> 
                    <Button title={'назад'} color={THEME.GREY_COLOR} onPress={props.goBack} />
                </View>
                <View style={styles.button}> 
                    <Button title={'удалить'} 
                    color={THEME.DANGER_COLOR} 
                    onPress={() => props.onRemove(props.todo.id)} />
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
        //backfaceVisibility: 'visible',
       // borderRadius: 10,
       // borderWidth: 1
    },
    title: {
        width: "90%",
        fontSize: 20
    },

    card: {
        marginBottom: 20,
        padding: 15
    }
})