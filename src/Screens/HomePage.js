import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import ResponsiveImage from 'react-native-responsive-image';
import { Container, Header, Content, Card, CardItem, Body, } from "native-base";
import EntypoIcons from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome'
const HomePage = () => {
    const [state, setstate] = useState()
    const data = [
        {
            name: 'a'
        },
        {
            name: 'a'
        },
        {
            name: 'a'
        }
    ]
    return (
        <SafeAreaView style={styles.MainContainer}>
            <Content>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <Card>
                                <CardItem header bordered style={styles.NameContainer}>
                                    <Text style={styles.textStyle}>Nishant Thapa</Text>
                                    <Text style={styles.textStyle}>2 days ago</Text>
                                </CardItem>
                                <CardItem cardBody>
                                    <Body>
                                        <ResponsiveImage source={{ uri: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" }} initWidth="420" initHeight="220" />
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered style={styles.commentSection}>
                                    <Ionicons name="md-thumbs-up" size={20} />
                                    <FontAwesome5 name='comment' size={20} />
                                    <Ionicons name="md-share-alt" size={25} />
                                </CardItem>
                            </Card>
                        )
                    }}
                />
            </Content>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    MainContainer: { flex: 1, backgroundColor: 'white' },
    Container: { width: '90%', alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: 'white', marginVertical: '3%' },
    NameContainer: { flexDirection: 'row', justifyContent: 'space-between', },
    commentSection: { flexDirection: 'row', justifyContent: 'space-between', padding: '2%' },
    textStyle: { color: 'black', fontSize: 15, fontWeight: '500' }
})
export default HomePage
