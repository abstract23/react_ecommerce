import React from 'react' ;

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...ootherProps}) => {
        return isLoading ?  (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...ootherProps} />
        )
}

return Spinner;
};

export default WithSpinner;