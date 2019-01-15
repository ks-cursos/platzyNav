import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Profile extends Component {
    _onPress = () => {
        this.props.navigation.navigate("Home")
    }
    render() {
        return (
            <View style={style.continer}>
                <Text>Profile</Text>
                <Button title="Ir al Home" onPress={this._onPress} />
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
export default Profile;