import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Profile extends Component {
    _onPress = () => {
        this.props.navigation.navigate("Home")
    }
    _setparam = () => {
        this.props.navigation.setParams({
            nombre: "Dayana"
        })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("nombre")
        }
    }
    render() {
        return (
            <View style={style.continer}>
                <Text>Profile</Text>
                <Button title="Ir al Home" onPress={this._onPress} />
                <Button title="Cambia NOmbre" onPress={this._setparam} />
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