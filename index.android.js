/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {Container, Header, Content, Footer, Title} from 'native-base';


export default class Giphtionary extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>Header</Title>
                </Header>

                <Content>
                    // Your main content goes here
                </Content>

                <Footer>
                    <Title>Footer</Title>
                </Footer>
            </Container>
        );
    }
}


AppRegistry.registerComponent('Giphtionary', () => Giphtionary);
