import React, { useEffect } from 'react';

import { IClickOutsideProps } from '../types';

/** @public */
const useClickOutside = (props: IClickOutsideProps): void => {
    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        /** @private */
        const _listener = (oEvt:{ target: any }) => {
            if (!props.ref?.current || props.ref?.current.contains(oEvt.target)) {
                return;
            }

            /** @desc Call callback handler for handling outside click */
            props.handler();
        };

        document.addEventListener("mousedown", _listener);
        return () => document.removeEventListener("mousedown", _listener);
    }, [props.ref, props.handler]);
}

export default useClickOutside;