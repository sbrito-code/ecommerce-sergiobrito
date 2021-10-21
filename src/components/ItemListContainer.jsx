import React from 'react';

const ItemListContainer = () => {
    return(
        <div>
            <li>Item 1</li>
            <li>Item 2</li>
        </div>
    );
};

// const Welcome = ({title,text}) => {
//     return(
//         <div>
//             <h1>{title ?? 'Hola clase'}</h1>
//             {text != undefined ? <p>{text}</p>:null}
//         </div>
//     );
// };

export default ItemListContainer;


// const Welcome = (props) => {
//     return(
//         <div>
//             <h1>{props.title ?? 'Hola clase'}</h1>
//             {props?.text === undefined ? <p>{props.text}</p>:null}
//         </div>
//     );
// };
// export default Welcome;
