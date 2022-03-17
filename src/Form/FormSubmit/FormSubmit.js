import React, {useState, useEffect} from "react"
import Button from "react-native-button"
import * as data from "../formdata.json" //data testing

import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput
} from "react-native"

import { FormSubmitSection } from "./FormSubmitSection"

const formData = data;

const FormSubmit = () => 
{
    const [isQuiz, setIsQuiz] = useState(formData.settings.quizSettings.isQuiz);
    

    return (
        <SafeAreaView style ={styles.container}>
            <View style={styles.main}>
                <FormSubmitSection 
                dataForm={formData}
                backgroundColor={formData.backgroundColor}
                interfaceColor={formData.interfaceColor}
                totalSection={formData.sectionCount}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: formData.backgroundColor
        
    },
    main: {
        marginTop: 10,
        paddingHorizontal: 25,
        marginRight: 5,
        height: 750
    },
})

export default FormSubmit