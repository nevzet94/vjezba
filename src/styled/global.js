import styled from "styled-components";

const P = styled.p`
    margin-block-start: 0em;
    margin-block-end: 0em;
    //Width 
    ${props => (props.width ? `width: ${props.width};` : "")}
    ${props => (props.hoverWidth ? `&:hover:{ width: ${props.hoverWidth};}` : "")}

    //Height
    ${props => (props.height ? `height: ${props.height};` : "")}

    //Padding
    ${props => (props.padding ? `padding: ${props.padding};` : "")}
    ${props =>
      props.paddingBottom ? `padding-bottom: ${props.paddingBottom};` : ""}
    ${props => (props.paddingLeft ? `padding-left: ${props.paddingLeft};` : "")}
    ${props =>
      props.paddingRight ? `padding-right: ${props.paddingRight};` : ""}
    ${props => (props.paddingTop ? `padding-right: ${props.paddingTop};` : "")}
    //Styling
    ${props => (props.opacity ? `opacity: ${props.opacity};` : "")}
    ${props => (props.color ? `color: ${props.color};` : "")}
    ${props => (props.lineHeight ? `line-height: ${props.lineHeight};` : "")}
    ${props => (props.fontSize ? `font-size: ${props.fontSize};` : "")}
    ${props => (props.hoverFontSize ? `&:hover{font-size: ${props.hoverFontSize};}` : "")}

    //Position
    ${props => (props.position ? `position: ${props.position};` : "")}
    ${props => (props.top ? `top: ${props.top};` : "")}
    ${props => (props.right ? `right: ${props.right};` : "")}
    ${props => (props.left ? `left: ${props.left};` : "")}
    ${props => (props.bottom ? `bottom: ${props.bottom};` : "")}
    //Margin 
    ${props => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
    ${props => (props.marginLeft ? `margin-left: ${props.marginLeft};` : "")}
    ${props => (props.marginRight ? `margin-right: ${props.marginRight};` : "")}
    ${props =>
      props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ""}
    ${props => (props.margin ? `margin: ${props.margin};` : "")}

    //Style 
    ${props => (props.fontStyle ? `font-style: ${props.fontStyle};` : "")}
    ${props => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")}

    //Text-Align
    ${props => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
    ${props => (props.displayFlex ? "display: flex;" : "")}
    ${props => props.flexDirection && `flex-direction: ${props.flexDirection}`}
    ${props => (props.flexWrap ? "flex-wrap: wrap;" : "")}
    ${props => (props.flex ? `flex: ${props.flex};` : "")}
    ${props => (props.justifyStart ? "justify-content: flex-start;" : "")}
    ${props => (props.justifyEnd ? "justify-content: flex-end;" : "")}
    ${props => (props.justifyBetween ? "justify-content: space-between;" : "")}
    ${props => (props.justifyAround ? "justify-content: space-around;" : "")}
    ${props => (props.justifyCenter ? "justify-content: center;" : "")}
    ${props => (props.row ? "flex-direction: row;" : "")}
    ${props => (props.column ? "flex-direction: column;" : "")}
    ${props => (props.order === "number" ? `order: ${props.order};` : "")}
    ${props => (props.border ? `border: ${props.border};` : "")}

`;

const Layout = styled.div`
  ${props => props.overflow && `overflow: ${props.overflow}; `}
  ${props => props.debug && `background: red;`}
  ${props => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")}
  ${props => (props.color ? `color: ${props.color};` : "")}
  ${props => (props.fontSize ? `font-size: ${props.fontSize};` : "")}
  ${props => (props.visible ? "display: visible;" : "")}
  // Layouting
  ${props => (props.maxWidth ? `max-width: ${props.maxWidth};` : "")}
  ${props => (props.minWidth ? `min-width: ${props.minWidth};` : "")}

  ${props => (props.displayFlex ? "display: flex;" : "")}
  ${props => props.flexDirection && `flex-direction: ${props.flexDirection}`}
  ${props => (props.flexWrap ? "flex-wrap: wrap;" : "")}
  ${props => (props.flex ? `flex: ${props.flex};` : "")}
  ${props => (props.justifyStart ? "justify-content: flex-start;" : "")}
  ${props => (props.justifyEnd ? "justify-content: flex-end;" : "")}
  ${props => (props.justifyBetween ? "justify-content: space-between;" : "")}
  ${props => (props.justifyAround ? "justify-content: space-around;" : "")}
  ${props => (props.justifyCenter ? "justify-content: center;" : "")}
  ${props => (props.row ? "flex-direction: row;" : "")}
  ${props => (props.column ? "flex-direction: column;" : "")}
  ${props => (props.order === "number" ? `order: ${props.order};` : "")}

  // Align
  ${props => (props.alignCenter ? "align-items: center;" : "")}
  ${props => (props.alignStart ? "align-items: flex-start;" : "")}
  ${props => (props.alignEnd ? "align-items: flex-end;" : "")}

  // Spacing
  ${props => (props.padding ? `padding: ${props.padding};` : "")}
  ${props =>
    props.paddingBottom ? `padding-bottom: ${props.paddingBottom};` : ""}
  ${props => (props.paddingLeft ? `padding-left: ${props.paddingLeft};` : "")}
  ${props =>
    props.paddingRight ? `padding-right: ${props.paddingRight};` : ""}
  ${props => (props.paddingTop ? `padding-right: ${props.paddingTop};` : "")}


  //Margin 
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
  ${props => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft};` : "")}
  ${props => (props.marginRight ? `margin-right: ${props.marginRight};` : "")}
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ""}
  // Overflows
  ${props => (props.overflow ? `overflow: ${props.overflow};` : "")}
  // Position
  ${props => (props.position ? `position: ${props.position};` : "")}
  ${props => (props.zIndex ? `z-index: ${props.zIndex};` : "")}
  //Width 
  ${props => (props.width ? `width: ${props.width};` : "")}
  //Height
  ${props => (props.height ? `height: ${props.height};` : "")}
  //Background 
  ${props => (props.background ? `background: ${props.background};` : "")}
  ${props =>
    props.backgroundImg ? `background-image: ${props.backgroundImg};` : ""}
  ${props =>
    props.backgroundSize ? `background-size: ${props.backgroundSize};` : ""}
  //Border 
  ${props => (props.border ? `border: ${props.border};` : "")}
  ${props =>
    props.borderBottom ? `border-bottom: ${props.borderBottom};` : ""}
  ${props =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}

  //Text-Align
  ${props => (props.textAlign ? `text-align: ${props.textAlign};` : "")}

  //Box-shadow
  ${props => (props.boxShadow ? `box-shadow: ${props.boxShadow};` : "")}

  //Font size
  ${props => (props.fontSize ? `font-size: ${props.fontSize};` : "")}
  ${props => (props.opacity? `opacity: ${props.opacity};` : "")}
  ${props => (props.backgroundPosition? `background-position: ${props.backgroundPosition};` : "")}

  //Position
  ${props => (props.top ? `top: ${props.top};` : "")}
  ${props => (props.right ? `right: ${props.right};` : "")}
  ${props => (props.left ? `left: ${props.left};` : "")}
  ${props => (props.bottom ? `bottom: ${props.bottom};` : "")}
  ${props => (props.displayBlock ? `display:block;` : "")}
  ${props=> props.boxShadow ? `box-shadow: ${props.boxShadow};` : ""}

  `;

const PN = styled.p`
  font-size: 17px;
  margin-right: 60px;
  color: #737373;
  color:black;
  text-decoration: none;
  &:hover {
    color:#cc5200;
    font-size: 20px;
    font-style:italic;
    font-weight:bold;
   cursor:pointer;
   font-family:"Comic Sans MS", cursive, sans-serif;
  }
`;

const A = styled.a`
  text-decoration: none;
  *{
    margin:0; 
    padding:0;
  }
  //Position
${props => (props.top ? `top: ${props.top};` : "")}
${props => (props.right ? `right: ${props.right};` : "")}
${props => (props.left ? `left: ${props.left};` : "")}
${props => (props.bottom ? `bottom: ${props.bottom};` : "")}
${props => (props.position ? `position: ${props.position};` : "")}
`;

const Input = styled.input`
      //Width 
      ${props => (props.width ? `width: ${props.width};` : "")}

      ${props =>props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
      ${props => (props.borderRadius ? `border-radius: ${props.borderRadius};` : "")}
      ${props => (props.overflow ? `overflow: ${props.overflow};` : "")}
      ${props => (props.multiline ? `multiline: ${props.multiline};` : "")}
      //Height
      ${props => (props.height ? `height: ${props.height};` : "")}
      ${props => (props.value ? `value: ${props.value};` : "")}
      ${props => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
      //Padding
      ${props => (props.padding ? `padding: ${props.padding};` : "")}
      ${props =>
        props.paddingBottom ? `padding-bottom: ${props.paddingBottom};` : ""}
      ${props =>
        props.paddingLeft ? `padding-left: ${props.paddingLeft};` : ""}
      ${props =>
        props.paddingRight ? `padding-right: ${props.paddingRight};` : ""}
      ${props =>
        props.paddingTop ? `padding-right: ${props.paddingTop};` : ""}
      //Styling
      ${props => (props.fontSize ? `font-size: ${props.fontSize};` : "")}
      ${props => (props.color ? `color: ${props.color};` : "")}
      ${props => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")}
      //Text-Align
      ${props => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
      //Margin 
      ${props => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
      ${props => (props.marginLeft ? `margin-left: ${props.marginLeft};` : "")}
      ${props =>
        props.marginRight ? `margin-right: ${props.marginRight};` : ""}
      ${props =>
        props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ""}
      ${props => (props.margin ? `margin: ${props.margin};` : "")}
      ${props => (props.background ? `background: ${props.background};` : "")}

      //display
      ${props => (props.displayBlock ? `display:block;` : "")}
      ${props => (props.displayInline ? `display:inline;` : "")}
      ${props => (props.displayInlineBlock ? `display:inline-block;` : "")}
      ${props => (props.border ? `border: ${props.border};` : "")}
      ${props=> props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
      ${props=> props.boxShadow ? `box-shadow: ${props.boxShadow};` : ""}

  `;

const Button = styled.button`
${props=> props.boxShadow ? `box-shadow: ${props.boxShadow};` : ""}
      //Font family
      ${props => (props.fontFamily ? `font-family: ${props.fontFamily};` : "")}
     //Width 
      ${props => (props.width ? `width: ${props.width};` : "")}
      //Height
      ${props => (props.height ? `height: ${props.height};` : "")}
      ${props => (props.value ? `value: ${props.value};` : "")}
      //Padding
      ${props => (props.padding ? `padding: ${props.padding};` : "")}
      ${props =>
        props.paddingBottom ? `padding-bottom: ${props.paddingBottom};` : ""}
      ${props =>
        props.paddingLeft ? `padding-left: ${props.paddingLeft};` : ""}
      ${props =>
        props.paddingRight ? `padding-right: ${props.paddingRight};` : ""}
      ${props =>
        props.paddingTop ? `padding-right: ${props.paddingTop};` : ""}
      //Styling
      ${props => (props.fontSize ? `font-size: ${props.fontSize};` : "")}
      ${props => (props.color ? `color: ${props.color};` : "")}
      ${props => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")}
      //Text-Align
      ${props => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
      //Margin 
      ${props => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
      ${props => (props.marginLeft ? `margin-left: ${props.marginLeft};` : "")}
      ${props =>
        props.marginRight ? `margin-right: ${props.marginRight};` : ""}
      ${props =>
        props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ""}
      ${props => (props.margin ? `margin: ${props.margin};` : "")}
      //Border
      ${props => (props.border ? `border: ${props.border};` : "")}
      ${props =>
        props.borderBottom ? `border-bottom: ${props.borderBottom};` : ""}
      ${props =>
        props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
      //Opacity
      ${props => (props.opacity ? `opacity: ${props.opacity};` : "")}
      ${props => (props.background ? `background-color: ${props.background};` : "")}
      ${props => (props.opacity ? `opacity: ${props.opacity};` : "")}

      //Position
      ${props => (props.top ? `top: ${props.top};` : "")}
      ${props => (props.right ? `right: ${props.right};` : "")}
      ${props => (props.left ? `left: ${props.left};` : "")}
      ${props => (props.bottom ? `bottom: ${props.bottom};` : "")}
      ${props => (props.fontStyle ? `font-style: ${props.fontStyle};` : "")}
      cursor:pointer;
      &:hover{
        ${props => (props.backgroundH? `background-color: ${props.backgroundH};` : "")};
        ${props => (props.colorH? `color: ${props.colorH};` : "")};
        ${props => (props.borderH? `border: ${props.borderH};` : "")};
        ${props => (props.textDecoration? `text-decoration: ${props.textDecoration};` : "")};
      }
    

`;
const Img = styled.img`
${props => (props.vspace ? `vspace: ${props.vspace};` : "")}
//Position
${props => (props.top ? `top: ${props.top};` : "")}
${props => (props.right ? `right: ${props.right};` : "")}
${props => (props.left ? `left: ${props.left};` : "")}
${props => (props.bottom ? `bottom: ${props.bottom};` : "")}
${props => (props.position ? `position: ${props.position};` : "")}
//Width 
${props => (props.width ? `width: ${props.width};` : "")}
//Height
${props => (props.height ? `height: ${props.height};` : "")}
${props => (props.value ? `value: ${props.value};` : "")}
//Margin 
${props => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
${props => (props.marginLeft ? `margin-left: ${props.marginLeft};` : "")}
${props => (props.marginRight ? `margin-right: ${props.marginRight};` : "")}
${props => (props.marginBottom ? `margin-bottom: ${props.marginBottom};` : "")}
${props => (props.margin ? `margin: ${props.margin};` : "")}
//Border

${props => (props.border ? `border: ${props.border};` : "")}
${props => (props.borderBottom ? `border-bottom: ${props.borderBottom};` : "")}
${props => (props.borderRadius ? `border-radius: ${props.borderRadius};` : " ")}
//Background 
${props => (props.background ? `background: ${props.background};` : "")}
${props =>
  props.backgroundImg ? `background-image: ${props.backgroundImg};` : ""}
${props =>
  props.backgroundSize ? `background-size: ${props.backgroundSize};` : ""}
${props =>
  props.backgroundPosition
    ? `background-position: ${props.backgroundPosition};`
    : ""}`;

const H1 = styled.h1`
//Styling
${props => (props.fontSize ? `font-size: ${props.fontSize};` : "")}
${props => (props.color ? `color: ${props.color};` : "")}
${props => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")}
//Text-Align
${props => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
//Margin
${props => (props.marginBottom ? `margin-bottom: ${props.marginBottom};` : "")}
${props => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
//display
${props => (props.displayBlock ? `display:block;` : "")}
${props => (props.displayInline ? `display:inline;` : "")}
${props => (props.displayInlineBlock ? `display:inline-block;` : "")}
font-family: "Courier New", Courier, monospace;
&:hover{
  color: #737373;
  cursor:pointer;
}
`;
const Heading = styled.h1`
 
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  font-size:60px;
  margin-bottom:30px;
  //Margin 
${props => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
${props => (props.marginLeft ? `margin-left: ${props.marginLeft};` : "")}
${props => (props.marginRight ? `margin-right: ${props.marginRight};` : "")}
${props => (props.marginBottom ? `margin-bottom: ${props.marginBottom};` : "")}
${props => (props.margin ? `margin: ${props.margin};` : "")}
  
@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
${props => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
`;

const KontaktHeading = styled.div`
.title {
	font-family: "Montserrat";
	text-align: center;
	color: #FFF;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	letter-spacing: 1px;
}

h1 {
	background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
	background-size: cover;
	color: transparent;
	-moz-background-clip: text;
	-webkit-background-clip: text;
	text-transform: uppercase;
	font-size: 80px;
	line-height: .75;
  margin-bottom:50px;
  text-align: center;
}
/* styling my button */

.white-mode {
	text-decoration: none;
	padding: 7px 10px;
	background-color: #122;
	border-radius: 3px;
	color: #FFF;
	transition: .35s ease-in-out;
	position: absolute;
	left: 15px;
	bottom: 15px;
	font-family: "Montserrat";
}

.white-mode:hover {
	background-color: #FFF;
	color: #122;
}

`;
const Box= styled.button`
height: 45px;
width: 300px;
font-size: 30px;
border-radius: 15px;
${props => (props.background? `background-color: ${props.background};` : "")};
${props => (props.marginLeft? `margin-left: ${props.marginLeft};` : "")};
${props => (props.marginRight? `margin-left: ${props.marginRight};` : "")};
${props => (props.alignSelf? `align-self: ${props.alignSelf};` : "")};



`;
export { P, Layout, PN, A, Input, Button, Img, H1, Heading,KontaktHeading, Box};

