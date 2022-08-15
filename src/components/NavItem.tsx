import React, { forwardRef } from 'react';

import {getDefaultValues, StyledNavItem} from '../styles/NavItem.styles';

import { INavItemProps } from '../types';

import { ThemeProvider } from '../theme';

/** @public */
const NavItem = forwardRef<HTMLDivElement, INavItemProps>((props, ref): JSX.Element => {
    /** @private */
    const _addSeparator = (): JSX.Element => <span className="navitem-separator"/>;

    /** @private */
    const _addNavItem = (): JSX.Element => (
        <div className={props?.isTitle && props.isTitle ? "navitem-title" : String()}>
            {props?.icon?.position === "right"
                ? <>
                    <span>{props?.text}</span>
                    {props?.icon?.src}
                </> : <>
                    {props?.icon?.src}
                    <span>{props?.text}</span>
                </>}
        </div>
    );

    /** @private */
    const _addLogo = (): JSX.Element => (
        <div className="navitem-logo">
            <>{props?.logoSrc}</>
        </div>
    );

    return (
        <ThemeProvider theme={props?.theme}>
            <StyledNavItem
                ref={ref}
                onClick={props.onClick}
                {...getDefaultValues(props)}>
                {props?.isSeparator && props.isSeparator
                    ? _addSeparator()
                    : props?.isLogo ? _addLogo() : _addNavItem()}
            </StyledNavItem>
        </ThemeProvider>
    )
});

export default NavItem;