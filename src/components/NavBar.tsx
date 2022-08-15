import React, {useRef, useState, useEffect, forwardRef, SVGAttributes} from 'react';
import { useResizeHandler } from '../hooks';

import { StyledNavBar } from '../styles/NavBar.styles';

import {Dropdown, NavItem} from './';

import {DropdownFloat, INavBarProps, INavItemProps} from '../types';

import { ThemeProvider } from '../theme';

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

/** @public */
const NavBar = forwardRef<HTMLDivElement, INavBarProps>((props, ref): JSX.Element => {
    /** @desc Used for calculating the width of left and right DIV */
    let iObserverWidth = 0;
    let iLeftWidth = 0;
    let iLeftContentWidth = 0;
    let iMiddleWidth = 0;
    let iRightContentWidth = 0;
    let iRightWidth = 0;

    /** @desc Returns a stateful value, and a function to update it. -> Updates visibility of left and right DIV
     *  @type {[state:string, setState:function]} */
    const [ toggleVisibility, setToggleVisibility ] = useState(false);

    /** @desc Create a reference object to determine the width of navbar elements */
    const navRefObj = ref ? ref : useRef<HTMLDivElement>(null);



    //
    // /** @desc Returns a stateful value, and a function to update it. -> Handle float of dropdown container -> LTR/RTL
    //  *  @type {[clientRect:DOMRect, setClientRect:function]} */
    // const [ clientRectLeft, setClientRectLeft ] = useState<DOMRect>({
    //     bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0,
    //     toJSON(): any {}
    // });
    //
    // /** @desc Returns a stateful value, and a function to update it. -> Handle float of dropdown container -> LTR/RTL
    //  *  @type {[clientRect:DOMRect, setClientRect:function]} */
    // const [ clientRectRight, setClientRectRight ] = useState<DOMRect>({
    //     bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0,
    //     toJSON(): any {}
    // });
    //
    // /** @desc Create a reference object to determine the width of button element */
    // const toggleIconLeftRefObj = useRef<any>(null);
    // const toggleIconRightRefObj = useRef<any>(null);

    // /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    // useEffect((): void => {
    //     if (toggleIconLeftRefObj) {
    //         /** @desc Possible use -> Loading the font can lead to possible inconsistencies in the width of a button */
    //         setTimeout(() => {
    //             /** @desc Update client rect width for handling float RTL of dropdown
    //              *  @ts-ignore */
    //             setClientRectLeft(toggleIconLeftRefObj.current.getBoundingClientRect());
    //         }, 100);
    //     }
    // }, [toggleIconLeftRefObj]);
    //
    // /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    // useEffect((): void => {
    //     if (toggleIconRightRefObj) {
    //         /** @desc Possible use -> Loading the font can lead to possible inconsistencies in the width of a button */
    //         setTimeout(() => {
    //             /** @desc Update client rect width for handling float RTL of dropdown
    //              *  @ts-ignore */
    //             setClientRectRight(toggleIconRightRefObj.current.getBoundingClientRect());
    //         }, 100);
    //     }
    // }, [toggleIconRightRefObj]);




    /** @desc Add hook to reference object for calculating header width */
    useResizeHandler({
        refObj: navRefObj,
        callback: (oResizeObserverEntry) => {
            const [ oResizeObserver ] = oResizeObserverEntry;
            const [ leftChildrenToggle, leftChildren, middleChildren, rightChildren, rightChildrenToggle ] = oResizeObserver.target.children;

            /** @desc Method sets a timer which executes a function or specified piece of code once the timer expires. -> Used to calculate the exact width after DOM is fully loaded */
            setTimeout(() => {
                /** @desc Update width of all elements as long as the left and right DIV are not toggled */
                if (!_hasClass(leftChildren) && !_hasClass(rightChildren)) {
                    /** @ts-ignore */
                    iObserverWidth = oResizeObserver.target.offsetWidth;

                    iLeftWidth = _setElementWidth(leftChildren);
                    iMiddleWidth = _setElementWidth(middleChildren);
                    iRightWidth = _setElementWidth(rightChildren);

                    /** @desc Calculate element content width for checking overflow */
                    iLeftContentWidth = _setElementContentWidth(leftChildren);
                    iRightContentWidth = _setElementContentWidth(rightChildren);
                }

                if ((iRightContentWidth > iRightWidth || iLeftContentWidth > iLeftWidth)) {
                    /** @ts-ignore */
                    if (oResizeObserver.target.offsetWidth > iObserverWidth) setToggleVisibility(false);
                    else setToggleVisibility(true);
                } else setToggleVisibility(false);
            }, 100);
        }
    });

    /** @private */
    const _setElementWidth = (element: Element) => {
        /** @ts-ignore */
        if (element?.offsetWidth) return element.offsetWidth;
    };

    /** @private */
    const _setElementContentWidth = (element: Element) => {
        let iContentWidth = 0;
        for (let i = 0; i < element.children.length; i++) {
            let children = element.children[i];
            /** @ts-ignore */
            iContentWidth = iContentWidth + children.offsetWidth;
        } return iContentWidth;
    };

    /** @private */
    const _addNavItems = (sClassName: string, aNavItems: INavItemProps[], bToggleHide: boolean = true) => (
        <div className={bToggleHide ? `${sClassName} ${toggleVisibility ? "navbar-element-hide" : String()}` : sClassName}>
            {aNavItems.map((oNavItem) => (
                <NavItem {...oNavItem} />
            ))}
        </div>
    );

    /** @private */
    const _addToggleItem = (iconSrc: IconProp, sFloat: DropdownFloat) => (
        <>
            <FontAwesomeIcon
                className={!toggleVisibility ? "navbar-element-hide" : String()}
                icon={iconSrc} />
            {/*<Dropdown*/}
            {/*    float={sFloat}*/}
            {/*    content={<div>*/}

            {/*        asdf*/}

            {/*    </div>}*/}
            {/*    clientRect={clientRect}*/}
            {/*    isActive={false}/>*/}
        </>
    );

    /** @private */
    const _hasClass = (element: Element) => element.classList.contains("navbar-element-hide");

    return (
        <ThemeProvider theme={props?.theme}>
            <StyledNavBar ref={navRefObj}>
                {props?.left?.navItems && _addToggleItem(FaSolidIcons["faEllipsisVertical"], "left")}
                {props?.left?.navItems && _addNavItems("navbar-left", props.left.navItems)}
                {props?.middle && _addNavItems("navbar-middle", props.middle, false)}
                {props?.right?.navItems && _addNavItems("navbar-right", props.right.navItems)}
                {props?.right?.navItems && _addToggleItem(FaSolidIcons["faEllipsisVertical"], "right")}
            </StyledNavBar>
        </ThemeProvider>
    )
});

export default NavBar;