import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const imageThum = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    transform: scale(1.1);
    transition: visibility 0ms ease 400ms;
`;

const imageFull = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 400ms ease 0ms;
`;

function Image({ alt, src }) {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        // eslint-disable-next-line react/jsx-fragments
        <Fragment>
            <img
                className={imageThum}
                alt={alt}
                src={src}
                style={{ visibility: isLoaded ? 'hidden' : 'visible' }}
            />
            <img
                onLoad={() => {
                    setIsLoaded(true);
                }}
                className={imageFull}
                style={{ opacity: isLoaded ? 1 : 0 }}
                alt={alt}
                src={src}
            />
        </Fragment>
    );
}

Image.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default Image;
