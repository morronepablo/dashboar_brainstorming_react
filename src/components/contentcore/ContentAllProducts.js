import React, { useState, useEffect } from "react";
import Products from "./Products";

function ContentAllProducts() {
  const [productsPage, setProductsPage] = useState([]);
  const [cantPage, setCantPage] = useState(0);
  const [pageActual, setPageActual] = useState(1);

  const handlePageNext = () => {
    if (pageActual < cantPage) {
      setPageActual(pageActual + 1);
    }
  };

  const handlePageLast = () => {
    setPageActual(cantPage);
  };

  const handlePagePrevious = () => {
    if (pageActual > 1) {
      setPageActual(pageActual - 1);
    }
  };

  const handlePageFirst = () => {
      setPageActual(1);
  };

  useEffect(() => {
    fetch("/api/products/all/")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setCantPage(Math.ceil(data.products.length / 4));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`/api/products/page?page=${pageActual - 1}&size=4`)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setProductsPage(data.products);
      })
      .catch((error) => console.log(error));
  }, [pageActual]);

  return (
    <React.Fragment>
      {/*<!-- Categories in DB -->*/}
      <div className="col-lg-12 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">
              TODOS LOS PRODUCTOS
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              {productsPage.map((product, index) => {
                return <Products title={product.title} key={index} />;
              })}
            </div>
            <div className="col-12">
              <button
                className="btn btn-success mr-1"
                onClick={handlePageFirst}
              >
                {"|<"}
              </button>
              <button
                className="btn btn-primary mr-3"
                onClick={handlePagePrevious}
              >
                {"<"}
              </button>
              <span>
                {pageActual} / {cantPage}
              </span>
              <button className="btn btn-primary ml-3" onClick={handlePageNext}>
                {">"}
              </button>
              <button className="btn btn-success ml-1" onClick={handlePageLast}>
                {">|"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContentAllProducts;
