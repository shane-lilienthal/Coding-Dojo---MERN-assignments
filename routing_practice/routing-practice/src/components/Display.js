import { useParams } from "react-router-dom";

const Display = () => {
    const {input, colorOne, colorTwo} = useParams()

    if (isNaN(input)) {
        return ( 
            <h1 style={{color: colorOne, backgroundColor: colorTwo}}>The Word Is: {input}</h1>
         );
    } else {
        return (
            <h1>The Number Is: {input}</h1>
        );
    }
}
 
export default Display;