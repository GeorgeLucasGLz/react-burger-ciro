import styled from "styled-components";

export const Footer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
gap: 7px;
width: 100%;
padding: 7px;
font-size: 1.3vw;
position: absolute;
bottom: 0;
z-index: 2000;

@media (max-width: 1000px) {

    font-size: 3.3vw;

}
`

export const FooterImg = styled.img`

width: 2vw;
border-radius: 50%;
padding-top: 4px;

@media (max-width: 1000px) {

    width: 4vw;

}

`

export const FooterLink = styled.a`

text-decoration: none;
color: white;

`