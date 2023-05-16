import React, { useState,useEffect } from "react";
import {View,ScrollView,SafeAreaView,Switch,StyleSheet, Alert,Text,Image,TextInput,TouchableHighlight} from "react-native";
import { color } from "react-native-reanimated";
import {  Button, TouchableOpacity, Modal, TimePickerAndroid } from 'react-native';
import {getDatabase,ref,set,update,onValue,remove,child,get} from "firebase/database";
import database from '../firebase/firbase'
import '@react-native-firebase/database';
import DropDownPicker from 'react-native-dropdown-picker';
import { Platform } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import DateTimePickerModal from "react-native-modal-datetime-picker"
import dayjs from "dayjs";
import { ImageBackground } from 'react-native';
import globalStyles from "../global-styles";
import SettingStyles from "../Setting-Styles";

// import { fonts } from "react-native-elements/dist/config";
import { sendValueToFirebase, } from '../firebase/firbase';

export default function Timemode1({ route, navigation }) {


  // const MyComponent = () => {
  //   const [time1, setTime1] = useState('');
  //     const [time2, setTime2] = useState('')}

//   const [number, onChangeNumber] = React.useState(null);
//   const [number1, onChangeNumber1] = React.useState(null);
//   const [number2, onChangeNumber2] = React.useState(null);
//   const [number3, onChangeNumber3] = React.useState(null);
//   const [number4, onChangeNumber4] = React.useState(null);
//   const [number5, onChangeNumber5] = React.useState(null);
// // กำหนดตัวแปรสำหรับนำเข้าเวลา
//   const [modalVisible, setModalVisible] = useState(false);
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);
  
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
  // const [email, setEmail] = useState("");
  const [on1, seton1] = useState("");
  const [off1, setoff1] = useState("");
  const [day1, setday1] = useState("");
  const [Status1, setStatus1] = useState("");
  const [on2, seton2] = useState("");
  const [off2, setoff2] = useState("");
  const [day2, setday2] = useState("");
  const [Status2, setStatus2] = useState("");
  // const [on3, seton3] = useState("");
  // const [off3, setoff3] = useState("");
  // const [day3, setday3] = useState("");
// ส่วนของการดึงข้อมูลจากตัวแปรต่างๆ
useEffect(() => {
  // ดึงข้อมูล ModeTime จากฐานข้อมูล
  get(child(dbRef, `Node1/Zone1/ModeTime/1${username}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      seton1(data["Time11_1"]);
      setoff1(data["Time11_2"]);
      setday1(data["Day11_1"]);
      setStatus1(data["Status11_1"]);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  get(child(dbRef, `Node1/Zone1/ModeTime/2${username}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      seton2(data["Time11_3"]);
      setoff2(data["Time11_4"]);
      setday2(data["Day11_2"]);
      setStatus2(data["Status11_2"]);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}, []);


// const [showModal, setShowModal] = useState(false);
//   const [Time1, setTime1] = useState(new Date());
//   const [Time2, setTime2] = useState(new Date());

  // function onChangeTime1(event, selectedTime) {
  //   const currentTime = selectedTime || Time1;
  //   setShowModal(Platform.OS === 'ios');
  //   setTime1(currentTime);
  // }

  function onChangeTime2(event, selectedTime) {
    const currentTime = selectedTime || Time2;
    setShowModal(Platform.OS === 'ios');
    setTime2(currentTime);
  }

  // const [selectedDay, setSelectedDay] = useState('Sunday');
  const [showModaltime1, setShowModaltime1] = useState(false);
  const [Time11_1, setTime1] = useState('');
  const [Time11_2, setTime2] = useState('');
  const [Day11_1, selectedDay11_1] = useState('');
  

  function updateDatatime1() {
    const path = `Node1/Zone1/ModeTime/1${String(username)}`;
    const db = getDatabase();
    const dbRef = ref(db, path);
    update(dbRef, {
      Time11_1: Time11_1,
      Time11_2: Time11_2,
      Day11_1: Day11_1
    })
    .then(() => {
      alert("Data updated!");
      setShowModaltime1(false);
    })
    .catch((error) => {
      alert(error);
    });
  }
  const [showModaltime2, setShowModaltime2] = useState(false);
  const [Time11_3, setTime3] = useState('');
  const [Time11_4, setTime4] = useState('');
  const [Day11_2, selectedDay11_2] = useState('');

  function updateDatatime2() {
    const path = `Node1/Zone1/ModeTime/2${String(username)}`;
    const db = getDatabase();
    const dbRef = ref(db, path);
    update(dbRef, {
      Time11_3: Time11_3,
      Time11_4: Time11_4,
      Day11_2: Day11_2
    })
    .then(() => {
      alert("Data updated!");
      setShowModaltime2(false);
    })
    .catch((error) => {
      alert(error);
    });
  }
  // const[showModal,setShowModal]=useState(false)
  
  return (
        <ImageBackground
      		source={require('../assets/background50.png')}
      		style={styles.background}
    	>
    <ScrollView>
       
      <View style={globalStyles.container}>
        <TouchableHighlight style={SettingStyles.items3}>
          <View>
            {/* <View style={SettingStyles.container1}>
              <Switch
                trackColor={{ false: "#767577", true: "#00BE00" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View> */}
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
       onPress={() => setShowModaltime1(true)}
      >
        
        <View style={SettingStyles.viewImgTextContainer}>
          <SafeAreaView style={ SettingStyles.itemsminandmax} >
						<Text style={ SettingStyles.buttonText3}>{on1}</Text>
      					<Text style={ SettingStyles.t}>เวลาเปิด</Text>
                <View>
          </View>
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
      <TouchableHighlight
          underlayColor='#00BE00'
          onPress={() => setShowModaltime2(true)}
      style={SettingStyles.itemsBtime}>
        <View style={SettingStyles.viewImgTextContainer}>
          
          <SafeAreaView style={ SettingStyles.itemsminandmax} >
						<Text style={ SettingStyles.buttonText3}>{on2}</Text>
      					<Text style={ SettingStyles.t}>เวลาเปิด</Text>
            </SafeAreaView>
            <Text style={ SettingStyles.t}>{day2}</Text>
					<SafeAreaView style={ SettingStyles.itemsminandmax}>
						<Text style={ SettingStyles.buttonText3}>{off2}</Text>
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
        visible={showModaltime1}
        animationType="slide"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>ตั้งเวลาเปิดปิด</Text>
            <View>
              <Text style={styles.text}>เวลาเปิด</Text>
              <TextInput
                value={Time11_1}
                onChangeText={setTime1} // Updated this line
                style={SettingStyles.input}
                placeholder="เวลาเปิด"
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={styles.text}>เวลาปิด</Text>
              <TextInput
                value={Time11_2}
                onChangeText={setTime2} // Updated this line
                style={SettingStyles.input}
                placeholder="เวลาปิด"
                keyboardType="numeric"
              />
            </View>
            <View>
            <Text style={styles.text}>วันที่</Text>
            <DropDownPicker
              items={[
                {label: 'Mo', value: 'Mo'},
                {label: 'Tu', value: 'Tu'},
                {label: 'We', value: 'We'},
                {label: 'Th', value: 'Th'},
                {label: 'Fr', value: 'Tu'},
                {label: 'Sa', value: 'Sa'},
                {label: 'Su', value: 'Su'},
                // เพิ่มเองตามต้องการ
              ]}
              defaultValue={Day11_1}
              containerStyle={{height: 40}}
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 15,
                color: '#000066',
                backgroundColor: '#AED6F1', // เปลี่ยนสีพื้นหลังของ DropDownPicker
              }}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#AED6F1'}}
              onChangeItem={(item) => selectedDay11_1(item.value)}
            />
    </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setShowModaltime1(false)}
              >
                <Text style={styles.buttonText}>ยกเลิก</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={updateDatatime1}
              >
                <Text style={styles.buttonText}>ยืนยัน</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>

    {/* ตั้งเวลาอันที่2 */}
    <View style={styles.main}>
      <Modal 
        transparent={true}
        visible={showModaltime2}
        animationType="slide"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>ตั้งเวลาเปิดปิด</Text>
            <View>
              <Text style={styles.text}>เวลาเปิด</Text>
              <TextInput
                value={Time11_3}
                onChangeText={setTime3} // Updated this line
                style={SettingStyles.input}
                placeholder="เวลาเปิด"
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={styles.text}>เวลาปิด</Text>
              <TextInput
                value={Time11_4}
                onChangeText={setTime4} // Updated this line
                style={SettingStyles.input}
                placeholder="เวลาปิด"
                keyboardType="numeric"
              />
            </View>
            <View>
            <Text style={styles.text}>วันที่</Text>
            <DropDownPicker
              items={[
                {label: 'Mo', value: 'Mo'},
                {label: 'Tu', value: 'Tu'},
                {label: 'We', value: 'We'},
                {label: 'Th', value: 'Th'},
                {label: 'Fr', value: 'Tu'},
                {label: 'Sa', value: 'Sa'},
                {label: 'Su', value: 'Su'},
                // เพิ่มเองตามต้องการ
              ]}
              defaultValue={Day11_1}
              containerStyle={{height: 40}}
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 15,
                color: '#000066',
                backgroundColor: '#AED6F1', // เปลี่ยนสีพื้นหลังของ DropDownPicker
              }}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#AED6F1'}}
              onChangeItem={(item) => selectedDay11_2(item.value)}
            />
    </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setShowModaltime2(false)}
              >
                <Text style={styles.buttonText}>ยกเลิก</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={updateDatatime2}
              >
                <Text style={styles.buttonText}>ยืนยัน</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor:'#AED6F1',
    padding:30,
    width:300,
    borderRadius:20,
    shadowColor:'#000000',
    elevation:5
},
modalText: {
    fontSize: 30,
    marginBottom: 20,
    color: "#ffffff",
    fontWeight: 'bold',
  },
background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
},
button: {
  borderRadius: 25,
  paddingHorizontal: 25,
  paddingVertical: 10,
},
cancelButton: {
  backgroundColor: '#cc0033',
  marginRight: 10,
},
confirmButton: {
  backgroundColor: '#87B26A',
  marginLeft: 10,
},
buttonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: 'bold',
},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  text: {
    fontSize: 22,
    // fontWeight: 'bold',
    color: '#000066',
  },
});

