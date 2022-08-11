
import {createGlobalStyle} from "styled-components"
export const darkTheme = {
  body: "#14151b",
  textColor: "#c9c9c9",
  headingColor: "#fca61f",
  headingColor2: "#fff"
}
export const lightTheme = {
  body: "#cacaca",
  textColor: "#000",
  headingColor: "#242d49",
  headingColor2: "#27030d"
}
export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 *{
   color: ${props => props.theme.headingColor};
 }
 .link{color: ${props => props.theme.headingColor};}
 .link:hover{color: ${props => props.theme.headingColor2};}
`