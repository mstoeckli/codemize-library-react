import styled, { css } from 'styled-components';

/** @private */
interface IStyledToastProps {

}

/** @public */
export const StyledToast = styled("div")<IStyledToastProps>`
  position: absolute;
  top: 25px;
  right: 30px;
  border-radius: 12px;
  background: #fff;
  padding: 20px 35px 20px 25px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  border: 1px solid #4070f4;
  border-left: 6px solid #4070f4;
  overflow: hidden; 
  //transform: translateX(calc(100% + 30px));
  //transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
  
  & .toast-content{
    display: flex;
    align-items: center;

    & .toast-content-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      width: 35px;
      background-color: #4070f4;
      border-radius: 50%;
      
      & > svg {
        color: #fff;
        font-size: 20px;
      }
    }
    
    & .toast-content .message{
      display: flex;
      flex-direction: column;
      margin: 0 20px;
    }
  }

  & .toast-close {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 5px;
    cursor: pointer;
    opacity: 0.7;
  }
`