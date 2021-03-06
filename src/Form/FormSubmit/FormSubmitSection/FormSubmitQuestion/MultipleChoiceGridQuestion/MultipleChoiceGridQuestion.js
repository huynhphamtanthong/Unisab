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
const MultipleChoiceGridQuestion = ({title, description, isCompulsory, column, row, interfaceColor}) => 
{
    const [isQuiz, setIsQuiz] = useState(false);
    const [onPressButton, setOnPressButton] = useState([...Array(row.length).fill(false)]);
    const [currentIndexPressed, setCurrentIndexPressed] = useState([...Array(row.length).fill(-1)]);
    const [compulsoryError, setCompulsoryError] = useState(false);
    const [isBlank, setIsBlank] = useState(false);
    const [isRender, setIsRender] = useState(false);
    useEffect(() => {
        setIsBlank(currentIndexPressed.find((item) => item == -1) == -1 ? true : false)
    }, [currentIndexPressed]) 
    const onPress = (index, rowIndex) => {
        if(index == currentIndexPressed[rowIndex]){
            if(!isCompulsory){
                setCurrentIndexPressed(currentIndexPressed.map((i, ind) => ind == rowIndex ? -1 : i));
                setOnPressButton(onPressButton.map((i, ind) => ind == rowIndex ? false : i));
                setCompulsoryError(false);
            }
            else {
                setCompulsoryError(true);
            }
            setIsRender(true);
        }
        else {
            setCurrentIndexPressed(currentIndexPressed.map((i, ind) => ind == rowIndex ? index : i));
            setOnPressButton(onPressButton.map((i, ind) => ind == rowIndex ? true : i));
            setCompulsoryError(false);
            setIsRender(false);
        }
    }
    const renderListItem = ({item, index}) => {
        const rowIndex = index;
        const renderItem = ({item, index}) => {
            return(
                <View style={{width: 75}}>
                    <TouchableOpacity style={styles.button} onPress={() => onPress(index, rowIndex)} activeOpacity={1}>
                        {index == currentIndexPressed[rowIndex] && onPressButton[rowIndex]? 
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
                </View>
            )
        }
        return(
            <View>
                <FlatList
                    scrollEnabled={true}
                    data={column}
                    renderItem={renderItem}
                    extraData={[interfaceColor]}
                    style={styles.multiple_choice_grid_flatlist_item}
                    ListHeaderComponent={
                        <View style={styles.row_flatlist_header}>
                            {<Text style={{textAlign: 'center'}}>{item}</Text>}
                        </View>
                    }
                />
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
                <ScrollView horizontal style={{marginVertical: 15}}>
                    <FlatList
                        scrollEnabled={false}
                        data={row}
                        renderItem={renderListItem}
                        extraData={[interfaceColor, row]}
                        style={styles.multiple_choice_grid_flatlist}
                        ListHeaderComponent={
                            <View style={styles.column_flatlist_header}>
                                {column.map((item) => <Text style={{width:75, textAlign:'center'}}>{item}</Text>)}
                            </View>
                        }
                    />
                </ScrollView>
                <ErrorDisplay 
                    isError={isBlank || compulsoryError}  
                    isTextMax={false}
                    isBlank={compulsoryError ? false : isBlank}
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
    multiple_choice_grid_flatlist: {
        flexDirection: 'column'
    },
    multiple_choice_grid_flatlist_item: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    column_flatlist_header:{
        flexDirection: 'row',
        marginLeft: 100,
    },
    row_flatlist_header:{
        width: 100
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

export default MultipleChoiceGridQuestion