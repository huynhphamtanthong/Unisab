import React, {useState, useEffect} from "react"

import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput
} from "react-native"

const TitleAndDescriptionInside = ({title, description, isCompulsory}) => {
    return (
        <View >
            <Text style={styles.question}>
                {title}
                {isCompulsory?
                    <Text style={{color: "red"}}> 
                        {'\u00A0'}*
                    </Text>:<></>
                }
            </Text>
            {description != "" && description != null ? 
                <Text style={styles.description}>
                    {description}
                </Text> : <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    main_content:{

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

export default TitleAndDescriptionInside