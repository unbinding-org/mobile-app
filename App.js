import React from 'react'
import { Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Wow!</Text>  
        <Button
          onPress={() => navigate('Timer')}
          title="Timer"
        />
      </View>
    )
  }
}

class TimerScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>60 seconds left.</Text>
      </View>
    )
  }
}

export default StackNavigator({
  Home: { screen: HomeScreen },
  Timer: { screen: TimerScreen }
})