import React from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default class FloatButton extends React.Component {
    animation = new Animated.Value(0)

    toogleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 5,
        }).start();

        this.open = !this.open
    }

    render() {
        const heartStyleAnimation = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -180]
                    })
                }
            ]
        }

        const thumbStyleAnimation = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -120]
                    })
                }
            ]
        }

        const listStyleAnimation = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -60]
                    })
                }
            ]
        }

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        };

        const opacity = this.animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 1],
        })

        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, heartStyleAnimation, opacity]}>
                        <FontAwesome name={"heart"} size={20} color={"#007fef"} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, thumbStyleAnimation, opacity]}>
                        <FontAwesome name={"thumbs-up"} size={20} color={"#007fef"} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, listStyleAnimation, opacity]}>
                        <FontAwesome name={"list"} size={20} color={"#007fef"} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toogleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <FontAwesome name={"plus"} size={24} color={"#FFF"} />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute',
    },

    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#007fef',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },

    menu: {
        backgroundColor: '#007fef',
    },

    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#FFF',
    }
})