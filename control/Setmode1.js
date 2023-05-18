import React, { useState,useEffect } from "react";
// import React, { useEffect } from 'react';
import { View, StyleSheet, Alert, Text, Image,Switch,TouchableHighlight, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'
import { ImageBackground } from 'react-native';
import globalStyles from '../global-styles'
import { sendValueToFirebase, database } from '../firebase/firbase';
import {getDatabase,ref,set,update,onValue,remove,child,get} from "firebase/database";

export default function Setmode1({ route, navigation }){
	const [Time_m1, setIsEnabled] = useState();

const toggleSwitch = () => {
  setIsEnabled((previousState) => {
    setIsEnabled1(false);
    setTest1("Time mode");
    update(child(dbRef, `Node1/Zone1${username}`), { Time_m1: !previousState }); // เปลี่ยนค่า Time_m1 ในฐานข้อมูล
    return !previousState;
  });
};

const [Sensor_m1, setIsEnabled1] = useState(false);
const toggleSwitch1 = () => {
  setIsEnabled1((previousState) => {
    setIsEnabled(false);
    setTest1("Sensor mode");
    update(child(dbRef, `Node1/Zone1${username}`), { Sensor_m1: !previousState }); // เปลี่ยนค่า Sensor_m1  ในฐานข้อมูล
    return !previousState;
  });
};

const dbRef = ref(getDatabase());
const [username, setName] = useState("");
const [email, setEmail] = useState("");
const [mode, setTest1] = useState("Normal mode");

useEffect(() => {
  const intervalId = setInterval(() => {
    get(child(dbRef, `Node1/Zone1${username}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          var test = snapshot.val();
          if (Time_m1) {
            setIsEnabled1(false);
            setTest1("Time mode");
          } else if (Sensor_m1) {
            setIsEnabled(false);
            setTest1("Sensor mode");
          } else {
            setTest1("Normal mode");
          }
        }
      })
      .catch((error) => {});
  }, 100);

  // Reset mode to "Normal mode" when both isEnabled and isEnabled1 are false
  if (!Time_m1 && !Sensor_m1) {
    setTest1("Normal mode");
  }

  return () => clearInterval(intervalId);
}, [Time_m1, Sensor_m1, username]);

  
return(
	<ImageBackground
  source={require("../assets/background50.png")}
  style={styles.background}
>
  <View style={globalStyles.container}>
    <TouchableHighlight style={[styles.items]}>
      <View style={styles.viewImgTextContainer}>
        <Text style={styles.buttonText}>{mode}</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight
      style={[styles.items3]}
      underlayColor="#00BE00"
      onPress={() => navigation.navigate("Timemode1")}
    >
      <View>
        <View style={styles.container1}>
          <Switch
            trackColor={{ false: "#767577", true: "#00BE00" }}
            thumbColor={Time_m1 ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={Time_m1}
          />
        </View>

        <View>
          <Image
            source={require("../src/alarm-clock.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.buttonText3}>โหมดตั้งเวลา</Text>
      </View>
    </TouchableHighlight>
    {/* ส่วนโหมดเซ็นเซอร์ */}
    <View style={[styles.items3]}>
      <TouchableHighlight
        underlayColor="#00BE00"
        onPress={() => navigation.navigate("Sensormode1")}
      >
        <View>
          <View style={styles.container1}>
            <Switch
              trackColor={{ false: "#767577", true: "#00BE00" }}
              thumbColor={Sensor_m1 ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={Sensor_m1}
            />
          </View>
          
          <Image
            source={require("../src/soil-analysis.png")}
            style={styles.img}
          />
          <Text style={styles.buttonText3}>โหมดเซ็นเซอร์</Text>
        </View>
      </TouchableHighlight>
    </View>
    {/* ส่วนอื่นๆ จะเขียนเช่นเดียวกัน */}
  </View>
</ImageBackground>


);

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50
	},
	container1: {
		flex: 1,
	  },
	  container2: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	  },
	items: {
		width: 150,
		height: 45,
        // marginTop:20,
        marginLeft:90,
        marginRight:90,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: '#80cbc4'
	},
    items1:{
        marginBottom: 15
    },
	buttonText: {
		fontSize: 20,
		color: '#ffffff'
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
        marginTop:20,
        marginLeft:20,
		width: 150,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 20,
		backgroundColor: '#AED6F1'
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
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 15,
	  },

})