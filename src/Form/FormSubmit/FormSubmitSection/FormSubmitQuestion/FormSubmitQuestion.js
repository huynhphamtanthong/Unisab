import React, {useState, useEffect} from "react"
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput
} from "react-native"
import { CheckboxGridQuestion } from "./CheckboxGridQuestion"
import { CheckboxQuestion } from "./CheckboxQuestion"
import { DateQuestion } from "./DateQuestion"
import { DropdownQuestion } from "./DropdownQuestion"
import { FileUploadQuestion } from "./FileUploadQuestion"
import { LinearScaleQuestion } from "./LinearScaleQuestion"
import { MultipleChoiceGridQuestion } from "./MultipleChoiceGridQuestion"
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion"
import { ParagraphQuestion } from "./ParagraphQuestion"
import { ShortAnswerQuestion } from "./ShortAnswerQuestion"
import { TimeQuestion } from "./TimeQuestion"
import { TitleAndDescription } from "./TitleAndDescription"
const FormSubmitQuestion = ({item, backgroundColor, interfaceColor}) => {
    return (
        <SafeAreaView>
            {item?.kind == "Short Answer"? 
                <ShortAnswerQuestion 
                title={item?.title}
                description={item?.description}
                isCompulsory={item?.isCompulsory}
                /> : <></>
            }
            {item?.kind == "Paragraph"?
                <ParagraphQuestion 
                title={item?.title}
                description={item?.description}
                isCompulsory={item?.isCompulsory}
                /> : <></>
            }
            {item?.kind == "Title And Description"?
                <TitleAndDescription
                title={item?.title}
                description={item?.description}
                />:<></>
            }
            {item?.kind == "Multiple Choice"?
                <MultipleChoiceQuestion
                title={item?.title}
                description={item?.description}
                isCompulsory={item?.isCompulsory}
                choices={item?.choices}
                interfaceColor={interfaceColor}
                />:<></>
            }
            {item?.kind == "Checkbox"?
                <CheckboxQuestion
                title={item?.title}
                description={item?.description}
                isCompulsory={item?.isCompulsory}
                choices={item?.choices}
                interfaceColor={interfaceColor}
                />:<></>
            }
            {item?.kind == "Dropdown"?
                <DropdownQuestion
                title={item?.title}
                description={item?.description}
                isCompulsory={item?.isCompulsory}
                choices={item?.choices}
                isMultipleSelected={item?.isMultipleSelected}
                backgroundColor={backgroundColor}
                interfaceColor={interfaceColor}
                />:<></>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

export default FormSubmitQuestion