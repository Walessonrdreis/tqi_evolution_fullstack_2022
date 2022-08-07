import styled from "styled-components";

export const container = styled.div`
  border: 1px solid;
  width:99%;
  text-align:right;

  input{
  visibility: hidden;
 }

#cart{
  cursor: pointer;
  transform:scale(1.5);
  width:40px;
}
#cart:hover{
  transition: ease-in-out 1s;
  width:20px;
}
  
`