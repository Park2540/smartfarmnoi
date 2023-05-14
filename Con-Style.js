import {StyleSheet} from 'react-native'

const ConStyles = StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50
	},
	items: {
		width: 150,
		height: 45,
        marginTop:20,
        marginLeft:90,
        marginRight:90,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: '#AED6F1'
	},
    items1:{
        width: 200,
		height: 200,
        marginTop:50,
        borderRadius:100,
        alignItems: 'center',
        backgroundColor: '#cc0033'
    },
	buttonText: {
		fontSize: 20,
		color: '#00BE00'
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
		justifyContent: 'space-evenly',
		alignItems: 'center'
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
		width: 350,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: 'royalblue'
	},
	buttonOpacity: {

	},
	buttonHighlight: {

	},
	buttonText3: {
		fontSize: 20,
		color: 'white'
	},
	img: {
		height: 40,
		width: 40,
		marginRight: 5
	}
})

export default ConStyles