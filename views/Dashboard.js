/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Header, Content, Text } from 'native-base';
import { ProgressCircle }  from 'react-native-svg-charts'

export default class Dashboard extends Component {
  render() {

    const screenWidth = Dimensions.get("window").width;
    const screenHeight= Dimensions.get('window').height;
    return (
      <View style={{...styles.container, height: screenHeight}}>

        <View style={styles.center}>
          <View style={styles.circle}>
            <ProgressCircle
              style={ {paddingTop: 50, height: 200 } }
              progress={ 0.3 }
              progressColor={'rgb(255, 87, 34)'}
              strokeWidth={10}
            />
          </View>
        </View>
        <View transform={[{translateY:'-200'}]}>
        <View style={styles.numbers} transform={[{translateY:'-40'}]}>
          <Text style={{fontSize: 40, ...styles.price}}>${this.props.remaining}</Text>
          <Text style={{marginTop: 20, color: '#BDBDBD' }}>Remaining Today</Text>
          <Text style={{marginTop: 60, color: 'rgb(255, 87, 34)'}}>${this.props.total} Total</Text>
        </View>
        <View style={styles.summary_container}>
          <View style={styles.summary}>
            <View style={styles.i}>
              <Text style={styles.info}>Current Balance:</Text>
              <Text style={styles.number}>${this.props.balance}</Text>
            </View>

            <View style={styles.i}>
              <Text style={styles.info}>Next Due Date:</Text>
              <Text style={styles.number}>{this.props.dueDate}</Text>
            </View>
            <Text style={styles.link}>View transactions ></Text>
          </View>
        </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
circle: {
  backgroundColor: '#ffffff',
  height: 300,
  width: '100%',
  borderRadius: 30
},
center: {
  padding: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
},
container: {
  backgroundColor: '#F5F5F5',
  height: '100%'
},
link: {
  color: 'rgb(255, 87, 34)',
  textAlign: 'right',
  paddingTop: 10,
  fontSize: 13
},
i: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
},
info: {
  lineHeight: 30,
  color: '#757575',
  fontWeight: "500",
},
number: {
  color: '#1E88E5',
},
summary_container: {
  marginTop: 50,
  display: 'flex',
  alignItems: 'center',
},
summary: {
  backgroundColor: 'white',
  width: "90%",
  // height: "100%",
  height: 130,
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 10,
  padding: 20
},  
header: {
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 5,
  paddingBottom: 5,
  borderBottomWidth: 1,
  borderBottomColor: '#BDBDBD'
},
text: {
  color: '#9E9E9E',
  fontSize: 13
},
tip: {
  fontStyle: 'italic'
},
price: {
  color: '#8BC34A'
},
numbers: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}


});