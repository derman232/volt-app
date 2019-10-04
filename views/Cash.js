/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import * as Native from 'native-base';

export default class Cash extends Component {
  state = {
    pay: '100'
  }
  render() {
    const screenHeight= Dimensions.get('window').height;
    return (
      <View style={{...styles.container, height: screenHeight}}>
        <View style={styles.box}>
          <Native.Text>
            To avoid late fees pay by 9 November
          </Native.Text>
        </View>
        <View style={styles.box}>
          <Native.Text style={{fontSize: 30, color:'#43A047'}}>Pay</Native.Text>
          <Native.Text
            // value={'100'}
            // onChangeText={pay=>this.setState({pay})}
            style={{fontSize: 40, padding: 20, marginTop: 10, backgroundColor: '#e5e5e5'}}
          >
            $100
          </Native.Text>
          <View style={styles.metric}>
            <Native.Text>Remaining Balance</Native.Text>
            <Native.Text style={{color:'#1E88E5'}}>$35.25</Native.Text>
          </View>
          <View style={styles.metric}>
            <Native.Text>Estimated Charges</Native.Text>
            <Native.Text>$0.50</Native.Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.metric2}>
            <Native.Text>Payment Date</Native.Text>
            <Native.Text>Pay From</Native.Text>
          </View>

          <View style={styles.metric2}>
            <Native.Text style={{color:'#1E88E5'}}>Today</Native.Text>
            <Native.Text style={{color:'#1E88E5'}}>Savings... 4321</Native.Text>
          </View>
        </View>
        <Native.Button style={{margin: 10}}>
          <Native.Text>Pay My Account</Native.Text>
        </Native.Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
container: {
  backgroundColor: '#f5f5f5',
  height: '100%',
},
metric: {
  display: 'flex',
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 50
},
metric2: {
  display: 'flex',
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 30
},
box: {
  backgroundColor:'white',
  borderRadius: 8,
  padding: 8,
  marginLeft: 10,
  marginRight: 10,
  marginTop: 5,
  marginBottom: 5
}
});