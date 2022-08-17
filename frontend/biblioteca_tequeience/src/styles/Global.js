
import {createGlobalStyle} from "styled-components"
export const darkTheme = {
  body: "#22272e",
  textColor: "#c9c9c",
  headingColor: "#c9c9c9",
  headingColor2: "black"
}
export const lightTheme = {
  body: "#c9c9c9",
  textColor: "#22272e",
  headingColor: "black",
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
 button .link{
  color: ${props => props.theme.headingColor2};
 }
 
`