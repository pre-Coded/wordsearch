import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, FlatList, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentWord } from '../Store/Slices/currentWordSlice.js';

import data from '../data.json';
import WordCard from '../Component/WordCard.js';
import { toggleModal } from '../Store/Slices/ModalSlice.js';
import WordModal from '../Component/WordModal.js';

import style from '../Store/StyleSheet.js';

import Error from '../Component/Error.js';
import { setThemeColor } from '../Store/Slices/themeColorSlice.js';

const HomePage = () => {
  const [visibleWelcome, setVisibleWelcome] = useState(true);
  const [error, setError] = useState('');
  const [text, setText] = useState('');
  const [wordArray, setWordArray] = useState([])


  
  const dispatch = useDispatch();
  const currentWord = useSelector(state => state.currentWord.value)
  const theme = useSelector(state => state.themeColor.value);


  const themeColor = useColorScheme();
  useEffect(() => {
    dispatch(setThemeColor(themeColor));
  }, [themeColor])

  useEffect(() => {
    const displayRandomWord = () => {
      const rand = Math.floor(Math.random() * 11);

      setWordArray([data[rand]]);
      setText(data[rand]?.word);

      dispatch(setCurrentWord(data[rand]));
    }

    displayRandomWord()
  }, [])

  const handleSearch = (text) => {
    const wordRegex = /^[a-zA-Z_]+$/;

    // console.log(text)
    text = text.trim();
    text = text.toLowerCase();

    if (wordRegex.test(text)) {
      setError('');

      const filteredSearch = data.filter(item => item?.word.toLowerCase().includes(text));

      if(filteredSearch.length === 0){
        setError('Word is not found.')
      }

      setWordArray(filteredSearch);
    } else if (text === '') {
      console.log('empty')

      setError('Please Type Something...');
      setWordArray([]);
    } else {

      setError('Please Enter a Valid Word');
      console.log('Error');
    }
  }

  return (
    <View style={[
      theme === 'light' ? style.lightBackground : style.darkBackground, 
    ]}>

      <WordModal />

      {
        visibleWelcome ?

          // Welcome Component, once tapped, disappears after that
          <View style={[{minHeight : '100%'}, style.centerItem]}>

            <Text style={
              [
                style.mediumText, 
                style.semiBoldText, 
                {marginVertical : 10}, 
              ]}>Live Without Boring Words</Text>

            <WordCard onPress={() => {
              setVisibleWelcome(false);
            }}
              word={currentWord?.word} 
              phonetic={currentWord?.phonetic} 
              partOfSpeech={currentWord?.partOfSpeech} 
              meaning={currentWord?.meaning}
            />
          </View>

          :

          <View style={{
            minHeight : '100%',
          }}>

            <View style={{
              borderColor: theme === 'light' ? 'black' : 'white',
              borderWidth: 2,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 2,
              margin: 5,
              height: 60,
              borderRadius: 10,
            }}>
              <TextInput
                style={[
                  style.mediumText,
                  theme === 'light' ? style.lightText : style.darkText, 
                  {flex : 1}
                ]}
                autoFocus
                numberOfLines={1}
                onChangeText={(text) => {
                  setText(text)
                  handleSearch(text)
                }}
                value={text}
              />

              <TouchableOpacity onPress={() => {
                setText('')
                handleSearch('')
              }}
                style={{
                  height: 'auto',
                }}
              >
                <Text style={[
                  style.mediumText
                ]}>Clear</Text>
              </TouchableOpacity>

            </View>


            {
              error.length > 0 ?

                <Error text={error}/> :

                <FlatList
                  data={wordArray}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => <WordCard
                    word={item?.word}
                    phonetic={item?.phonetic}
                    partOfSpeech={item?.partOfSpeech}
                    meaning={item?.meaning}
                    onPress={() => {
                      dispatch(setCurrentWord(item));
                      dispatch(toggleModal());
                    }
                    }
                  />
                  }
                  contentContainerStyle={{
                    gap: 5,
                    paddingBottom: 10,
                    marginTop : 20,
                  }}
                />

            }

          </View>
      }
    </View>
  )
}

export default HomePage