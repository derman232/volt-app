/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import PageHeader from './components/Header';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Dashboard from './views/Dashboard';
type Props = {};
export default class App extends Component<Props> {
  state = {page:'apps'}

  render() {
    return (
      <Container>
        <PageHeader 
          saved={67.43}
          monthPoints={23}
        />
        <Content >
          {this.state.page === 'apps' &&
            <Dashboard
              remaining={25}
              total={40}
              balance={135.25}
              dueDate={'9 November 2019'}
            />
          }
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon active name="apps" onPress={()=>{this.setState({page:'apps'})}} />
              <Text>Volt</Text>
            </Button>
            <Button vertical>
              <Icon name="calendar" onPress={()=>{this.setState({page:'calendar'})}} />
              <Text>Limits</Text>
            </Button>
            <Button vertical>
              <Icon name="cash" onPress={()=>{this.setState({page:'cash'})}} />
              <Text>Pay</Text>
            </Button>
            <Button vertical>
              <Icon name="settings" onPress={()=>{this.setState({page:'settings'})}} />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
