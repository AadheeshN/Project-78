import * as React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet, FlastList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import firebase from 'firebase';
import db from 'config';

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      allBooks: [],
    }
    this.requestRef = null;
  }

  reviveStories = async() => {
    const query = db.collection('books').get()
    query.docs.map((doc)=> {
      this.setState({
          allBooks: [...this.state.allBooks, doc.data()]
      })
    })
  }

  updateSearch = (search) => {
    var enteredText = text.split('');
    
  };

  keyExtractor = (item, index) =>  index.toString();

  renderItem = ( {item, i} )  => {
    return(
      <ListItem 
      key ={i}
      title = {item.bookName}
      subtitle = {item.author}
      titleStyle = {{ color : 'black', fontWeight: 'bold' }}
      bottomdivider
      />
    )
  }

  render() {
    const { search } = this.state;

    return (
      <KeyboardAvoidingView>
        <View style = {{marginTop: 5, flex: 0.9}}>
          <View style = {styles.searchBar}>
        <TextInput 
          style = {styles.bar}
          placeholder = 'Search for Stories Here'
          onChangeText = { (text) => (this.setState({search: text}))}
        />
          </View>
        <TouchableOpacity styles = {styles.searchButton} onPress = {() => {this.updateSearch(this.state.search)}}>
            <Text>Search</Text>
        </TouchableOpacity>
        {/* <ScrollView>
          { this.state.allBooks.map((bookName) => {
            return (
              <View>
                <Text>{allBooks.bookName}</Text>
              </View>
            )
          }) }
        </ScrollView> */}
          <FlatList 
            keyExtractor = {this.keyExtractor}
            data = {this.state.allBooks}
            renderItem = {this.renderItem}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = styleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  searchBar: {
    flexDirection: 'row',
    height: 40,
    width: 'auto',
    borderWidth: 0.5,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  bar: {
    borderWidth: 2,
    height: 30,
    width: 300,
    paddingLeft: 10,
  },
  searchButton: {
    borderWidth: 1,
    height: 30,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  }
})