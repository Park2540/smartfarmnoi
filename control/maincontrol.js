import React, { useState,useEffect } from "react";
import { View, StyleSheet, Alert, Text, Image,Switch,TouchableHighlight, TouchableOpacity, Button } from 'react-native'
import { color } from 'react-native-reanimated'
import { ImageBackground } from 'react-native';
import dayjs from 'dayjs'

import globalStyles from '../global-styles'
import SettingStyles from '../Setting-Styles'
import {getDatabase,ref,set,update,onValue,remove,child,get} from "firebase/database";
import database from '@react-native-firebase/database';


export default function Maincontrol({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);


  

  

  	//dayjs.extend(LocalizedFormat);
    var date_str = dayjs('2000-01-01').format('h:mm:ss A');
    return (
        <ImageBackground
      		source={require('../assets/background50.png')}
      		style={styles.background}
    	>
        <View style={globalStyles.container}>
			
            <View style={{marginTop:10,}}>
                <Text> {'\n'}</Text>
            </View>
			
			{/* <ImageBackground
      		source={require('./assets/background.jpg')}
      		style={styles.background}>
      
    		</ImageBackground> */}

            <TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('ConDurian1')}
			>
				
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>ควบคุมการทำงานทุเรียนโซน 1</Text>
					<View style={styles.container1}>
      					{/* <Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch}
        					value={isEnabled}
      					/> */}
						{/* <Text> {test1}</Text> */}
    				</View>
				</View>
			</TouchableHighlight>

			<TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('ConDurian2')}
			>
				<View style={styles.viewImgTextContainer}>
					
					<Text style={styles.buttonText}>ควบคุมการทำงานทุเรียนโซน 2</Text>
					<View style={styles.container1}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch1}
        					value={isEnabled1}
      					/>
    				</View>
				</View>
			</TouchableHighlight>

            <TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('ConDurian3')}
			>
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>ควบคุมการทำงานทุเรียนโซน 3</Text>
					<View style={styles.container1}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch2}
        					value={isEnabled2}
      					/>
    				</View>
				</View>
			</TouchableHighlight>

            
           
        </View>
		</ImageBackground>
    )
}
const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: 'cover',
		
	  },
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50
	},
	container1: {
		paddingLeft:20,
	  },
	items: {
		width: 350,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: '#80cbc4',
		elevation: 10, // เพิ่ม elevation ให้กับปุ่ม
		shadowColor: '#000', // กำหนดสีเงา
	},
	buttonOpacity: {

	},
	buttonHighlight: {

	},
	buttonText: {
		fontSize: 20,
		color: 'white'
	},
	viewImgTextContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
	},
	img: {
		height: 40,
		width: 40,
		marginRight: 5
	}


})