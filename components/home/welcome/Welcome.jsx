import React from 'react'
import {
  View, Text, TouchableOpacity,
  Image, FlatList
} from 'react-native'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'
import { TextInput } from 'react-native-gesture-handler'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Fajar</Text>
        <Text style={styles.welcomeMessage}>Apa yang ingin ada pesan hari ini?</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => { }}
            placeholder='Cari makanan atau minuman...'
          />
          <TouchableOpacity style={styles.searchContainer}>
            <Image source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Welcome