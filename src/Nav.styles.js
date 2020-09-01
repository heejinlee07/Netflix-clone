import styled from "styled-components";

export const NavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  padding: 20px;
  z-index: 1;

  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

export const NavBlack = styled.div`
  background-color: #111;
`;

export const NavLogo = styled.img`
  position: fixed;
  left: 20px;
  width: 80px;
  object-fit: contain;
`;

export const NavAvatar = styled.img`
  position: fixed;
  right: 20px;
  width: 30px;
  object-fit: contain;
`;
