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
const ParagraphQuestion = ({title, description, isCompulsory, value}) => 
{
    const [answer, setAnswer] = useState(value);
    const [isBlank, setIsBlank] = useState(false); 
    const [isError, setIsError] = useState(false);
    const [isEditing, setIsEditing] = useState(-1);

    const onChangeEditing = (_edit) => {
        _edit ? setIsEditing(s => 1) : setIsEditing(s => 0)
    }

    useEffect(() => {
        if(isCompulsory){
            if(answer.length == 0){
                setIsBlank(true);
            }
            else{
                setIsBlank(false);
            }
        }
    }, [answer])
    return (
        <View style={styles.container}>
            <View style={styles.main_content}>
                <TitleAndDescriptionInside 
                    title={title}
                    description={description}
                    isCompulsory={isCompulsory}
                />
                <TextInput 
                style={styles.answer_part}
                placeholder="Câu trả lời của bạn"
                onChangeText={setAnswer}
                defaultValue={value}
                onEndEditing={() => onChangeEditing(false)}
                onPressIn={() => onChangeEditing(true)}
                >
                </TextInput>
                <View style={[{backgroundColor: "grey", height: 0.5}, styles.line_under_answer]}/>
                <ErrorDisplay 
                    isError={isBlank}  
                    isTextMax={false}
                    isBlank={isBlank}
                    isCompulsory={isCompulsory}
                    isEditing={isEditing}
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
    answer_part: {
        paddingVertical: 5,
    },
    line_under_answer: {
        marginBottom: 5
    }
})

export default ParagraphQuestion