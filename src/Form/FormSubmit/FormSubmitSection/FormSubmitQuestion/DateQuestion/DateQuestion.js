import React, {useState, useEffect} from "react"

import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput
} from "react-native"
import { ErrorDisplay } from "../Display/ErrorDisplay";
import { TitleAndDescriptionInside } from "../Display/TitleAndDescriptionInside";
const DateQuestion = ({title, description, isCompulsory}) => 
{
    const [isQuiz, setIsQuiz] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.main_content}>
                <TitleAndDescriptionInside 
                    title={title}
                    description={description}
                    isCompulsory={isCompulsory}
                />
                <Text>Note: Date Picker library not working</Text>
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
                    mode="date"
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
    }
})

export default DateQuestion