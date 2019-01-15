import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Home extends Component {
    _onPress = () => {
        this.props.navigation.navigate("Login")
    }
    render() {
        return (
            <View style={style.continer}>
                <Text>Home</Text>
                <Button title="Ir al login" onPress={this._onPress} />
            </View>
        )
    }
}
const style = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    }
})
export default Home;