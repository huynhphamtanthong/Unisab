import React, {useState, useEffect} from "react"

import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput
} from "react-native"

const ErrorDisplay = ({isError, isTextMax, isBlank, isCompulsoryError, isCompulsory, isEditing}) => {
    return (
        <View >
            {isError && isCompulsory && isEditing == 0 ?
                <View style={styles.error_notify}>
                    <Text style={styles.error_notify_icon}>Icon</Text>
                    {isTextMax?
                        <Text style={styles.error_notify_text}>
                            Câu trả lời ngắn chỉ bao gồm tối đa 50 kí tự
                        </Text>:<></>
                    }
                    {isBlank && isCompulsory?
                        <Text style={styles.error_notify_text}>
                            Đây là câu hỏi bắt buộc
                        </Text>:<></>
                    }
                    {isCompulsoryError && isCompulsory?
                        <Text style={styles.error_notify_text}>
                            Đây là câu hỏi bắt buộc
                        </Text>:<></>
                    }
                </View>:<></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    error_notify: {
        flexDirection: "row"
    },
    error_notify_icon: {
        fontSize: 12,
        color: "red",
        marginRight: 5
    },
    error_notify_text: {
        fontSize: 12,
        color: "red"
    }
})

export default ErrorDisplay