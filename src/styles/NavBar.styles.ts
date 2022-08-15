import styled, { css } from 'styled-components';

/** @private */
interface IStyledNavBarProps {

}

/** @public */
export const StyledNavBar = styled("nav")<IStyledNavBarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  max-height: 40px;
  width: 100%;
  box-shadow: rgba(27, 31, 35, 0.02) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  border-bottom: 1px solid #e9e9e9;
  background: #fff;
  padding: 0 1rem;
  
  & .navbar-left {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 8px;
    width: 30%;
    float: left;
    overflow: hidden;
  }
  
  & .navbar-middle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 40%;
  }
  
  & .navbar-right {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 8px;
    width: 30%;
    float: right;
    overflow: hidden;
  }
  
  & .navbar-element-hide {
    display: none;
  }
`