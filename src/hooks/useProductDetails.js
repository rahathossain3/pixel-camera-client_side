import { useEffect, useState } from "react";

const useItemDetail = itemId => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        //get single item url
        const url = `http://localhost:5000/product/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [itemId]);
    return [product, setProduct]
}
export default useItemDetail;