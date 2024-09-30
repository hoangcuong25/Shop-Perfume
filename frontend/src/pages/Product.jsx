import { useContext } from "react";
import { ShopContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Breadscrum from "../components/Breadscrumb/Breadscrum";
import Description from "../components/Description/Description";
import Recommend from "../components/Recommend/Recommend";

const Product = () => {

    const { all_item } = useContext(ShopContext);
    const { idProduct } = useParams();
    const product = all_item?.find((product) => product.id === Number(idProduct));

    return (
        <div>
            <Breadscrum product={product} />
            <ProductDisplay product={product} />
            <Description />
            <Recommend />
        </div>
    );
}

export default Product;