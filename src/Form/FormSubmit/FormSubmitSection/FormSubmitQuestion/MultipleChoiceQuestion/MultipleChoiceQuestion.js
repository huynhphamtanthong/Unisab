import React, {useState, useEffect} from "react"

import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    FlatList,
    TouchableOpacity
} from "react-native"

import { ErrorDisplay } from "../Display/ErrorDisplay";
import { TitleAndDescriptionInside } from "../Display/TitleAndDescriptionInside";
const MultipleChoiceQuestion = ({title, description, isCompulsory, choices, interfaceColor, value}) => 
{
    const [isQuiz, setIsQuiz] = useState(false);
    const [onPressButton, setOnPressButton] = useState(false);
    const [currentIndexPressed, setCurrentIndexPressed] = useState(value);
    const [compulsoryError, setCompulsoryError] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);
    const [isBlank, setIsBlank] = useState(false);
    const [isRender, setIsRender] = useState(false);

    useEffect(() => {
        setIsBlank(currentIndexPressed == -1 ? true : false)
    }, [currentIndexPressed]) 
    const onPress = (index) => {
        if(index == currentIndexPressed && !isCompulsory){
            setCurrentIndexPressed(-1);
            setOnPressButton(false);
            setCompulsoryError(false);
        }
        else if(index == currentIndexPressed && isCompulsory){
            setCompulsoryError(true);
        }
        else {
            setCurrentIndexPressed(index);
            setOnPressButton(true);
            setCompulsoryError(false);
        }
        setIsRender(true);
    }
    const renderChoice = ({item, index}) => {
        return (
            <TouchableOpacity style={styles.button} onPress={() => onPress(index)} activeOpacity={1}>
                {index == currentIndexPressed && onPressButton? 
                    <View style={[styles.picker_button,{borderColor: interfaceColor}]}>
                        <View style={
                            [styles.picker_button_on_press_inside,
                            {borderColor: interfaceColor},
                            {backgroundColor: interfaceColor} ]}>
                        </View>
                    </View>
                    :
                    <View style={styles.picker_button}></View>
                }
                <Text style={styles.picker_text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.main_content}>
                <TitleAndDescriptionInside 
                    title={title}
                    description={description}
                    isCompulsory={isCompulsory}
                />
                <FlatList
                data={choices}
                renderItem={renderChoice}
                keyExtractor={(choice) => choice.id}
                extraData={[interfaceColor]}/>
                <ErrorDisplay 
                    isError={isBlank||compulsoryError}  
                    isTextMax={false}
                    isBlank={isBlank}
                    isCompulsoryError={compulsoryError}
                    isCompulsory={isCompulsory}
                    isEditing={!isRender}
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
    button: {
        backgroundColor: "transparent",
        flexDirection: "row"
    },
    picker_button: {
        borderRadius: 10,
        borderWidth: 1.5,
        width: 20,
        height: 20,
        backgroundColor: "white",
        marginVertical: 5
    },
    picker_button_on_press_inside: {
        borderRadius: 10,
        borderWidth: 1,
        width: 12,
        height: 12,
        marginVertical: 2.5,
        marginHorizontal: 2.5
    },
    picker_text: {
        marginVertical: 5,
        marginHorizontal: 10
    }
})

export default MultipleChoiceQuestion