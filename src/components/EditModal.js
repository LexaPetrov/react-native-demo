import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Modal, Alert } from "react-native"
import { THEME } from '../theme';
import { AppButton } from './ui/AppButton';


export const EditModal = ({visible, onCancel, value, onSave}) => {

    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Ошибка', `Минимальная длина - 3 символа.
            Сейчас ${title.trim().length} символ(а)`)
        } else {
            onSave(title)
        }
    }


    const cancelHandler = () => {
        setTitle(value)
        onCancel()
    }
    return (
        <Modal visible={visible} animationType={'slide'}>
            <View style={styles.wrap}>
                <TextInput style={styles.input} placeholder={'пиши сюда'}
                value={title}
                onChangeText={setTitle}
                autoFocus
                />
                <View style={styles.buttons}>
                <AppButton color={THEME.DANGER_COLOR} 
                onPress={cancelHandler}> отменить </AppButton>
                <AppButton onPress={saveHandler}> сохранить </AppButton>
                </View>
               
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth:2,
        width: "80%"
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})