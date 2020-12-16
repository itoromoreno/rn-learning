import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

import { connect } from 'react-redux';
import ListItem from './components/ListItem';
import { addAccount } from './actions/account';

class App extends Component {

  state = {
    ownerName: '',
    accounts: []
  }

  accountSubmitHandler = () => {
    if (this.state.ownerName.trim() === '') {
      return;
    }
    this.props.add(this.state.ownerName);
  }

  accountNameHandler = (value) => {
    this.setState({
      ownerName: value
    })
  }

  accountsOutput = () => {
    return (
      <FlatList style={styles.listContainer}
        data={this.props.accounts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          info => (
            <ListItem
              ownerName={info.item.value}
            />
          )
        }
      />
    )
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Insert account owner"
            style={styles.placeInput}
            onChangeText={this.accountNameHandler}
          ></TextInput>
          <Button title='Add'
            style={styles.placeButton}
            onPress={this.accountSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>
          {this.accountsOutput()}
        </View>
      </View>)
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    accounts: state.accounts.accounts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addAccount(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
