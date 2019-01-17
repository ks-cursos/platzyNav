import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class About extends Component {
    _onPress = () => {
        this.props.navigation.navigate("Profile", {
            nombre: "Freddy Castillo"
        })
    }
    render() {
        return (
            <View style={style.continer}>
                <Text>About</Text>
                <Button title="Ir al Profile" onPress={this._onPress} />
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
export default About;