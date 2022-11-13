import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function ProductDemo({ product }) {
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className=" flex justify-center mt-3">
      <div className="container border border-[black] flex flex-col sm:flex-row justify-evenly p-7">
        {/* left side */}
        <div className="border border-[black] h-full bg-[#aaa] ">
          <img width={"600px"} src={product.image} alt="" />
        </div>

        {/* right side */}
        <div className="border border-[black] flex justify-between flex-col text-xl h-full">
          {/* div for text  */}
          <div>
            <h1 className="font-bold">{product.title}</h1>
            <p className="flex justify-start">{product.price}$</p>
          </div>

          {/* Sizes */}
          {/* <div className="mt-10">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-gray-900">Size</h4>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Size guide
              </a>
            </div>

            <RadioGroup
              value={selectedSize}
              onChange={setSelectedSize}
              className="mt-4"
            >
              <RadioGroup.Label className="sr-only">
                {" "}
                Choose a size{" "}
              </RadioGroup.Label>
              <div className="grid grid-cols-4 gap-4">
                {product.sizes.map((size) => (
                  <RadioGroup.Option
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className={({ active }) =>
                      classNames(
                        size.inStock
                          ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                          : "bg-gray-50 text-gray-200 cursor-not-allowed",
                        active ? "ring-2 ring-indigo-500" : "",
                        "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <RadioGroup.Label as="span">
                          {size.name}
                        </RadioGroup.Label>
                        {size.inStock ? (
                          <span
                            className={classNames(
                              active ? "border" : "border-2",
                              checked
                                ? "border-indigo-500"
                                : "border-transparent",
                              "pointer-events-none absolute -inset-px rounded-md"
                            )}
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              stroke="currentColor"
                            >
                              <line
                                x1={0}
                                y1={100}
                                x2={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div> */}

          {/* button */}
          <button
            type="submit"
            className="mt-6  flex w-full justify-center  rounded-md border border-transparent bg-[#2d2d2d] py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
}
