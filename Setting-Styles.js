import {StyleSheet} from 'react-native'

const SettingStyles = StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50,
		
	},
	t:{
		marginTop:5,
		fontSize: 15,
		color: '#000066'
	},
	container1: {
		flex: 1,
	  },
	  container2: {
		flex: 1,
		paddingLeft:30,
		justifyContent: "center",
		alignItems: "center",
	  },
	items: {
		flexDirection:'row',
		height: 90,
        marginTop:10,
        marginLeft:20,
        marginRight:20,
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 50,
		backgroundColor: '#AED6F1'
	},
	itemsBtime: {
		flexDirection:'row',
		height: 90,
        marginTop:10,
        marginLeft:20,
        marginRight:20,
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 25,
		backgroundColor: '#80cbc4',
		elevation: 8, // เพิ่ม elevation ให้กับปุ่ม
		shadowColor: '#000', // กำหนดสีเงา
	},
	itemss: {
		flexDirection:'row',
		marginLeft:30,
		height: 40,
		width:60,
        marginTop:15,
        marginLeft:80,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 50,
		backgroundColor: '#000066'
	},
	itemssetting: {
		flexDirection:'row',
		marginLeft:30,
		height: 40,
		width:60,
        marginTop:15,
        marginLeft:5,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 50,
		backgroundColor: '#000066'
	},
	itemsminandmax:{
		marginLeft:50,
		
	},
    items1:{
        marginBottom: 15
    },
	buttonText: {
		fontSize: 20,
		color: '#00BE00'
	},
	buttonTextt: {
		fontSize: 15,
		color: '#fff'
	},
    buttonText1: {
		fontSize: 60,
		color: '#ffffff'
	},
    buttonText2: {
		fontSize: 30,
		color: '#00BE00'
	},
	viewImgTextContainer: {
		flexDirection: 'row',
		marginLeft:50,
		justifyContent: 'space-evenly',
		
	},
    button: {
		width: 200,
		height: 200,
        marginTop:20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 200,
	},


	items3: {
        marginTop:20,
        marginLeft:20,
		width: 150,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 20,
		backgroundColor: '#AED6F1',
		elevation: 8, // เพิ่ม elevation ให้กับปุ่ม
		shadowColor: '#000', // กำหนดสีเงา
	},
	buttonOpacity: {

	},
	buttonHighlight: {

	},
    textInput: {
		height: 32,
		color: 'black',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#aaa',
		marginTop: 5,
		paddingTop: 3,
		paddingBottom: 3
	},
	buttonText3: {
        marginTop:10,
		fontSize: 20,
		color: '#ffffff'
	},
	img: {
        marginLeft:15,
		height: 80,
		width: 80,
        alignItems: 'center',
		marginRight: 5
	},
	input: {
		height: 45,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 15,
		color:'#000066'
	  },

	  Timeinput :{
		height: 40,
		width: 50,
		alignItems: 'center',
		borderRadius: 20,
	  }

})

export default SettingStyles