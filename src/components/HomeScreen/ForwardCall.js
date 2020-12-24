import React from 'react';
import { Text } from 'react-native';
import * as Linking from 'expo-linking';

export default class ForwardCall extends React.Component {
  _handlePress = () => {
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <Text {...this.props} onPress={this._handlePress}>
        {this.props.text}
      </Text>
    );
  }
}