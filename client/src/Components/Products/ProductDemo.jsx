import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartReducer";

export default function ProductDemo({ productData }) {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  // function to add product to the car
  const addToCart = () => {
    let isProductExist = Boolean(
      cart?.find((product) => product.title === productData.title)
    );
    //  new product to add to the cart
    const cartProduct = {
      _id: productData._id,
      title: productData.title,
      productPrice: Number(productData.price),
      image: productData.image,
      productQuantity: 1,
    };
    if (isProductExist) return "product exist";
    dispatch(addProduct(cartProduct));
  };

  return (
    <div className="bg-[#aaa] dark:bg-black  dark:text-[#fff] rounded-xl flex flex-col lg:flex-row justify-evenly m-5">
      {/* left side */}
      <div className="flex items-center p-10 lg:w-2/5">
        <img
          className="border-2 w-100 rounded-md"
          src={productData?.image}
          alt=""
        />
      </div>

      {/* right side */}
      <div className="lg:p-10 flex justify-between flex-col text-xl w-full  lg:w-2/5">
        <div className="topRightSide">
          {/* div for text  */}
          <div className="p-5 flex flex-col md:flex-row md:justify-between text-[#2d2d2d] dark:text-[#fff]">
            <h1 className="font-bold">{productData?.title}</h1>
            <p className="flex justify-start font-bold">
              {productData?.price}$
            </p>
          </div>
          {/* button */}
          <button
            onClick={addToCart}
            disabled={productData?.quantity == 0 ? true : false}
            type="submit"
            className="flex w-full justify-center mb-5  rounded-md border-2 border-transparent  hover:border-[#2d2d2d] bg-[#2d2d2d] hover:text-[#2d2d2d] text-[#fff] hover:bg-[#fff] py-3 px-8 text-base font-medium "
          >
            Add To Cart
          </button>
        </div>
        {/* div for text */}
        <div className="text-start hidden lg:block">
          <h1 className="text-xl">More</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quidem harum dolorem impedit tenetur eveniet quasi quam blanditiis
            eaque eos iste veniam excepturi hic vero in et, rerum animi
            quisquam?
          </p>
        </div>
      </div>
    </div>
  );
}
