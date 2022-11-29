import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import axios from "axios";

export default function SectionOne() {
 
  return (
    // <!-- Container for demo purpose -->
    <div className="my-24 px-6 mx-auto">
      {/* <!-- Section: Design Block --> */}
      <section className="mb-32 text-[#fff] dark:text-[#2d2d2d] md:text-left">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Latest articles
        </h2>

        <div className="flex flex-wrap mb-6">
          <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://i.pinimg.com/236x/d8/dc/2c/d8dc2c58ac1b24e1076b8f2394843b51.jpg"
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
            <h5 className="text-lg font-bold mb-3">Naruto Shipuden</h5>
            <p className="text-[#fff] dark:text-[#2d2d2d]">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://i.pinimg.com/236x/18/ec/fc/18ecfcf2ba20683f56417a920337e564.jpg"
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
            <h5 className="text-lg font-bold mb-3">Demon Slayer</h5>
            <p className="text-[#fff] dark:text-[#2d2d2d]">
              Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
              orci, nec ornare metus semper sed. Integer volutpat ornare erat
              sit amet rutrum.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://i.pinimg.com/236x/70/e9/d1/70e9d19535e48baa84842cfef880da08.jpg"
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
            <h5 className="text-lg font-bold mb-3">Dragon Ball</h5>
            <p className="text-[#fff] dark:text-[#2d2d2d]">
              Curabitur tristique, mi a mollis sagittis, metus felis mattis
              arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa
              volutpat feugiat. Donec.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
    // <!-- Container for demo purpose -->
  );
}
