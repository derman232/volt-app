/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Text } from 'native-base';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Limit saved this month: <Text style={styles.price}>${this.props.saved}</Text></Text>
        <Text style={styles.text}>Points earned this month: <Text style={styles.price}>${this.props.monthPoints}</Text></Text>
        <Text style={{...styles.text, ...styles.tip}}>Earn 1 point per $ spent, redeem for 1c cashback</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 10,
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
});