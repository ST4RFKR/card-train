import React from 'react';
import {Button} from "./components/Button.styled";
import {Theme} from "./components/styles/Theme.styled";
import {Card} from "./components/Card";
import {Typography} from "./components/typography/Typography";
import {Wrapper} from "./components/Wrapper";

import image from './images/Logo.png'


function App() {
    return (
        <div className="App">
            <Card>
                <img src={image} alt=""/>
                <Wrapper maxWidth={'26rem'}>
                    <Typography as="h1">Headline</Typography>
                    <Typography as="p" color={Theme.colors.typographyLight}>Faucibus. Faucibus. Sit sit sapien sit
                        tempusrisu ut. Sit molestie ornare in venen.</Typography>
                </Wrapper>
                <Wrapper>
                    <Button primary>See more</Button>
                    <Button outlined>Save</Button>
                </Wrapper>
            </Card>
        </div>
    );
}

export default App;
