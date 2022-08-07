import styled from "styled-components";

export const Container = styled.div`
  height: 100% ;
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid #000;
 justify-content: center;
 flex-direction:row;

`;
export const i_left = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  gap: 2rem;

`;
export const i_right = styled.div`
  display: flex;
  flex: 1;
  position: relative;
 gap: 1rem;
 text-align: right;
 border: 2px solid #000;
 
`;
export const Header = styled.h1`

  width:100%;
  text-align:right;
  `;

export const Title = styled.div`
  padding-top: 10px;
 
`;