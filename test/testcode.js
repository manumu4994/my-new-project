// import AddItem from './test/Test';
// import AddItems from './test/AddItem';
// const [count, setCount] = useState(0);
const [enteredText, setEnteredText] = useState('');
const [showText, setShowText] = useState([]);
const [addMode, setAddMode] = useState(false);
const inputHandler = (inputText) => {
  setEnteredText(inputText);
};
const pressHandler = () => {
  // console.log(enteredText);
  setShowText(currentState => [...currentState, { id: Math.random().toString(), value: enteredText }]);
  setAddMode(false);
};
// const removeHandler = () => {
//   // console.log(enteredText);
//   setShowText(currentState => {
//     return currentState.filter((item) => item.id === id);
//   });
// };
const cancelPressHandler = () => {
  // console.log(enteredText);
  setAddMode(false);
};
// const pan = useRef(new Animated.ValueXY()).current;
// const panResponder = useRef(
//   PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderMove: Animated.event([
//       null,
//       { dx: pan.x, dy: pan.y }
//     ]),
//     onPanResponderRelease: () => {
//       Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
//     }
//   })
// ).current;
// const images = [
//   "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
//   "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
//   "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
//   "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
//   "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
//   "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
// ];
// const scrollX = useRef(new Animated.Value(0)).current;
// const { width: windowWidth } = useWindowDimensions();

<Text>Open up App.js to start working on your test1234</Text>
  <Text>Second line</Text>
  <Button title="Try Modal" onPress={() => setAddMode(true)} />
  <Modal animationType="slide" visible={addMode}>
    <View style={styles.inputContainer}>
      <TextInput placeholder="type something"
        style={styles.input}
        onChangeText={inputHandler}
        value={enteredText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Click Me" onPress={pressHandler} style={styles.button} />
        </View>
        <View style={styles.button}>
          <Button title="Cancel" color="red" onPress={cancelPressHandler} style={styles.button} />
        </View>
      </View>
    </View>
  </Modal>
  <View>
    {/*
    // showText จะ map ไปที่ goal โดยที่ showText เกิดจากการเซ็ตค่าด้วย setShowText ใน pressHandler ที่รับค่า enteredText มาใส่ค่า และแสดงผลใน goal
    // ใส่ key เพื่อให้ไม่เกิด error ฟ้องว่า Each child in a list should have a unique "key"
  } */}
    <FlatList
      // keyExtractor ไว้ใช้เรียกใน pressHandler เมื่อมีการตั้งชื่อใหม่ให้ key ในที่นี้เป็นชื่อ id 
      keyExtractor={(item, index) => item.id}
      data={showText}
      renderItem={itemData => (
        <TouchableOpacity>
          <View style={styles.inputText} >
            <Text>{itemData.item.value}</Text>
          </View>
        </TouchableOpacity>
      )}
    //  renderItem={itemData => <AddItems input={itemData.item.value} />}
    />
  </View>

,
inputContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},
input: {
  width: '60%',
  borderColor: 'black',
  borderWidth: 1
},
buttonContainer: {
  flexDirection: "row",
  justifyContent: "space-around",
  width: '60%'
},
button: {
  width: '40%',
},
inputText: {
  padding: 10,
  marginVertical: 10,
  backgroundColor: 'grey',
  borderColor: 'black',
  borderWidth: 1
},
imagesize: {
  width: 300,
  height: 400,
  justifyContent: "flex-end",
  alignItems: "flex-end",
  alignContent: "flex-end"
},
inputRandom: {
  padding: 30,
  flexDirection: 'column',
  alignItems: "flex-start"
},
box: {
  padding: 30,
  height: 150,
  width: 150,
  backgroundColor: "blue",
  borderRadius: 5,
  justifyContent: "space-between",
  alignItems: "center"
},
container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
},
scrollContainer: {
  height: 300,
  alignItems: "center",
  justifyContent: "center"
}, card: {
  flex: 1,
  marginVertical: 4,
  marginHorizontal: 16,
  borderRadius: 5,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center"
},
textContainer: {
  backgroundColor: "rgba(0,0,0, 0.7)",
  paddingHorizontal: 24,
  paddingVertical: 8,
  borderRadius: 5
},
infoText: {
  color: "white",
  fontSize: 16,
  fontWeight: "bold"
},
normalDot: {
  height: 8,
  width: 8,
  borderRadius: 4,
  backgroundColor: "silver",
  marginHorizontal: 4
},
indicatorContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
}