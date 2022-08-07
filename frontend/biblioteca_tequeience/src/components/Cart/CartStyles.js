import styled from "styled-components";

export const container = styled.div`
  border: 1px solid;
  width:2rem;
  position: relative;
  left:33rem ;

  input{
  visibility: hidden;
 }

#cart{
  cursor: pointer;
  transform:scale(1.5);
  width:20px;
}
#cart:hover{
  transition: ease-in-out 1s;
  width:20px;
}
  
`