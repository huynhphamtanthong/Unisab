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
    const [onPressButton, setOnPressButton] = useState(false);
    const [currentIndexPressed, setCurrentIndexPressed] = useState(-1);
    const onPress = (index) => {
        if(index == currentIndexPressed){
            setCurrentIndexPressed(-1);
            setOnPressButton(false);
        }
        else {
            setCurrentIndexPressed(index);
            setOnPressButton(true);
        }
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
        borderRadius: 1,
        borderWidth: 1.5,
        width: 20,
        height: 20,
        backgroundColor: "white",
        marginVertical: 5
    },
    picker_button_on_press_inside: {
        borderRadius: 1,
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

export default CheckboxQuestion