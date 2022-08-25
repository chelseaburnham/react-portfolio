import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Project() {
  const [page, setPage] = useState("About");

  return (
    <>
      <Header />
      <main>{}</main>
      <Footer />
    </>
  );
}

export { Project };
