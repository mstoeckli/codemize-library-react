import React, { useEffect } from 'react';

import { IResizeHandlerProps } from '../types';

/** @public */
const useResizeHandler = (props: IResizeHandlerProps): void => {
    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect((): void => {
        /** @desc Initialize resize observer for handling callback call */
        const oResizeObserver = new ResizeObserver((oResizeObserverEntry): void => props.callback(oResizeObserverEntry));

        /** @ts-ignore */
        oResizeObserver.observe(props.refObj.current);
    }, [])
}

export default useResizeHandler;