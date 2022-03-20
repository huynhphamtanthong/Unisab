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
const CheckboxQuestion = ({title, description, isCompulsory, choices, interfaceColor}) => 
{
    const [isQuiz, setIsQuiz] = useState(false);
    const [onPressButton, setOnPressButton] = useState(choices.map(() => false));
    const [compulsoryError, setCompulsoryError] = useState(false);
    const [isBlank, setIsBlank] = useState(false);
    useEffect(() => {
        setIsBlank(!onPressButton.find(item => item == true));
    },[onPressButton])
    const onPress = (index) => {
        console.log(isBlank)
        console.log(onPressButton)
        setOnPressButton(onPressButton.map(
            (it, ind) => (ind == index? (it ? false : true) : it))
        );
        console.log(onPressButton)
        if(onPressButton[index] == true){
            console.log(isBlank)
            if(isBlank) {
                setCompulsoryError(true)
            }
            else {
                setCompulsoryError(false)
            }
        }
        console.log(isBlank)
        console.log(onPressButton)
    }
    const renderChoice = ({item, index}) => {
        return (
            <View>
                {onPressButton.map((it, ind) => (ind == index ? 
                    <TouchableOpacity style={styles.button} onPress={() => onPress(index)} activeOpacity={1}>
                        {it?
                            <View style={[styles.picker_button,{borderColor: interfaceColor}]}>
                                <View style={
                                    [styles.picker_button_on_press_inside_left,
                                    {borderColor: interfaceColor,
                                    backgroundColor: interfaceColor} ]}>
                                        <View style={styles.picker_button_icon_left}/>
                                </View>
                                <View style={
                                    [styles.picker_button_on_press_inside_right,
                                    {borderColor: interfaceColor,
                                    backgroundColor: interfaceColor} ]}>
                                        <View style={styles.picker_button_icon_right} />
                                </View>
                            </View>
                            :
                            <View style={styles.picker_button}></View>
                        }
                        <Text style={styles.picker_text}>{item.name}</Text>
                        
                    </TouchableOpacity>
                    : <></> 
                ))}
            </View>
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
                    isError={isBlank || compulsoryError}
                    isTextMax={false}
                    isBlank={compulsoryError? false :isBlank}
                    isCompulsoryError={compulsoryError}
                    isCompulsory={isCompulsory}/>
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
        borderRadius: 4,
        borderWidth: 1.5,
        width: 20,
        height: 20,
        backgroundColor: "white",
        marginVertical: 5,
        flexDirection: "row"
    },
    picker_button_on_press_inside_left: {
        borderRadius: 0,
        borderWidth: 1,
        width: 7,
        height: 18,
    },
    picker_button_on_press_inside_right: {
        borderRadius: 0,
        borderWidth: 1,
        width: 10,
        height: 18,
    },
    picker_button_icon_left: {
        borderRadius: 0,
        borderWidth: 0.3,
        width: 2,
        height: 5,
        transform: [{rotate: "-45deg"}],
        borderColor: "white",
        backgroundColor: "white",
        marginTop: 7,
        marginLeft: 2
    },
    picker_button_icon_right: {
        borderRadius: 0,
        borderWidth: 0.3,
        width: 2,
        height: 12,
        transform: [{rotate: "45deg"}],
        borderColor: "white",
        backgroundColor: "white",
        marginTop: 1.5,
        marginRight: 2
    },
    picker_text: {
        marginVertical: 5,
        marginHorizontal: 10
    }
})

export default CheckboxQuestion