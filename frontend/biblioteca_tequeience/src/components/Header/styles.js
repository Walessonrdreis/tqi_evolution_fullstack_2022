import styled from "styled-components";

export const Container = styled.div`
  height: 100% ;
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid #000;
 justify-content: center;

`;
export const i_left = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  gap: 2rem;

`;
export const i_right = styled.div`
  flex: 1;
  position: relative;
`;
export const Header = styled.h1`
  border: 2px solid #000;
  width:100%;
  text-align:right;
  `;

export const Title = styled.div`
  padding-top: 10px;
 
`;