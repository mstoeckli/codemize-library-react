import { DefaultTheme } from "styled-components";

/** @public
 *  @desc Defines the properties of each loader element */
export interface ILoaderProps {
    height: string,
    width: string,
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
    theme?: DefaultTheme,
}

/** @public
 *  @desc Defines the theme properties for all the loader config */
export type LoaderConfigProps = {
    justifyContent: string,
    alignItems: string,
    loaderSize: string,
    loaderTileSize: string,
    loaderTileAfterBoxShadow: string,
    zIndex: number
};