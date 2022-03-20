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
const LinearScaleQuestion = ({title, description, isCompulsory, startIndex, endIndex, leftItem, rightItem, interfaceColor}) => 
{
    const [isQuiz, setIsQuiz] = useState(false);
    const [listItem, setListItem] = useState(
        parseInt(startIndex) == 0 
            ? Array.from(Array(endIndex - startIndex + 1).keys())
            : Array.from({length: endIndex - startIndex + 1}, (_, i) => i + 1)
    );
    const [onPressButton, setOnPressButton] = useState(false);
    const [currentIndexPressed, setCurrentIndexPressed] = useState(-1);
    const [compulsoryError, setCompulsoryError] = useState(false);
    const [isBlank, setIsBlank] = useState(false);
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
    }
    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity style={styles.button} onPress={() => onPress(index)} activeOpacity={1}>
                <Text style={styles.picker_text}>{item}</Text>
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
                <View style={styles.linear_scale_main_view}>
                    <Text style={styles.liner_scale_left_item}>
                        {leftItem}
                    </Text>
                    <FlatList
                    data={listItem}
                    renderItem={renderItem}
                    keyExtractor={(choice) => choice.id}
                    extraData={[interfaceColor]}
                    style={styles.linear_scale_flatlist}
                    />
                    <Text style={styles.liner_scale_right_item}>
                        {rightItem}
                    </Text>
                </View>
                <ErrorDisplay 
                    isError={isBlank || compulsoryError}  
                    isTextMax={false}
                    isBlank={isBlank}
                    isCompulsoryError={compulsoryError}
                    isCompulsory={isCompulsory}
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
    linear_scale_main_view :{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 10
    },
    liner_scale_left_item:{
        textAlign: 'center'
    },
    liner_scale_right_item:{
        textAlign: 'center'
    },
    linear_scale_flatlist:{
        flexDirection:'row',
        marginHorizontal: 10,
        justifyContent: 'space-evenly',
        flex: 1
    },
    linear_scale_flatlist_item:{
    },
    button: {
        alignItems: 'center'
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

export default LinearScaleQuestion