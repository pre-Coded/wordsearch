import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import data from '../data.json'
import style from '../Store/StyleSheet';

const WordScreen = ({ navigation }) => {
    const { wordId } = useRoute().params;

    const currentWord = data.filter(item => item.id === wordId)
    const theme = useSelector(state => state.themeColor.value);

    return (
        <View style={[{
            padding : 4, 
            minHeight: '100%',
        },
        theme === 'light' ? style.lightBackground : style.darkBackground
        ]}>
            {/* Go back functionality */}
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}
            style={[{
                width : 90, 
                paddingHorizontal : 6, 
                paddingVertical : 4, 
                borderRadius : 6, 
                borderWidth : 1, 
                borderColor : theme === 'light' ? 'black' : 'white',
            }, style.centerItem]}
            >
                <Text style={[
                    style.mediumText,
                    style.semiBoldText,
                    theme === 'light' ? style.lightText : style.darkText,
                ]}>Go Back</Text>
            </TouchableOpacity>


            {/* Information of the word is here */}
            <View style={{
                paddingHorizontal: 8,
                marginTop: 10,
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 6,
                    alignItems: 'center'
                }}>
                    <Text style={[
                        style.largeText,
                        style.boldText,
                        theme === 'light' ? style.lightText : style.darkText,
                    ]}>{currentWord[0].word}</Text>
                    <Text style={[
                        style.mediumText,
                        theme === 'light' ? style.lightText : style.darkText,
                    ]}>{currentWord[0].phonetic}</Text>
                </View>

                <View style={{
                    marginVertical: 10,
                    gap: 5,
                }}>
                    <Text style={[
                        style.mediumText,
                        theme === 'light' ? style.lightText : style.darkText,
                    ]}>{currentWord[0].partOfSpeech}</Text>
                    <Text style={[
                        style.smallText,
                        theme === 'light' ? style.lightText : style.darkText,
                    ]}>{currentWord[0].meaning}</Text>
                </View>
            </View>
        </View>
    )
}

export default WordScreen