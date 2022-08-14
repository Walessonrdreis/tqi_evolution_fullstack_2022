import styled from "styled-components";

export const Nav = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  top: 0;




  .n_left{
  flex: 1;
  align-items: center;
  justify-content: left;
  display: flex;
  gap: 2rem;


}

.n_right{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 400;
}

.n_list{
  flex: 10;

}
.n_list > ul {
  display: flex;
  gap: 2rem;
  margin-top:1rem;
  margin-right: 4rem;
  list-style-type: none;
 
}
.link{
  text-decoration:none;

}


.n_list ul li:hover ul.sub-list-services,
.n_list ul li:hover ul.sub-list-category  {
  visibility: visible;
  transition: ease-out 1s;
  z-index:9;
  
} 
.n_list ul li ul:hover li {

visibility: initial;

}
.n_list ul li ul.sub-list-services,
.n_list ul li ul.sub-list-category {
  visibility: hidden;     
  position: absolute;

  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 10px 0px 10px 0px;
  border: 2px solid var(--orange);

}
.n_list > ul li ul.sub-list-services li,
.n_list > ul li ul.sub-list-category li{

  border-bottom: 2px  solid ;
  border-top: 2px  solid ;
  cursor: pointer;
  padding: 0 9px;
  width: 11rem;

 }


.n_list > ul li ul li:hover {
  cursor: pointer;

 
}
  


`;