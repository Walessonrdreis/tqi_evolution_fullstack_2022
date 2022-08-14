
import {createGlobalStyle} from "styled-components"
export const darkTheme = {
  body: "#14151b",
  textColor: "#c9c9c9",
  headingColor: "#fca61f",
  headingColor2: "#fff"
}
export const lightTheme = {
  body: "#22272e",
  textColor: "blue",
  headingColor: "white",
  headingColor2: "#27030d"
}
export const GlobalStyles = createGlobalStyle`
 body,div {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 *{
   color: ${props => props.theme.headingColor};
 }
 .link{color: ${props => props.theme.headingColor};}
 .link:hover{color: ${props => props.theme.headingColor2};}

 button{
  background: ${props => props.theme. headingColor};
  color: ${props => props.theme.body};
 }
`