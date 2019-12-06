import React, {useState} from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import {THEME} from '../theme'
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/EditModal';
import { AppTextBold } from './../components/ui/AppTextBold';
import { AppButton } from './../components/ui/AppButton';

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
            <AppTextBold style={styles.title}>{props.todo.title}</AppTextBold>
            <Button title={'ред.'} onPress={() => setModal(true)} />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}> 
                    <AppButton title={'назад'} color={THEME.GREY_COLOR} onPress={props.goBack} />
                </View>
                <View style={styles.button}> 
                    <AppButton title={'удалить'} 
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