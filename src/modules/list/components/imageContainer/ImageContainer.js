import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import useIntersectionObserver from '../../../intersection-observer';
// import Image from '../image/Image';

const imageContainer = css`
    background: red;
    display: grid;
    whidth: 250px;
    height: 140px;
`;

function ImageContainer({ src, alt }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useIntersectionObserver({
        target: ref,
        setIsVisible,
    });
    return (
        <div ref={ref} className={imageContainer}>
            {isVisible && <img className="image" src={src} alt={alt} />}
        </div>
    );
}

ImageContainer.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ImageContainer;
