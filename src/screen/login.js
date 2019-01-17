import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Login extends Component {
    _onPress = () => {
        this.props.navigation.navigate("About")
    }
    render() {
        return (
            <View style={style.continer}>
                <Text>Login </Text>
                <Button title="Ir al ABout" onPress={this._onPress} />
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
export default Login;