import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useState } from "react";
import CheckoutBtn from "./CheckoutBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} from "../../redux/cartReducer";

export default function Cart({ open, setOpen }) {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  // function to get the total price
  const totalPriceFun = () => {
    let counter = 0;
    cart?.map((product) => {
      counter += product.productQuantity * product.productPrice;
    });
    setTotalPrice(counter);
  };

  // fun to delete product from cart
  const deleteProductFun = (obj) => {
    dispatch(deleteProduct(obj));
  };

  useEffect(() => {
    totalPriceFun();
  }, [cart]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {/* iteration on the cart to display the data */}
                            {cart?.map((product, i) => (
                              <li key={i} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{product.title}</h3>
                                      <p className="ml-4">
                                        $
                                        {+product.productPrice *
                                          +product.productQuantity}
                                      </p>
                                    </div>
                                  </div>
                                  {/* div to change the quantity of the product */}
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex justify-between">
                                      <button
                                        className="bg-[#2d2d2d] w-8 text-[#fff] text-2xl font-bold rounded-md"
                                        onClick={() =>
                                          dispatch(increaseQuantity(product))
                                        }
                                      >
                                        +
                                      </button>
                                      <h1 className="text-xl mx-1">
                                        {product.productQuantity}
                                      </h1>
                                      <button
                                        className="bg-[#2d2d2d] w-8 text-[#fff] text-2xl font-bold rounded-md"
                                        onClick={(e) =>
                                          dispatch(decreaseQuantity(product))
                                        }
                                      >
                                        -
                                      </button>
                                    </div>
                                    {/* remove btn */}
                                    <div className="flex">
                                      <button
                                        onClick={() =>
                                          deleteProductFun(product)
                                        }
                                        type="button"
                                        className="font-medium text-[#2d2d2d]-600"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* total price/checkout div  */}
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                      </div>
                      {/* checkout btn */}
                      <CheckoutBtn cartItems={cart} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
