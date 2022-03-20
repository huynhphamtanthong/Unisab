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
const CheckboxGridQuestion = ({title, description, isCompulsory, column, row, interfaceColor}) => 
{
    const [isQuiz, setIsQuiz] = useState(false);
    const [onPressButton, setOnPressButton] = useState([...Array(row.length).fill([...Array(column.length).fill(false)])]);
    const [compulsoryError, setCompulsoryError] = useState(false);
    const [isBlank, setIsBlank] = useState(false);
    const searchCheckingEmpty = () => {
        for(let it of onPressButton){
            let columnIndex = 0;
            for(let item of it){
                if(item == true) break;
                else{
                    if(columnIndex == it.length - 1) return true;
                    else columnIndex += 1;
                }
            }
        }
        return false;
    }
    useEffect(() => {
        setIsBlank(searchCheckingEmpty);
        console.log(isBlank)
    },[onPressButton])
    const onPress = (index, rowIndex) => {
        if(onPressButton[rowIndex][index] == true){
            setOnPressButton(onPressButton.map(
                (it0, ind0) => ind0 == rowIndex ? (it0.map((it1, ind1) => (ind1 == index? (it1 ? false : true) : it1))) : it0));
            if(isBlank) {
                setCompulsoryError(true)
            }
            else {
                setCompulsoryError(false)
            }
        }
        else {
            setOnPressButton(onPressButton.map(
                (it0, ind0) => ind0 == rowIndex ? (it0.map((it1, ind1) => (ind1 == index? (it1 ? false : true) : it1))) : it0)
            );
        }
    }
    const renderListItem = ({item, index}) => {
        const rowIndex = index;
        const renderItem = ({item, index}) => {
            return(
                <View style={{width: 75}}>
                    {onPressButton.map((it0, ind0) => ind0 == rowIndex ? (it0.map((it1, ind1) => (ind1 == index ?
                        <TouchableOpacity style={styles.button} onPress={() => onPress(index, rowIndex)} activeOpacity={1}>
                            {it1?
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
                        </TouchableOpacity>
                        :<></>
                    ))) : <></>
                    )}
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
    multiple_choice_grid_flatlist: {
        flexDirection: 'column'
    },
    multiple_choice_grid_flatlist_item: {
        flexDirection: 'row',
        marginVertical: 5,
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

export default CheckboxGridQuestion