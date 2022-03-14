import React, {useState, useEffect} from "react"

import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput
} from "react-native"
import { TitleAndDescriptionInside } from "../Display/TitleAndDescriptionInside"
const TitleAndDescription = ({title, description}) => 
{
    return (
        <View style={styles.container}>
            <View style={styles.main_content}>
                <TitleAndDescriptionInside 
                    title={title}
                    description={description}
                    isCompulsory={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.3,
        borderRadius: 5,
        backgroundColor: "white",
    },
    main_content:{
        marginHorizontal: 15,
        marginVertical: 5
    },
    question: {
        paddingVertical: 5,
        fontSize: 15,
        fontWeight: "600",
    },
    description: {
        paddingVertical: 5,
        fontSize: 12
    }
})

export default TitleAndDescription