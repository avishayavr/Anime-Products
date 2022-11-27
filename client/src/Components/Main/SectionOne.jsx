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
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(Math.floor(Math.random() * 8));

  const getData = async ()=>{
    const { data } = await axios.get("http://localhost:8000/api/products");
    setProducts(data);
    // console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="my-5 mx-3 sm:bg-[#fff] sm:opacity-60 rounded-xl">
      <h1 className="text-2xl text-[#fff] sm:text-[#2d2d2d] my-3">Some Products</h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      <MDBCol >
          <MDBCard className="m-2 sm:m-0">
            <MDBCardImage
              src={products[index]?.image}
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="text-xl">{products[index]?.title}</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol >
          <MDBCard className="m-2 sm:m-0">
            <MDBCardImage
              src={products[index+1]?.image}
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="text-xl">{products[index+1]?.title}</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol >
          <MDBCard className="m-2 sm:m-0">
            <MDBCardImage
              src={products[index+2]?.image}
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="text-xl">{products[index+2]?.title}</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol >
          <MDBCard className="m-2 sm:m-0">
            <MDBCardImage
              src={products[index+3]?.image}
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="text-xl">{products[index+3]?.title}</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
