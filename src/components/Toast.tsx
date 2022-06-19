import React, { forwardRef } from 'react';

import { StyledToast } from '../styles/Toast.styles';

import { IToastProps } from '../types';

import { ThemeProvider } from '../theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

/** @public */
const Toast = forwardRef((props: IToastProps, ref: React.ForwardedRef<any>|React.RefObject<any>|any): JSX.Element => (
    <ThemeProvider theme={props?.theme}>
        <StyledToast ref={ref}>
            <div className="toast-content">
                <div className="toast-content-icon">
                    <FontAwesomeIcon icon={FaSolidIcons["faCheck"]} />
                </div>
                <div className="toast-content-message">
                    <h4>Success</h4>
                    <span>Data are successfully stored in database</span>
                </div>
            </div>
            <FontAwesomeIcon
                className="toast-close"
                icon={FaSolidIcons["faXmark"]} />
        </StyledToast>
    </ThemeProvider>
));

export default Toast;