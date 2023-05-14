import React, { useState } from "react";
import {View,ScrollView,SafeAreaView,Switch,StyleSheet, Alert,Text,Image,TextInput,TouchableHighlight} from "react-native";
import { color } from "react-native-reanimated";
import {  Button, TouchableOpacity, Modal, TimePickerAndroid } from 'react-native';

import dayjs from "dayjs";
import { ImageBackground } from 'react-native';
import globalStyles from "../global-styles";
import SettingStyles from "../Setting-Styles";

// import { fonts } from "react-native-elements/dist/config";
import { sendValueToFirebase, database } from '../firebase/firbase';
import {getDatabase,ref,set,update,onValue,remove,child,get} from "firebase/database";

export default function Timemode2({ route, navigation }) {

  const [number, onChangeNumber] = React.useState(null);
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [number3, onChangeNumber3] = React.useState(null);
  const [number4, onChangeNumber4] = React.useState(null);
  const [number5, onChangeNumber5] = React.useState(null);
// กำหนดตัวแปรสำหรับนำเข้าเวลา
  const [modalVisible, setModalVisible] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  
  //การทำงานของสวิช
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  const onPressHandler = () => {}
// ส่วนการแสดงข้อมูล
  const dbRef = ref(getDatabase());
  const database = getDatabase();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [on1, seton1] = useState("");
  const [off1, setoff1] = useState("");
  const [day1, setday1] = useState("");
  const [Status1, setStatus1] = useState("");
  const [on2, seton2] = useState("");
  const [off2, setoff2] = useState("");
  const [day2, setday2] = useState("");
  const [on3, seton3] = useState("");
  const [off3, setoff3] = useState("");
  const [day3, setday3] = useState("");
// ส่วนของการดึงข้อมูลจากตัวแปรต่างๆ
  setInterval(() => {
    get(child(dbRef, `Node2/Zone1/ModeTime/1${username}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
    //    console.log(snapshot.val());
      var test = snapshot.val();
      seton1(test["Time1"]);
      setoff1(test["Time2"]);
      setday1(test["Day"]);
      setStatus1(test["Status"]);

    }
    else {
    //   console.log("No data available");
    }
  })
  .catch((error) => {
    //console.error(error);
  })

},100);
    // สำหรับการแสดงเข็มนาฬิกาเพื่อนำเข้าเวลา
// const showTimePicker = async (type) => {
//     try {
//       const { action, hour, minute } = await TimePickerAndroid.open({
//         hour: 0,
//         minute: 0,
//         is24Hour: true,
//         mode: 'default'
//       });

//       if (action !== TimePickerAndroid.dismissedAction) {
//         const selectedTime = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
//         if (type === 'start') {
//           setStartTime(selectedTime);
//         } else {
//           setEndTime(selectedTime);
//         }
//       }
//     } catch ({ code, message }) {
//       console.warn('Cannot open time picker', message);
//     }
//   };

//   const handleSubmit = () => {
//     console.log('Selected start time:', startTime);
//     console.log('Selected end time:', endTime);
//     setModalVisible(false);
//   };

  const[showModal,setShowModal]=useState(false)
  
  return (
        <ImageBackground
      		source={require('../assets/background50.png')}
      		style={styles.background}
    	>
    <ScrollView>
       
      <View style={globalStyles.container}>
        <TouchableHighlight style={SettingStyles.items3}>
          <View>
            <View style={SettingStyles.container1}>
              <Switch
                trackColor={{ false: "#767577", true: "#00BE00" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View>
              <Image
                source={require("../src/alarm-clock.png")}
                style={SettingStyles.img}
              />
            </View>

            <Text style={SettingStyles.buttonText3}>โหมดตั้งเวลา</Text>
          </View>
        </TouchableHighlight>
      </View>
      
      <TouchableHighlight style={SettingStyles.itemsBtime}
      underlayColor='#00BE00'
       onPress={() => setShowModal(true)}
      >
        <View style={SettingStyles.viewImgTextContainer}>
          
          <SafeAreaView style={ SettingStyles.itemsminandmax} >
						<Text style={ SettingStyles.buttonText3}>{on1}</Text>
      					<Text style={ SettingStyles.t}>เวลาเปิด</Text>

                <Text style={ SettingStyles.t}>{day1}</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={ SettingStyles.itemsminandmax}>
						<Text style={ SettingStyles.buttonText3}>{off1}</Text>
      					<Text style={ SettingStyles.t}>เวลาปิด</Text>
						
    				</SafeAreaView>
            <View style={SettingStyles.container2}>
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
      <TouchableHighlight style={SettingStyles.itemsBtime}>
        <View style={SettingStyles.viewImgTextContainer}>
          
          <SafeAreaView style={ SettingStyles.itemsminandmax} >
						<Text style={ SettingStyles.buttonText3}>16.30</Text>
      					<Text style={ SettingStyles.t}>เวลาเปิด</Text>

                <Text style={ SettingStyles.t}>อ. พฤ.</Text>
						
    				</SafeAreaView>
					<SafeAreaView style={ SettingStyles.itemsminandmax}>
						<Text style={ SettingStyles.buttonText3}>17.00</Text>
      					<Text style={ SettingStyles.t}>เวลาปิด</Text>
						
    				</SafeAreaView>
            <View style={SettingStyles.container2}>
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

      
    </ScrollView>
    <View style={styles.main}>
        <Modal 
        transparent={true}
        visible={showModal}
        animationType="slide"
        
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>สวัสดีฉันมาแล้ว</Text>
                    <Button title="ยกเลิก" onPress={()=>setShowModal(false)}/>
                </View>
            </View>

        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

main:{
    flex:1
},
buttonView:{
    flex:1,
    justifyContent:'flex-end'
},
centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
modalView:{
    backgroundColor:'skyblue',
    padding:30,
    borderRadius:20,
    shadowColor:'#000000',
    elevation:5
},
modalText:{
    fontSize:30,
    marginBottom:20
},
background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
},
  button: {
    marginTop:100,
    marginLeft:150,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#C0C0C0',
    elevation: 8, // เพิ่ม elevation ให้กับปุ่ม
    shadowColor: '#000', // กำหนดสีเงา
   
    shadowOpacity: 0.25, // กำหนดความโปร่งแสงของเงา
    shadowRadius: 3.84, // กำหนดรัศมีของเงา
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

