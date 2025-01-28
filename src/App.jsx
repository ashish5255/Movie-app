import React from 'react';
import Card from "./Components/Card.jsx";

const App = () => {

    const [hasLiked, setHasLiked] = React.useState(false);
    return (
        <div>


            <Card name="Star Wars" title="A popular movie" rating='5'/>
            <button onClick={() => setHasLiked(!hasLiked)}>{hasLiked? "Liked": "Like"}</button>
        </div>
    );
};

export default App;


