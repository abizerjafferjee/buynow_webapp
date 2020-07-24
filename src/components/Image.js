import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    src: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]).isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string
}
const defaultProps = {
    src: undefined,
    width: undefined,
    height: undefined,
    alt: undefined
}

function Image({className, src, width, height, alt, ...props}) {

    const image = useRef(null)

    useEffect(function() {
        const placeholderImage = document.createElement('img');
        handlePlaceHolder(image.current, placeholderImage)
    })

    function placeHolderSrc(w,h) {
        return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`
    }

    function handlePlaceHolder(img, placeholder) {
        img.style.display = 'none'
        img.before(placeholder)
        placeholder.src = placeHolderSrc(
            img.getAttribute('width') || 0,
            img.getAttribute('height') || 0
        )
        placeholder.width = img.getAttribute('width')
        placeholder.height = img.getAttribute('height')
        placeholder.style.opacity = '0'
        img.className && placeholder.classList.add(img.className)

        img.addEventListener('load', function() {
            placeholder.remove()
            img.style.display=''
        })

    }

    return (
        <img
            {...props}
            ref={image}
            className={className}
            src={src}
            width={width}
            height={height}
            alt={alt}
        />
    )
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image