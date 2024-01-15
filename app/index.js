import { useState } from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES } from '../constants'
import {
    ScreenHeaderBtn, Welcome
} from '../components'
import Boxcard from '../components/home/boxcard/Boxcard'
import Recommend from '../components/home/recommend/Recommend'

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome />
                </View>
                <View>
                    <Boxcard iconUrl={images.snackbox}
                        style={{
                            width: 100,
                            height: 100
                        }}
                        dimension="100%"
                    />
                    <Boxcard iconUrl={images.kuenampan} dimension='100%' />
                    <Boxcard iconUrl={images.loyang} dimension='100%' />
                    <Boxcard iconUrl={images.kuetampah} dimension='100%' />
                </View>
                <View>
                    <Recommend />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;