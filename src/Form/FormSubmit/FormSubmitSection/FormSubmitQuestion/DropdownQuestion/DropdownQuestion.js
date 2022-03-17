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
import DropDownPicker from "react-native-dropdown-picker";
const DropdownQuestion = ({title, description, isCompulsory, choices,isMultipleSelected, backgroundColor, interfaceColor}) => 
{
    const [isQuiz, setIsQuiz] = useState(false);
    const [onButtonClick, setOnButtonClick] = useState(true);
    const [open, setOpen] = useState(true);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(choices.map(
        (item) => {return({"id":item.id, "label":item.name, "val":item.name})}));

    const onPress = () => {
        setOnButtonClick(!onButtonClick)
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
                    <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    multiple={isMultipleSelected}
                    style={styles.dropdown_button}
                    placeholder={"Chọn"}/>
                </View>
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
        minHeight: 50
    },
    dropdown_button: {
        zIndex: 1000,
        height: 40,
        marginVertical: 10,
    }
})

export default DropdownQuestion