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

import { FormSubmitQuestion } from "./FormSubmitQuestion"
import { FormSectionHeader } from "./FormSectionHeader"

const FormSubmitSection = ({subSection, sectionIndex}) => {
    return (
        <View>
            <FormSectionHeader/>
            {subSection?.items.map((item) => {
                <FormSubmitQuestion item={item}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {

    },
    section: {
        
    }
})

export default FormSubmitSection