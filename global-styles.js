
import {StyleSheet} from 'react-native'

const globalStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8, // เพิ่ม elevation ให้กับปุ่ม
		shadowColor: '#000', // กำหนดสีเงา
    },
    items: {
        marginTop: 20,
        marginLeft:10,
        marginRight: 10,
    }
})

export default globalStyles