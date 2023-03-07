import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';



export default function App() {
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAddTask = () => {

    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null)
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksHead}>
        <Text style={styles.title}>Yapılacaklar</Text>

        <View style={styles.items}>
          {
          taskItems.map((item,index) => {
              return (
                <TouchableOpacity  key={index}  onPress={() => completeTask(index)}>
                  <Task text={item}/>

                </TouchableOpacity>
              )
              
          })}
          
          
        </View>
      </View>

    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTask}
    >
    <TextInput style={styles.input}placeholder={"Görev Oluşturun"} value={task} onChangeText={text => setTask(text)}></TextInput>
    <TouchableOpacity onPress={() => handleAddTask()}>
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
    </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  tasksHead:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  title:{
    fontSize:24,
    fontWeight:"bold"

  },
  items:{
    marginTop:30,

  },
    writeTask : {
      position:"absolute",
      bottom:60,
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"

    },
  input : {
      paddingVertical:15,
      paddingHorizontal:15,
      backgroundColor:"white",
      borderRadius:60,
      borderColor:"#C0C0C0",
      borderWidth:1,
      width:250,
    },
  addWrapper : {
      width:60,
      height:60,
      backgroundColor:"#FFF",
      borderRadius:60,
      justifyContent:"center",
      alignItems:"center",
      borderColor:"#C0C0C0",
      borderWidth:1,
      
  },
  addText : {
      
  },
    
});
