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
import DatePicker from "react-native-date-picker";
import { TitleAndDescriptionInside } from "../Display/TitleAndDescriptionInside";
const TimeQuestion = ({title, description, isCompulsory, interfaceColor}) => 
{
    const [isQuiz, setIsQuiz] = useState(false);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.main_content}>
                <TitleAndDescriptionInside 
                    title={title}
                    description={description}
                    isCompulsory={isCompulsory}
                />
                <Text>Note: Time Picker library not working</Text>
                {/* <TouchableOpacity 
                style={[styles.button, {backgroundColor: interfaceColor}]}
                onPress={() => setOpen(true)}>
                    <Text style={styles.button_text}>Chọn</Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                    setOpen(false)
                    console.log("add date to holidays array", date)
                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}
                    mode="time"
                /> */}
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
    button : {
        borderWidth: 0.5,
        borderRadius: 5,
        width: 100,
        height: 30,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    button_text: {
        color: "white",
        fontSize: 14,
        fontWeight: "600"
    }
})

export default TimeQuestion