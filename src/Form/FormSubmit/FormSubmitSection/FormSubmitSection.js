import React, {useState, useEffect} from "react"
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    FlatList,
} from "react-native"
import Button from "react-native-button"
import { FormSubmitQuestion } from "./FormSubmitQuestion"
import { FormSectionHeader } from "./FormSectionHeader"

const FormSubmitSection = ({dataForm, backgroundColor, interfaceColor, totalSection}) => {
    const [sectionCurrentIndex, setSectionCurrentIndex] = useState(0);
    const [data, setData] = useState(dataForm); 
    const onHandlePreviousClick = () => {
        setSectionCurrentIndex(s => s-1);
    }

    const onHandleNextClick = () => {
        console.log("av",sectionCurrentIndex);
        setSectionCurrentIndex(s => s+1);
    }

    const onHandleSubmit = () => {
        
    }
    const renderItem = ({item}) => {    
        return (
            <View style={styles.body_part}>
                    <FormSubmitQuestion 
                    item={item}
                    backgroundColor={backgroundColor}
                    interfaceColor={interfaceColor}/>
            </View>
        )
    }
    useEffect(() => {
        setData(dataForm);
    }, [dataForm])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
            data={data.sections[sectionCurrentIndex].items}
            renderItem={renderItem}
            keyExtractor={(item) => item.itemId}
            extraData={[backgroundColor, interfaceColor]}
            ListHeaderComponent={
                <View style={styles.header_part}>
                    <FormSectionHeader
                    subSection={data.sections[sectionCurrentIndex]}
                    backgroundColor={backgroundColor}
                    interfaceColor={interfaceColor}
                    />
                </View>}
            ListFooterComponent={
                <View style={styles.buttonDisplayStyles}>
                    {sectionCurrentIndex != 0?
                        <Button onPress={onHandlePreviousClick} style={[styles.buttonOptionStyles, {color:interfaceColor}]}>
                            Quay lại
                        </Button> : <></>
                    }
                    {sectionCurrentIndex < totalSection - 1 ?
                        <Button onPress={onHandleNextClick} style={[styles.buttonOptionStyles, {color:interfaceColor}]}>
                            Tiếp
                        </Button> : <></>
                    }
                    {sectionCurrentIndex == totalSection - 1 ?
                        <Button onPress={onHandleSubmit} style={[styles.buttonOptionStyles, {color:interfaceColor}]}>
                            Gửi
                        </Button> : <></>
                    }
                </View>
            }
            />
        </SafeAreaView>
    )    
}

const styles = StyleSheet.create({
    container: {

    },
    header_part: {
        paddingBottom: 5,
        paddingTop: 5
    },
    body_part:{
        paddingBottom: 5
    },
    buttonDisplayStyles: {
        flexDirection: "row",
    },
    buttonOptionStyles: {
        borderColor: "grey",
        borderWidth: 0.5,
        borderRadius: 5,
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        backgroundColor: "white",
        marginRight: 5
        
    }
})

export default FormSubmitSection