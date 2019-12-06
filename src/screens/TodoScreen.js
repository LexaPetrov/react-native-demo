import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { THEME } from '../theme'
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
                onCancel={() => setModal(false)} />

            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{props.todo.title}</AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20}/>
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton
                        color={THEME.GREY_COLOR}
                        onPress={props.goBack} >
                        <AntDesign name='back' size={20} color={'#fff'}/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton
                        color={THEME.DANGER_COLOR}
                        onPress={() => props.onRemove(props.todo.id)}>
                        <FontAwesome name='remove' size={20} color={'#fff'}/>
                    </AppButton>
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
        //width: Dimensions.get('window').width / 3,
        //backfaceVisibility: 'visible',
        // borderRadius: 10,
        // borderWidth: 1
        width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    title: {
        fontSize: 20
    },

    card: {
        marginBottom: 20,
        padding: 15
    }
})