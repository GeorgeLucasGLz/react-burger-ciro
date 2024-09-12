import React from "react";
import axios from "axios";
import FireVideo from '../../assets/burgerVideo.mp4'
import Freelings from '../../assets/freelings.webp'
import Logo from '../../assets/logo.webp'
import Insta from '../../assets/insta.webp'
import { CSS } from "../../index.css";
import { useHistory } from "react-router-dom";

/*---Geral---*/
import {
    Body,
    Mask,
    HeroSection,
    HeroImageBox,
    HeroP,
    HeroTitle,
    TitleSpan,
    HeroInfoSide,
    HeroImageSide,
    HeroHighlightBox,
    TitleSpanBg

} from './styles'

/*---Header---*/
import {
    Header,
    LogoBox
} from "../../components/LandingPageComponents/Header/styles";

/*---Buttons---*/
import {
    ButtonLeftSide,
    ButtonHeader,
    BoxInsta

} from '../../components/LandingPageComponents/Buttons/styles'


import {
    Footer,
    FooterImg,
    FooterLink
} from '../../components/Footer/styles'



const LandingPage = () => {

    const history = useHistory()

    function makeOrder() {

        history.push('/menu')

    }

    return (
        <Body>
            <a href="https://www.instagram.com/cirolancheses/" target="blank">
                <BoxInsta src={Insta}></BoxInsta>
            </a>
            <Header>
                <LogoBox src={Logo}></LogoBox>
                <a href="https://api.whatsapp.com/send?phone=5527999655756" target="blank">
                    <ButtonHeader>Contato</ButtonHeader>
                </a>
            </Header>

            <Mask></Mask>
            <video className="fire-video" src={FireVideo} autoPlay muted loop>

            </video>


            <HeroSection>
                <HeroInfoSide>
                    <HeroTitle>
                        <span>Uma Explosão de Sabores em Cada</span>
                        <HeroHighlightBox>
                            <TitleSpan>HAMBÚRGUER!</TitleSpan>
                            <TitleSpanBg>HAMBÚRGUER!</TitleSpanBg>
                        </HeroHighlightBox>
            
                    </HeroTitle>
                    <HeroP>Experimente a combinação perfeita de ingredientes frescos e carnes suculentas em nossos hambúrgueres artesanais.</HeroP>
                    <ButtonLeftSide onClick={makeOrder}>FAZER PEDIDO</ButtonLeftSide>
                </HeroInfoSide>

                <HeroImageSide>
                    <HeroImageBox src={Logo}></HeroImageBox>
                </HeroImageSide>
            </HeroSection>

            <Footer>
                <FooterLink href="https://www.freelings.com.br" target="blank">
                    <FooterImg src={Freelings}></FooterImg>
                </FooterLink>

                <FooterLink href="https://www.freelings.com.br" target="blank">
                    &copy; 2024 Freelings. Todos os direitos reservados
                </FooterLink>
            </Footer>
        </Body>
    )
}

export default LandingPage