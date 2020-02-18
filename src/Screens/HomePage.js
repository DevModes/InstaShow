import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

const HomePage = () => {
    const [state, setstate] = useState()

    // useEffect(() => {
    //     return () => {
    //     };
    // }, [])
    return (
        <SafeAreaView style={{ flex: 1,  }}>
            <View>
                <View>
                <Text>Welcome to Home Page </Text>
                <Text>2 days ago</Text>
                </View>
                <Image source = {{uri : ""}} />
            </View>
        </SafeAreaView>
    )
}

export default HomePage
