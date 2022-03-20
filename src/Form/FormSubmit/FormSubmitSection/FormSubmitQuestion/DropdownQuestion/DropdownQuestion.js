import React, {useState, useEffect} from "react"

import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity
} from "react-native"
import { ErrorDisplay } from "../Display/ErrorDisplay";
import { TitleAndDescriptionInside } from "../Display/TitleAndDescriptionInside";
import ModalDropdown from "react-native-modal-dropdown";
const DropdownQuestion = ({title, description, isCompulsory, choices}) => 
{
    const [isQuiz, setIsQuiz] = useState(false);
    const [onButtonClick, setOnButtonClick] = useState(true);
    const [indexValue, setIndexValue] = useState(-1);
    const [isBlank, setIsBlank] = useState(false);
    const [compulsoryError, setCompulsoryError] =useState(false);
    const [items, setItems] = useState(choices.map((item) => item.name));

    useEffect(() => {
        if(indexValue == - 1){
            setIsBlank(true);
        }
        else {
            setIsBlank(false);
        }
    })

    const onSelect = (index) => {
        setIndexValue(index);
    }
    return (
        <View style={styles.container}>
            <View style={styles.main_content}>
                <TitleAndDescriptionInside 
                    title={title}
                    description={description}
                    isCompulsory={isCompulsory}
                />
                <View style={styles.dropdown_view}>
                    <ModalDropdown 
                    style={styles.dropdown_button} 
                    options={items}
                    defaultValue={"Chọn"}
                    textStyle={styles.dropdown_button_text}
                    dropdownTextStyle={styles.dropdown_button_text}
                    onSelect={(index) => onSelect(index)}
                    />
                </View>
                <ErrorDisplay 
                    isError={isBlank}  
                    isTextMax={false}
                    isBlank={isBlank}
                    isCompulsoryError={false}
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
    dropdown_view: {
        minHeight: 50,
    },
    dropdown_button: {
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        width: 150,
        fontSize: 20,
        alignItems: "flex-start",
        justifyContent: "center",
    }, 
    dropdown_button_text: {
        fontSize: 15,
        marginHorizontal: 10
    }
})

export default DropdownQuestion