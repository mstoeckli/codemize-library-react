import React, { useState, useEffect, forwardRef } from 'react';

import { StyledSearch, getDefaultValues } from '../styles/Search.styles';

import { ISearchProps } from '../types';

import { ThemeProvider } from '../theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

/** @public */
const Search = forwardRef((props: ISearchProps, ref: React.ForwardedRef<any>|React.RefObject<any>|any): JSX.Element => {
    /** @desc Returns a stateful value, and a function to update it. -> Handle search value
     *  @type {[value:string, setValue:function]} */
    const [ value, setValue ] = useState(props?.value);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => setValue(value), [value])

    /** @private */
    const _onSearch = (oEvt:React.MouseEvent<SVGSVGElement>) => {
        if (props?.onSearch) {
            /** @desc Call callback function for handling search term
             *  @ts-ignore */
            props?.onSearch(oEvt, oEvt.currentTarget.nextElementSibling.value);
        }
    };

    /** @private */
    const _onChange = (oEvt:React.ChangeEvent<HTMLInputElement>) => {
        /** @desc Update search value */
        setValue(oEvt.currentTarget.value);

        if (props?.onChange) {
            /** @desc Call callback function for handling search term */
            props?.onChange(oEvt, oEvt.currentTarget.value);
        }
    };

    /** @private */
    const _onClear = (oEvt:React.MouseEvent<SVGSVGElement>) => {
        if (props?.onClear) {
            /** @desc Clear value
             *  @ts-ignore */
            oEvt.currentTarget.previousSibling.value = String();

            /** @desc Call callback function for handling search term
             *  @ts-ignore */
            props?.onClear(oEvt);
        }
    };

    return (
        <ThemeProvider theme={props?.theme}>
            <StyledSearch
                ref={ref}
                {...getDefaultValues(props)}>
                {props?.iconSrcLeft || <FontAwesomeIcon
                    icon={FaSolidIcons["faSearch"]}
                    className="search-svg-left"
                    onClick={_onSearch}/>}
                <input
                    type="text"
                    placeholder={props?.placeholder || "Suchen"}
                    value={value}
                    className="search-input"
                    onChange={_onChange}/>
                {props?.iconSrcRight || <FontAwesomeIcon
                    icon={FaSolidIcons["faXmark"]}
                    className="search-svg-right"
                    onClick={_onClear}/>}
            </StyledSearch>
        </ThemeProvider>
    )
});

export default Search;