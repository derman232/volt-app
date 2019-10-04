/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import * as  Native from 'native-base';
import { BarChart, Grid } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

export default class Calender extends Component {
  state = {
    limit: this.props.newLimit
  }
  render() {

    const screenHeight= Dimensions.get('window').height;
    const data = (this.props.data) ? this.props.data :[40,40,40,50,60,50,50];
    const CUT_OFF = 20
    const Labels = ({ x, y, bandwidth, data }) => {
        return data.map((value, index) => (
            <Text
                key={ `${index}_1` }
                x={ x(index) + (bandwidth / 2) - 6 }
                y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                fontSize={ 12 }
                fill={ value >= CUT_OFF ? 'white' : 'black' }
                alignmentBaseline={ 'middle' }
                textAnchor={ 'middle' }
            >
                $ {value}
            </Text>
        ))
    }

    const dataa = ['S','M','T','W','T','F','S']
    const Days = ({ x, y, bandwidth, data }) => {
      return dataa.map((value, index) => (
        <Text
            key={ `${index}_1` }
            x={ x(index) + (bandwidth / 2)}
            y={ y(0) + 10 }
            fontSize={ 12 }
            fill={ value >= CUT_OFF ? '#9E9E9E' : '#9E9E9E' }
            alignmentBaseline={ 'middle' }
            textAnchor={ 'middle' }
        >
          {value}
        </Text>
      ))
    }
    
    const getColor = (s) => {
      const v = s.split('$')
      return (v[0].length > 0) ? styles.red : styles.blue
    }
    const getColor2 = (s) => {
      return (parseInt(s) < 0) ? styles.red : styles.blue
    }

    return (
      <View style={{...styles.container, height: screenHeight}}>
        <View style={{ flexDirection: 'row', height: 200, padding: 18, paddingBottom: 30  }}>
          <BarChart
              style={{ flex: 1, paddingBottom: 20, height:220}}
              data={data}
              svg={{ fill: 'rgb(255, 87, 34)' }}
              contentInset={{ top: 10, bottom: 30 }}
              // spacing={0}
              spacingInner={0.4}
              spacingOuter={0.2}
              gridMin={0}
          >
              <Grid direction={Grid.Direction.HORIZONTAL}/>
              <Labels />

              <Days />
          </BarChart>
        </View>

        <View style={{margin: 20, backgroundColor: 'white', borderRadius: 8}}>
          <View style={styles.row}>
            <Native.Text>Current Limit</Native.Text>
            <Native.Text style={getColor(this.props.currentLimit)}>{this.props.currentLimit}</Native.Text>
          </View>
          <View style={styles.row}>
            <Native.Text>New Limit</Native.Text>
            <Native.Input
              value={this.state.limit}
              onChangeText={limit=>this.setState({limit})}
              style={{...styles.blue, ...styles.input}}
            />
          </View>
          <View style={styles.row}>
            <Native.Text>Saved limit spend</Native.Text>
            <Native.Text style={getColor(this.props.savedLimitSpend)}>{this.props.savedLimitSpend}</Native.Text>
          </View>
          <View style={styles.row}>
            <Native.Text>Points spent</Native.Text>
            <Native.Text style={getColor2(this.props.pointsSpent)}>{this.props.pointsSpent}</Native.Text>
          </View>
          <View style={styles.row}>
            <Native.Text>Updated Limit Balance</Native.Text>
            <Native.Text style={getColor(this.props.updatedLimit)}>{this.props.updatedLimit}</Native.Text>
          </View>
          <View style={styles.row}>
            <Native.Text>Updated Points Balance</Native.Text>
            <Native.Text style={getColor2(this.props.updatedPoints)}>{this.props.updatedPoints}</Native.Text>
          </View>
        </View>

        <View style={styles.button}>
          <Native.Button>
              <Native.Text>Update Limit</Native.Text>
          </Native.Button>
        </View>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
container: {
  backgroundColor: '#F5F5F5',
  height: '100%'
},
input :{
  width: 10,
  textAlign: "right",
},
row : {
  borderBottomColor: '#f5f5f5',
  borderBottomWidth:1,
  padding: 3,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: 'center',
  paddingLeft: 20,
  paddingRight: 20,
  height: 40
},
blue: {
  color: '#2196F3'
},
red:{
 color: '#E53935'
},
button: {
  marginLeft: '5%',
  marginRight:'5%',
  width: '90%',

}
});
