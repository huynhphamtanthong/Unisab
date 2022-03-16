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
    const [sectionCurrentIndex, setSectionCurrentIndex] = useState(0);

    const onHandlePreviousClick = () => {
        setSectionCurrentIndex(sectionCurrentIndex - 1);
    }

    const onHandleNextClick = () => {
        setSectionCurrentIndex(sectionCurrentIndex + 1);
    }

    const onHandleSubmit = () => {
        
    }

    return (
        <View style ={styles.container}>
            <View style={styles.main}>
                <FormSubmitSection 
                subSection={formData.sections[sectionCurrentIndex]} 
                backgroundColor={formData.backgroundColor}
                interfaceColor={formData.interfaceColor}/>
                <View style={styles.buttonDisplayStyles}>
                    {sectionCurrentIndex != 0?
                        <Button onPress={onHandlePreviousClick} style={styles.buttonOptionStyles}>
                            Quay lại
                        </Button> : <></>
                    }
                    {sectionCurrentIndex < parseInt(formData.sectionCount) - 1 ?
                        <Button onPress={onHandleNextClick} style={styles.buttonOptionStyles}>
                            Tiếp
                        </Button> : <></>
                    }
                    {sectionCurrentIndex == parseInt(formData.sectionCount) - 1 ?
                        <Button onPress={onHandleSubmit} style={styles.buttonOptionStyles}>
                            Gửi
                        </Button> : <></>
                    }
                </View>
            </View>
        </View>
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
        marginRight: 5
    },
    buttonDisplayStyles: {
        flexDirection: "row",
    },
    buttonOptionStyles: {
        borderColor: "grey",
        borderWidth: 0.5,
        borderRadius: 5,
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        backgroundColor: "white",
        color: formData.interfaceColor,
        
    }
})

export default FormSubmit