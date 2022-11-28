import React from "react";
import Template from "./Template";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage({pageUrl}) {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(pageUrl);
    }, "4000");
  }, []);

  return (
    <div style={{ background: " #141414", height: "100vh" }}>
      <Template />
    </div>
  );
}
