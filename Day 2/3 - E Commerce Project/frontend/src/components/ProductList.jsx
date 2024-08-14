import { productsList } from "../data/products";
import SingleProduct from "./SingleProduct";

function ProductList()
{
    return (
        <div className="flex flex-row justify-center items-center">

            <div className="max-w-[1080px] mx-auto border-2 flex flex-row flex-wrap justify-center">
                {
                    productsList.map((element , index)=>{
                        return(
                            <SingleProduct key={index} element={element} />
                        )
                    } )
                }                
            </div>

        </div>
    )
}

export default ProductList;