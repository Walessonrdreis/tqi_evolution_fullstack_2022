import styled from "styled-components";

export const Container = styled.div`
  height: 100% ;
  display: flex;
  align-items: center;
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
  gap: 1.2rem;
  justify-content: flex-start;
  padding-left:10%;
  box-sizing: border-box;
 
`;
export const Header = styled.h1`
  width:100%;
  text-align:right;
  `;

export const Title = styled.div`
  padding-top: 10px;
 
`;