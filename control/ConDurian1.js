import React,{useState,useEffect} from 'react'
import { View, StyleSheet, Alert, Text, Image,TouchableHighlight, TouchableOpacity,ScrollView, } from 'react-native'
import { color } from 'react-native-reanimated'
import { ImageBackground } from 'react-native';
import globalStyles from '../global-styles'
import ConStyles from '../Con-Style'
import axios from "axios";
import { sendValueToFirebase, database } from '../firebase/firbase';
// import firbase from '../firebase/firbase'
import {getDatabase,ref,set,update,onValue,remove,child,get} from "firebase/database";
// import database from '@react-native-firebase/database';

const wait =(timeout) => {
	return new Promise (resolve => setTimeout(resolve,timeout));
  }

export default function ConDurian1({ route, navigation }){
    let [hasPermission, setHasPermission] = React.useState()
	let [isTorchOn, setIsTorchOn] = React.useState(false)
	let [bgColor, setBgColor] = React.useState('#cc0033')


	const dbRef = ref(getDatabase());
  const database = getDatabase();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [test1, setTest1] = useState("");
  const [test2, setTest2] = useState("");
  const [test3, setTest3] = useState("");
  const [test4, setTest4] = useState("");
  const [test5, setTest5] = useState("");

  //ตรวจสอบโหมดการทำงาน
  const [mode,setMode1]= useState("");
	// ตรวจสอบสถานะการทำงาน
  const [Valve,setTest7]= useState("");

  
//   ตรวจสอบค่าเซนเซอร์
useEffect(() => {
	const fetchData = async () => {
	  try {
		const snapshotSensor = await get(child(dbRef, `Node1/Sensor${username}`));
		const snapshotMode = await get(child(dbRef, `Node1/Zone1${username}`));
		const snapshotValve = await get(child(dbRef, `Node1/Valve${username}`));
  
		if (snapshotSensor.exists()) {
		  const sensorData = snapshotSensor.val();
		  setTest1(sensorData["AirTemperature"]);
		  setTest2(sensorData["Humidity"]);
		  setTest3(sensorData["Light"]);
		  setTest4(sensorData["Moisture"]);
		  setTest5(sensorData["SoilTemperature"]);
		}
  
		if (snapshotMode.exists()) {
		  const modeData = snapshotMode.val();
		  setMode1(modeData["Mode"]);
		}

		if (snapshotValve.exists()) {
		  const valveData = snapshotValve.val();
		  setValve(valveData["Valve"]);
		  // ตรวจสอบสถานะและอัปเดตสถานะที่ถูกแสดงผล
		  if (valveData["Valve"] === "Zone_1_OFF") {
			setStatus("Zone_1_OFF");
		  } else if (valveData["Valve"] === "Zone_1_ON") {
			setStatus("Zone_1_ON");
		  }
		}
	  } catch (error) {
		console.error(error);
	  }
	};
  
	const interval = setInterval(fetchData, 10);
  
	return () => clearInterval(interval);
  }, []);
  
  
// function readData() {
//     const starCountRef = ref(db, "users/" + username);
//     onValue(starCountRef, (snapshot) => {
//     //   const data = snapshot.val();
//       setEmail(data.email);
//     });
//   }
// const [refreshing,setRefreshing] =useState(false);
// const onRefresh = () => {
//   setRefreshing(true);
//   wait(100).then(()=>
//   setRefreshing(false));
// }

    return (
		
		<ScrollView>
			
			<ImageBackground
      		source={require('../assets/background50.png')}
      		style={styles.background}
    	>
			<View style={globalStyles.container}>
           
		   <TouchableHighlight style={[styles.items,]}
			   underlayColor='#00BE00'
			   onPress={
				   () => navigation.navigate('Setmode1')}
		   >
			   
			   <View style={styles.viewImgTextContainer}>
				   <Text style={styles.buttonText}>{mode}</Text>
			   </View>
		   </TouchableHighlight>

		   <TouchableHighlight
				style={[styles.button, { backgroundColor: `${bgColor}` }]}
				onPress={async () => {
					try {
					const value = isTorchOn ? 'Zone_1_OFF' : 'Zone_1_ON';
					await sendValueToFirebase(value);
					setBgColor(isTorchOn ? '#cc0033' : '#00cc33');
					setIsTorchOn(!isTorchOn);
					} catch (error) {
					console.error('Error sending value to Firebase: ', error);
					}
				}}
				>

			<View>
				
				<Text style={styles.buttonText1}>{isTorchOn ? 'เปิด' : 'ปิด'}</Text>
			</View>
			</TouchableHighlight>


		   <View style={{marginTop:10}}>
		   {/* <Text style={{ fontSize: 25, color: status === "Zone_1_OFF" ? "red" : "green" }}>
  				{status === "Zone_1_OFF" ? "สถานะปิดการทำงาน" : "สถานะเปิดการทำงาน"}
			</Text> */}
			<Text style={styles.buttonText2}>
					   {(isTorchOn) ? 'สถานะเปิดการทำงาน' : 'สถานะปิดการทำงาน'}
			   </Text>
			
		   </View>
		   <View style={{marginTop:10}}>
			   <Text></Text>
		   </View>
		   <TouchableHighlight style={[styles.items3,]}>
			   <View style={styles.viewImgTextContainer}>
				   <Image source={require('../src/soil-analysis.png')} style={styles.img} />
				   <Text style={styles.buttonText3}>ความชื้นในดิน</Text>
				   <View style={{paddingLeft:20}}>
					   <Text style={{fontSize:20,color:"#fff"}}>{test4} %</Text>
				   </View>
			   </View>
		   </TouchableHighlight>

		   <TouchableHighlight style={[styles.items3,]}>
			   <View style={styles.viewImgTextContainer}>
				   <Image source={require('../src/humidity.png')} style={styles.img} />
				   <Text style={styles.buttonText3}>ความชื้นในอากาศ</Text>
				   <View style={{paddingLeft:20}}>
					   <Text style={{fontSize:20,color:"#fff"}}>{test2} %</Text>
				   </View>
			   </View>
		   </TouchableHighlight>

		   <TouchableHighlight style={[styles.items3,]}>
			   <View style={styles.viewImgTextContainer}>
				   <Image source={require('../src/temperature.png')} style={styles.img} />
				   <Text style={styles.buttonText3}>อุณหภูมิในดิน</Text>
				   <View style={{paddingLeft:20}}>
					   <Text style={{fontSize:20,color:"#fff"}}>{test5} °C</Text>
				   </View>
			   </View>
		   </TouchableHighlight>

		   <TouchableHighlight style={[styles.items3,]}>
			   <View style={styles.viewImgTextContainer}>
				   <Image source={require('../src/thermometer.png')} style={styles.img} />
				   <Text style={styles.buttonText3}>อุณหภูมิในอากาศ</Text>
				   <View style={{paddingLeft:20}}>
					   <Text style={{fontSize:20,color:"#fff"}}>{test1} °C</Text>
				   </View>
			   </View>
		   </TouchableHighlight>

		   <TouchableHighlight style={[styles.items3,]}>
			   <View style={styles.viewImgTextContainer}>
				   <Image source={require('../src/smart-light.png')} style={styles.img} />
				   <Text style={styles.buttonText3}>ความเข็มแสง</Text>
				   <View style={{paddingLeft:20}}>
					   <Text style={{fontSize:20,color:"#fff"}}>{test3} lux</Text>
				   </View>
			   </View>
		   </TouchableHighlight>
		   

		   
	   </View>
      	{/* Add your content here */}
    	</ImageBackground>
		
	</ScrollView>
        
    )
}

const styles = StyleSheet.create({
	background: {
		  flex: 1,
		  resizeMode: 'cover',
		  justifyContent: 'center',
		},
	container: {
	  flex: 1,
	  flexDirection: "column",
	  alignItems: "center",
	  marginTop: 50,
	},
	items: {
	  width: 150,
	  height: 45,
	  marginTop: 20,
	  marginLeft: 90,
	  marginRight: 90,
	  justifyContent: "center",
	  alignItems: "center",
	  marginBottom: 15,
	  borderRadius: 15,
	  backgroundColor: "#80cbc4",
	},
	items1: {
	  width: 200,
	  height: 200,
	  marginTop: 50,
	  borderRadius: 100,
	  alignItems: "center",
	  backgroundColor: "#cc0033",
	},
	buttonText: {
	  fontSize: 20,
	  color: "#ffffff",
	},
	buttonText1: {
	  fontSize: 60,
	  color: "#ffffff",
	},
	buttonText2: {
	  fontSize: 25,
	  color: "#4169e1",
	},
	viewImgTextContainer: {
	  flexDirection: "row",
	  justifyContent: "space-evenly",
	  alignItems: "center",
	},
	button: {
	  width: 200,
	  height: 200,
	  marginTop: 20,
	  justifyContent: "center",
	  alignItems: "center",
	  borderRadius: 200,
	},
  
	items3: {
	  width: 350,
	  height: 45,
	  justifyContent: "center",
	  alignItems: "center",
	  marginBottom: 15,
	  borderRadius: 15,
	  backgroundColor: "#80cbc4",
	  elevation: 8, // เพิ่ม elevation ให้กับปุ่ม
		  shadowColor: '#000', // กำหนดสีเงา
	},
	buttonOpacity: {},
	buttonHighlight: {},
	buttonText3: {
	  fontSize: 20,
	  color: "white",
	},
	img: {
	  height: 50,
	  width: 50,
	  marginRight: 5,
	  
	},
	img1: {
	  height: 35,
	  width: 35,
	  marginRight: 5,
	  
	},
	img2: {
	  height: 30,
	  width: 30,
	  marginRight: 5,
	  
	},
  });
  