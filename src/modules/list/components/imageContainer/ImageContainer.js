import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import useIntersectionObserver from '../../../intersection-observer/hooks/IntersectionObserver';

const imageContainer = css`
    background: red;
    display: grid;
    whidth: 250px;
    height: 140px;
`;

function ImageContainer({ src, alt }) {
    const ref = useRef();
    const [isVisible, setIsVisible] = React.useState(false);
    useIntersectionObserver({
        target: ref,
        onIntersect: ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                setIsVisible(true);
                observerElement.unobserve(ref.current);
            }
        },
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
