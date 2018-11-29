import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';

import {
  getCurrentUserData,
  getAllCategories,
  getAllRecommendedItems,
  getLikedItems,
  getUserFriends
} from '../actions';

class SignInScreen extends React.Component {

  componentDidMount() {
    // For testing only
    this.props.getCurrentUserData();
    this.props.getAllCategories();
    this.props.getAllRecommendedItems();
    this.props.getLikedItems();
    this.props.getUserFriends();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>THIS IS THE SIGN IN SCREEN</Text>
        <Button title="Next" onPress={() => navigate('CategoriesScreen')} />
        <Button
          title="Home"
          onPress={() => {
            navigate('HomeScreen');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// state.pages.signIn.user -> 1400
// const mapStateToProps = state => ({
//   user: state.entities.users[state.pages.signIn.user],
//   categories: state.pages.signIn.categories.map(id => (
//     state.entites.categories[id]
//   ))
// });

const mapDispatchToProps = dispatch => ({
  getCurrentUserData: () => dispatch(getCurrentUserData(2)),
  getAllCategories: () => dispatch(getAllCategories()),
  getAllRecommendedItems: () => dispatch(getAllRecommendedItems(2)),
  getLikedItems: () => dispatch(getLikedItems(2)),
  getUserFriends: () => dispatch(getUserFriends(2))
});

export default connect(
  null,
  mapDispatchToProps
)(SignInScreen);
