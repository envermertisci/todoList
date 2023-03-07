import { View, Text } from 'react-native'
import React from 'react'
import index from "./Task"

const index = () => {
  return (
    <View>
      <View style={styles.tasksHead}>
        <Text style={styles.title}>Today's Tasks</Text>

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
    <TextInput style={styles.input}placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)}></TextInput>
    <TouchableOpacity onPress={() => handleAddTask()}>
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
    </KeyboardAvoidingView>

    </View>
    
  )
}

export default index