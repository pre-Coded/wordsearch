import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import style from '../Store/StyleSheet';


const WordCard = ({ word, phonetic, partOfSpeech, meaning, onPress }) => {
    const theme = useSelector(state => state.themeColor.value);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[{
                minHeight: 120,
                minWidth: '95%',
                padding: 4,
                marginHorizontal: 10,
                borderRadius: 10,
                shadowColor: theme === 'light' ? '#000' : '#444444',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 5,
            },
            theme === 'light' ? style.lightBackground : style.darkBackground
            ]}
        >
            <View style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
            }}>
                <Text style={[
                    style.largeText,
                    style.boldText]}
                >{word}</Text>
                <Text style={[style.mediumText]}>{phonetic}</Text>
            </View>
            <Text style={[
                {
                    marginVertical: 5,
                },
                style.mediumText,
                style.semiBoldText]}>
                {partOfSpeech}
            </Text>
            <Text
                numberOfLines={1}
                style={[style.smallText]}>{meaning}</Text>
        </TouchableOpacity>
    )
}

export default WordCard