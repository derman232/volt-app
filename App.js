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
import Calender from './views/Calender';
import Cash from './views/Cash';

type Props = {};
export default class App extends Component<Props> {
  state = {page:'cash'}

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
          {this.state.page === 'calendar' &&
            <Calender
              data={[40,40,40,50,60,50,50]}
              currentLimit={'$60'}
              newLimit={'40'}
              savedLimitSpend={'-$630'}
              pointsSpent={'-1'}
              updatedLimit={'$47.43'}
              updatedPoints={'22'}
            />
          }
          {this.state.page === 'cash' &&
          <Cash
            data={[40,40,40,50,60,50,50]}
            currentLimit={'$60'}
            newLimit={'40'}
            savedLimitSpend={'-$630'}
            pointsSpent={'-1'}
            updatedLimit={'$47.43'}
            updatedPoints={'22'}
          />
        }
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active={this.state.page==='apps'}>
              <Icon active={this.state.page==='apps'} name="apps" onPress={()=>{this.setState({page:'apps'})}} />
              <Text>Volt</Text>
            </Button>
            <Button vertical active={this.state.page==='calendar'}>
              <Icon active={this.state.page==='calendar'} name="calendar" onPress={()=>{this.setState({page:'calendar'})}} />
              <Text>Limits</Text>
            </Button>
            <Button vertical active={this.state.page==='cash'}>
              <Icon active={this.state.page==='cash'} name="cash" onPress={()=>{this.setState({page:'cash'})}} />
              <Text>Pay</Text>
            </Button>
            <Button vertical active={this.state.page==='settings'}>
              <Icon active={this.state.page==='settings'} name="settings" onPress={()=>{this.setState({page:'settings'})}} />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
