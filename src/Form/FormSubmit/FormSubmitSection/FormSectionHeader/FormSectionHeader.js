import React, {useState, useEffect} from "react"
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput
} from "react-native"

const FormSectionHeader = ({subSection, backgroundColor, textColor}) => {
    return (
        <View style={styles.container}>
            <View style={[{backgroundColor: textColor, height:5, }, styles.header_color]}></View>
            <View style={styles.header_content}>
                <Text style={styles.title}>
                    {subSection?.sectionTitle}
                </Text>
                <Text style={styles.description}>
                    {subSection?.description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 5,
        backgroundColor: "white"
    },
    header_color: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    header_content: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    title: {
        fontSize: 30,
        paddingBottom: 5,
        fontWeight: "600"
    },
    description: {
        fontSize: 12,
        paddingBottom: 5
    }
})

export default FormSectionHeader