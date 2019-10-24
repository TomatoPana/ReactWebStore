import React from 'react';

const [current, setCurrent] = React.useState(0);

const slides = [
    {
        id: 1,
        image: "https://picsum.photos/200/300"
    },{
        id: 2,
        image: "https://picsum.photos/200/300"
    },{
        id: 3,
        image: "https://picsum.photos/200/300"
    },{
        id: 4,
        image: "https://picsum.photos/200/300"
    }
]

React.useEffect(() => {
    const next = (current + 1);
});
