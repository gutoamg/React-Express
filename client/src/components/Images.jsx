import React, { useState } from 'react'





// var listenerCallbacks = new WeakMap();

// const handleIntersections = (entries, localObserver) => {
//     entries.forEach(entry => {
//         if (listenerCallbacks.has(entry.target)) {
//             let cb = listenerCallbacks.get(entry.target);

//             if (entry.isIntersecting || entry.intersectionRatio > 0) {
//                 localObserver.unobserve(entry.target);
//                 listenerCallbacks.delete(entry.target);
//                 cb();
//             }
//         }
//     });
// }

// const getIntersectionObserver = (observer) => {
//     obsOptions = {
//         rootMargin: '100px',
//         threshold: '0.15',
//     };

//     if (observer === null) {
//         observer = new IntersectionObserver(handleIntersections, obsOptions);
//     }

//     return observer;
// }

// const useIntersection = (elem, setView) => {
//     var observer = null;

//     useEffect(() => {
//         let target = elem.current;
//         let observer = getIntersectionObserver(observer);
//         listenerCallbacks.set(target, setView);
//         observer.observe(target);

//         return () => {
//             listenerCallbacks.delete(target);
//             observer.unobserve(target);
//         };
//     }, []);
// }






const Images = ({ backendData, height }) => {
    // const [isInView, setIsInView] = useState(false);


    return (<>
        {
            backendData.map((dataObj, index) => (
                <div key={index} className='image' style={{height: `${height}px`}}>
                    <img className='visible-img' src={dataObj.img} alt={dataObj.id} />
                    <p className='photo-name'>{dataObj.id}</p>
                </div>
            ))
        }
    </>)
}

export default Images