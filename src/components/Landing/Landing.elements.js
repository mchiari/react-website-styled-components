import styled from "styled-components";

export const LandingSec = styled.div`
color: #fff;
padding: 160px 0;
background: #fff;
`;



export const InfoRow = styled.div`
display: flex;
margin:0 -15px -15px -15px;
flex-wrap:wrap;
align-items:center;
flex-direction: row-reverse;
`;



export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;


    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;


export const TextWrapper = styled.div`
max-width: 540px;
padding-top:0;
padding-bottom: 60px;


    @media screen and (max-width: 768px){
        padding-bottom:65px;
    }

}


`;


export const TopLine = styled.div`
color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;


export const Heading = styled.h1`
margin-bottom: 24px;
font-size:72px;
line-height: 1.1;
color: #4B59F7;
font-weight: bold;
`;


export const Subtitle = styled.p`
max-width:440px;
font-size: 36px;
line-height:50px;
color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};

overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #4B59F7; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .02em; /* Adjust as needed */
  animation: 
    typing 2s steps(40, end),
    blink-caret .75s step-end infinite;

    @keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}

`;


export const ImgWrapper = styled.div`
max-width: 555px;
display:flex;
jusitfy-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
padding: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 900px;
animation: 5s ease-in 0s infinite normal none running animaMobile;

@keyframes animaMobile{
    0%{
        transform: translateY(3%);
    } 
    50%{
        transform: translateY(-3%);
    }
    100%{
        transform: translateY(3%);
    }
}
`;

