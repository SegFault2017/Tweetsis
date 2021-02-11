import React from "react";
import styled from "styled-components";
import Brand from "../icons/Brand";
import { NavLink } from "react-router-dom";

const Root = styled.div`
  background-color: #6b6b6b;
  height: 65px;
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /*position: fixed;*/
  top: 0px;
  z-index: 40;
`;

const BrandWrapper = styled.div`
  padding-left: 50px;
`;

const NavlinkWrapper = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;

const activeClassName = "nav-item-active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    border-bottom: 2px solid #5dd7fc;
  }
  text-decoration: none;
  color: white;
`;

//flex

const Header = () => {
  return (
    <Root>
      <BrandWrapper>
        <Brand />
      </BrandWrapper>
      <NavlinkWrapper>
        <StyledLink exact to="/">
          Tweetsis
        </StyledLink>
      </NavlinkWrapper>
    </Root>
  );
};

export default Header;
