import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Button, Modal, TouchableOpacity, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../Store/Slices/ModalSlice';
import style from '../Store/StyleSheet';

const WordModal = () => {
    const dispatch = useDispatch()
    const visibleModal = useSelector(state => state.modalActions.value)
    const currentWord = useSelector(state => state.currentWord.value);

    const theme = useSelector(state => state.themeColor.value);

    const navigation = useNavigation();

    return (
        <View>
            <Modal
                visible={visibleModal}
                animationType={'fade'}
                transparent={true}
            >
                <View style={[
                    {
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    },
                    style.centerItem,
                ]}>
                    <View
                        style={[
                            {
                                minWidth: '95%',
                                borderRadius: 10,
                                padding: 6,
                            },
                            theme === 'light' ? style.lightBackground : style.darkBackground,
                        ]}>
                        <TouchableOpacity
                            style={{
                                alignSelf: 'flex-end',
                            }}
                            onPress={() => {
                                dispatch(toggleModal())
                            }}>
                            <Text style={[
                                style.mediumText,
                                theme === 'light' ? style.lightText : style.darkText
                            ]}>Close</Text>
                        </TouchableOpacity>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                gap: 5,
                                alignItems: 'center',
                            }}>
                                <Text style={[
                                    style.largeText,
                                    style.boldText,
                                    theme === 'light' ? style.lightText : style.darkText
                                ]}>{currentWord?.word}</Text>
                                <Text style={[style.mediumText]}>{currentWord.phonetic}</Text>
                            </View>

                            {/* <Text
                                style={[style.semiBoldText]}
                            >Sound</Text> */}
                            
                        </View>

                        <View style={{
                            marginVertical: 10,
                            gap: 5,
                        }}>
                            <Text style={[style.mediumText]}>{currentWord.partOfSpeech}</Text>

                            <Text style={[style.smallText]}>{currentWord.meaning}</Text>
                        </View>

                        <TouchableOpacity 
                        onPress={() => navigation.navigate('WordScreen', {wordId : currentWord?.id})}
                        style={[
                            theme === 'light' ? style.darkBackground : style.lightBackground,
                            style.centerItem, 
                            {
                                height : 50, 
                                borderRadius : 10, 
                                paddingVertical : 4,
                                marginVertical : 5, 
                            }
                        ]}> 
                            <Text style={[
                                style.mediumText, 
                                theme === 'light' ? style.darkText : style.lightText
                            ]}>Read More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default WordModal