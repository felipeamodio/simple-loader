import React, {useEffect} from 'react';
import {Container, Ball} from './styles';
import {Animated} from 'react-native';


export default function Loader(){
    const animations = {
        one: new Animated.Value(0),
        two: new Animated.Value(0),
        three: new Animated.Value(0),
    }


    function onAnimate(animation, nextAnimation){
        Animated.sequence([
            Animated.timing(animation, {
                toValue: -10,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(animation, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            })
        ]).start();
        
        setTimeout(nextAnimation, 200);
    }

    function onStartAnimate(){
        function onThreeAnimation(){
            onAnimate(animations.three, () => {
                setTimeout(onStartAnimate, 800);
            });
        }

        function onTwoAnimation(){
            onAnimate(animations.two, onThreeAnimation);
        }

        onAnimate(animations.one, onTwoAnimation);
    }

    useEffect(() => {
         onStartAnimate()
    }, []);

    return(
        <Container>
            <Ball 
                style={{transform: [{translateY: animations.one}]}} 
                color="#1ABC9C" 
            />

            <Ball 
                style={{transform: [{translateY: animations.two}]}} 
                color="#F1C40F" 
            />

            <Ball 
                style={{transform: [{translateY: animations.three}]}} 
                color="#E74C3C" 
            />

        </Container>
    )
}