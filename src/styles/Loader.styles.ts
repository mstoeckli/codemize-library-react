import styled, { css } from 'styled-components';

import { ILoaderProps } from "../types";

/** @public
 *  @desc Initialize style properties and set their default values */
export const getDefaultValues = (props: ILoaderProps) => ({
    height: props?.height || "auto",
    width: props?.width || "auto",
    top: props?.top || "0",
    left: props?.left || "0",
    right: props?.right || "0",
    bottom: props?.bottom || "0",
});

/** @private */
interface IStyledLoaderProps {
    height: string,
    width: string,
    top: string,
    left: string,
    right: string,
    bottom: string,
}

/** @public */
export const StyledLoader = styled("div")<IStyledLoaderProps>`
  position: fixed;
  height: ${props => props.height};
  width: ${props => props.width};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  display: flex;
  justify-content: ${props => props.theme.loader.config.justifyContent};
  align-items: ${props => props.theme.loader.config.alignItems};
  background: ${props => props.theme.loader.colors.backgroundContainer};
  z-index: ${props => props.theme.loader.config.zIndex};

  & .loader {
    width: ${props => props.theme.loader.config.loaderSize};
    height: ${props => props.theme.loader.config.loaderSize};
    display: inline-block;
    position: relative;
    transform: rotate(45deg);
  }

  & .loader::before {
    content: '';
    box-sizing: border-box;
    width: ${props => props.theme.loader.config.loaderTileSize};
    height: ${props => props.theme.loader.config.loaderTileSize};
    position: absolute;
    left: 0;
    top: -${props => props.theme.loader.config.loaderTileSize};
    animation: loader1 4s ease infinite;
  }

  & .loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: ${props => props.theme.loader.config.loaderTileSize};
    height: ${props => props.theme.loader.config.loaderTileSize};
    background: ${props => props.theme.loader.colors.backgroundLoaderTileFolding};
    box-shadow: ${props => props.theme.loader.config.loaderTileAfterBoxShadow};
    animation: loader2 2s ease infinite;
  }

  @keyframes loader1 {
    0% {
      box-shadow: 0 ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTile},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTile},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTile}, 
      0 ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTile};

    }
    12% {
      box-shadow: 0 ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTile},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTile}, 
      0 ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTile};
    }
    25% {
      box-shadow: 0 ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTile}, 
      0 ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTile};
    }
    37% {
      box-shadow: 0 ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive}, 
      0 ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTile};
    }
    50% {
      box-shadow: 0 ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive}, 
      0 ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive};
    }
    62% {
      box-shadow: 0 ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTile},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive}, 
      0 ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive};
    }
    75% {
      box-shadow: 0 ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTile},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTile},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive}, 
      0 ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive};
    }
    87% {
      box-shadow: 0 ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTile},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTile},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTile}, 
      0 ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTileActive};
    }
    100% {
      box-shadow: 0 ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTile},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.colors.backgroundLoaderTile},
      ${props => props.theme.loader.config.loaderTileSize} ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTile}, 
      0 ${props => props.theme.loader.config.loaderSize} ${props => props.theme.loader.colors.backgroundLoaderTile};
    }
  }

  @keyframes loader2 {
    0% {
      transform: translate(0, 0) rotateX(0) rotateY(0);
    }
    25% {
      transform: translate(100%, 0) rotateX(0) rotateY(180deg);
    }
    50% {
      transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
    }
    75% {
      transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
    }
    100% {
      transform: translate(0, 0) rotateX(0) rotateY(360deg);
    }
  }
`