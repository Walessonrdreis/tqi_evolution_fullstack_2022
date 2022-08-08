import styled from "styled-components";
export const container = styled.div`

  width:10rem;
  height: 1.5rem;

  border-radius: 5rem ;
  &:hover{
    border:2px solid var(--orange);
  }
  &:hover input{
    width:150px;
    padding: 0 10px ;
  }
  &:hover .search{
    background-color: var(--orange);
  }
  .search{
    float: right;
    width:1.5rem;
    height:1.5rem;
    font-size:1.3rem ;
    border-radius:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: .9s;
    cursor:pointer;
    text-decoration: none ;
  }
  .search:hover{
    transform: rotate(360deg) scale(0.9) ;
    
  }
  input{
   width:0; 
   height: 1.1rem;
   color:black ;
  border:none;
  border-radius: 5rem ;
  margin-top:2px;
  outline:none;
  padding:0;
  background:none ;
  font-size:1.1rem ;
  transition:.5 ease;
 }`;