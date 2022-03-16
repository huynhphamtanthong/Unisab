import React, {useState, useEffect} from "react"
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    FlatList
} from "react-native"

import { FormSubmitQuestion } from "./FormSubmitQuestion"
import { FormSectionHeader } from "./FormSectionHeader"

const FormSubmitSection = ({subSection, backgroundColor, interfaceColor}) => {
    const renderItem = ({item}) => {    
        return (
            <View style={styles.body_part}>
                    <FormSubmitQuestion 
                    item={item}
                    backgroundColor={backgroundColor}
                    interfaceColor={interfaceColor}/>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header_part}>
                <FormSectionHeader
                subSection={subSection}
                backgroundColor={backgroundColor}
                interfaceColor={interfaceColor}
                />
            </View>
            <FlatList 
            data={subSection.items}
            renderItem={renderItem}
            keyExtractor={(item) => item.itemId}
            extraData={[backgroundColor, interfaceColor]}/>
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {

    },
    header_part: {
        paddingBottom: 5,
        paddingTop: 5
    },
    body_part:{
        paddingBottom: 5
    }
})

export default FormSubmitSection