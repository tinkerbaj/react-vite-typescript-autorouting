import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    );
    }
export default SingleProduct;