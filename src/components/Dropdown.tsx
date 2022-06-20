import React, { useState, useEffect, forwardRef } from 'react';
import { useClickOutside } from '../hooks';

import { StyledDropdown, getDefaultValues } from "../styles/Dropdown.styles";

import { IDropdownProps } from '../types';

/** @public */
const Dropdown = forwardRef<HTMLDivElement, IDropdownProps>((props, ref): JSX.Element => {
    /** @desc Create a reference object to the dropdown element for adding as dependencies to the hook "useEffect" inside
     *        custom hook "useClickOutside"
     *  @type {HTMLDivElement} */
    const dropdownRefObj = ref;

    /** @desc Returns a stateful value, and a function to update it. -> Handle dropdown activity
     *  @type {[isActive:boolean, setIsActive:function]} */
    const [ isActive, setIsActive ] = useState(false);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => setIsActive(props.isActive), [props.isActive]);

    /** @desc Initialize custom hook for handling the outside click of a dropdown element */
    useClickOutside({
        ref: dropdownRefObj,
        handler: (): void => {
            if (isActive) {
                /** @desc Hide dropdown after clicking outside */
                setIsActive((isActive) => !isActive);
                if (props?.clickedOutside) {
                    /** @desc Call callback function for updating parent state object */
                    props.clickedOutside(!isActive);
                }
            }
        }
    });

    return (
        <StyledDropdown
            ref={dropdownRefObj}
            {...getDefaultValues(props)}>
            {props.content}
        </StyledDropdown>
    )
});

export default Dropdown;