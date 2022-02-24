import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types'
import Images from './Images'
import '../index.css';



// //IO
// const useOnScreen = (IObsOptions) => {
//     const [ref, setRef] = useState(null);
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(([entry]) => {
//             setVisible(entry.isIntersecting);
//         }, IObsOptions);

//         if (ref) {
//             observer.observe(ref);
//         }

//         return () => {
//             if (ref) {
//                 observer.unobserve(ref);
//             }
//         }
//     }, [ref, IObsOptions]);

//     return [setRef, visible]
// }

// const __IO = (ImgsArray) => {
//     const observer = new IntersectionObserver((entries, imgObserver) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 //imgObserver.unobserve(entry);
//                 let lzyImg = entry.target;
//                 lzyImg.src = lzyImg.dataset.imgSrc;
//             }
//         });
//         setVisible(entry.isIntersecting);
//     }, IObsOptions);

//     if (ref) {
//         observer.observe(ref);
//     }

//     return () => {
//         if (ref) {
//             observer.unobserve(ref);
//         }
//     }
// }




const ImagesContainer = ({ backendData }) => {
    const imagesContainer = useRef();
    const [imagesHeight, setHeight] = useState();
    // const [setRef, visible] = useOnScreen({ threshold: 0.3 });

    //Returns the adequated height that the image div
    // should have(height = width) based on CSS 
    // specs. This avoids the need for placeholder
    // div from which we'd have to get the width.
    const divHeight = (currentWidth) => {
        var divWidth = 0;
        if (window.innerWidth > 600)
            divWidth = 0.322 * currentWidth;
        else if (window.innerWidth > 400)
            divWidth = 0.485 * currentWidth;
        else
            divWidth = 0.96 * currentWidth;
        return divWidth; 
    }

    const setHeightState = () => {
        let width = imagesContainer.current.clientWidth;
        let programmedHeight = divHeight(width);
        setHeight(programmedHeight);
    }

    // Get 'width' and 'height' after the initial render and every time the gallery changes
    useEffect(() => {
        setHeightState();
    }, [imagesContainer]);
    
    // Update 'width' and 'height' when the window resizes
    useEffect(() => {
        window.addEventListener("resize", setHeightState);
    }, []);

    return (<>
        {
            (typeof backendData === 'undefined' || backendData === null)
            ? <p>Loading</p>
            : <div className='gallery'>
                <div ref={imagesContainer} id="images-container">
                    <Images backendData={backendData} height={imagesHeight} />
                </div>
            </div>
        }
    </>)
}

// Attributes default values for the props
ImagesContainer.defaultProps = {
    backendData: {defaultUser: 'Yes is default'}
}

// Specifies the type to be attributed to each prop
ImagesContainer.propTypes = {
    backendData: PropTypes.array.isRequired
}

export default ImagesContainer