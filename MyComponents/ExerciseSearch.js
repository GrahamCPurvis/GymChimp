import React, { Component } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Card } from 'react-native-shadow-cards';
import { DATA } from '../localStore/ListOfExercises';


const Item = ({ title, imgSource }) => {
return (
	<TouchableHighlight  onPress={()=>alert("hello")}>
	<Card style={styles.card} onClick={()=>alert("hello")}>
		<Image source={imgSource}/>
    	<Text style={{color:'#EFB905', fontSize: 30, justifyContent: 'center'}}>{title}</Text>
  	</Card>
  	</TouchableHighlight>
);
};

const renderItem = ({ item }) => <Item title={item.title} imgSource={item.imgSource} />;

class Search extends Component {
constructor(props) {
	super(props);
	this.state = {
	loading: false,
	data: DATA,
	error: null,
	searchValue: "",
	};
	this.arrayholder = DATA;
}

searchFunction = (text) => {
	const updatedData = this.arrayholder.filter((item) => {
	const item_data = `${item.title.toUpperCase()})`;
	const text_data = text.toUpperCase();
	return item_data.indexOf(text_data) > -1;
	});
	this.setState({ data: updatedData, searchValue: text });
};

render() {
	return (
	<View style={styles.container}>
		<SearchBar
		placeholder="ie: Bench Press"
		darkTheme
		value={this.state.searchValue}
		onChangeText={(text) => this.searchFunction(text)}
		autoCorrect={true}
		/>
		<FlatList
		data={this.state.data}
		renderItem={renderItem}
		keyExtractor={(item) => item.id}
		/>
	</View>
	);
}
}

export default Search;

const styles = StyleSheet.create({
container: {
	marginTop: 0,
    marginBottom: '38%',
	padding: 0,
},
navBar: {
	backgroundColor: "#EFB905",
	padding: 20,
	marginVertical: 0,
	marginHorizontal: 0,
},
title: {
    color: '#FFF',
},
statusBar: {
    backgroundColor: '#EFB905',
},
image: {
    width: 30,
	marginBottom: 15,
},
card: {
    width: '100%', 
    padding: 10, 
    margin: 0, 
    opacity: 1, 
    backgroundColor: '#695645', 
    borderWidth: 5, 
    borderColor: '#2B2118',
    alignItems: 'center',
	flexDirection: 'row',
	borderRadius: 0
  },
});
