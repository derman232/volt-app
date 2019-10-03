/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Dimensions } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {
  ProgressChart,
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header />
        <ProgressChart
          data={{
            data: [0.4]
          }}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundColor: "#ffffff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
        />

        <Content />
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon active name="apps" />
              <Text>Volt</Text>
            </Button>
            <Button vertical>
              <Icon name="calendar" />
              <Text>Limits</Text>
            </Button>
            <Button vertical>
              <Icon name="cash" />
              <Text>Pay</Text>
            </Button>
            <Button vertical>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
