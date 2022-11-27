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
  const [index, setIndex] = useState(Math.floor(Math.random() * 9));

  const getData = async ()=>{
    const { data } = await axios.get("http://localhost:8000/api/products");
    setProducts(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="m-5">
      <h1 className="text-2xl m-3">Some Products</h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      <MDBCol>
          <MDBCard>
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
        <MDBCol>
          <MDBCard>
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
        <MDBCol>
          <MDBCard>
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
        <MDBCol>
          <MDBCard>
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
