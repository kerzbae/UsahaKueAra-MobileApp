import React from 'react';
import {
    View, Text, TouchableOpacity,
    Image, FlatList
} from 'react-native';

import styles from './recommend.style';
import { icons, SIZES } from '../../../constants';
import { TextInput } from 'react-native-gesture-handler';

const Recommend = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.userName}>Rekomendasi</Text>
            </View>
        </View>
    )
}

export default Recommend;