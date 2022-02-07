import React from 'react'
import { Container } from '../../globalStyles';
import { LandingSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, Img, ImgWrapper } from './Landing.elements';

const Landing = () => {
    return (
        <div>
            <LandingSec>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading>BECARE APP</Heading>
                                <Subtitle>Viva uma saúde integral</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <Img src={require('../../images/footer-mobile.png')} alt='Becare' />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </LandingSec>
        </div>
    )
}

export default Landing
