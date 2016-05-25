/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';



var _ = require('lodash')
class Giphtionary extends Component {


    // let GIPHY_KEY = "dc6zaTOxFJmzC"
constructor(props){
    super(props)
    this.state={
        background: 'https://media.giphy.com/media/lJav8npz16Ocg/giphy.gif',
        cycle: []
    }
    this.changeBackground = this.changeBackground.bind(this);
    this.collectURLS = this.collectURLS.bind(this)
}

    componentDidUpdate(){
        setTimeout(() => {this.changeBackground(this.state.cycle)}, 5000)

    }

    collectURLS(arr){
        let urls = []
        for (i in arr.data){
            let gifURL = _.get(arr.data[i], 'images.original.url')
            urls.push(gifURL)
        }

        return urls
    }

    componentDidMount(){
        let background = ""
        fetch("http://api.giphy.com/v1/gifs/search?q=random&api_key=dc6zaTOxFJmzC", {
            method: "GET"
        })
            .then(function(res){
                return res.json()
            })
            .then((json) => {
                let urls = this.collectURLS(json)
                this.setState({
                    cycle: urls,
                    background: urls[0]
                })
            })
            .catch((error) => {
                console.warn(error)
            })
    }

    changeBackground(arrayOfUrls){
        let index = _.indexOf(arrayOfUrls, this.state.background)
        index === arrayOfUrls.length-1 ?
        (this.setState({
            background: arrayOfUrls[0]
        }) ): (this.setState({
            background: arrayOfUrls[index+1]
        }))


    }

  render() {

    return (

        <Image style={styles.container} source={{uri: this.state.background}} >
            <View style={styles.header}>
                <Text style={styles.welcome}>
                 Giphtionary
                </Text>
            </View>

        </Image>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // remove width and height to override fixed static size
      width: null,
      height: null,
    },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 30,
    backgroundColor: "rgba(0,0,0,0)",
    color: "white"
  },
  header: {
      backgroundColor: "black",
      height: 100,
      alignSelf: 'stretch',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
},
  button: {
      backgroundColor: "green",
      color: "white"
  }
});

AppRegistry.registerComponent('Giphtionary', () => Giphtionary);
