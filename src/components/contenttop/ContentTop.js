import React, { useState, useEffect } from "react";
import SmallCard from './SmallCard'

function ContentTop () {
    const [productTotal, setProductTotal] = useState(0);
    const [categoriesTotal, setCategoriesTotal] = useState(0);
    const [usersTotal, setUsersTotal] = useState(0);

    useEffect(() => {
        fetch("/api/products/all/")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
            setProductTotal(data.countProducts);
            setCategoriesTotal(data.categoriesCount);
          })
          .catch((error) => console.log(error));
      }, []);

      useEffect(() => {
        fetch("/api/users/all/")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
            setUsersTotal(data.total);
          })
          .catch((error) => console.log(error));
      }, []);

      console.log(productTotal);

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800 mt-3">Dashboard</h1>
            </div>
            <div className="row">
                <SmallCard
                    color = "primary"
                    titulo= "Total Productos"
                    icono = "fas fa-boxes"
                    valor={productTotal}
                />
                <SmallCard
                    color= "warning"
                    titulo = "Total Categorías"
                    icono = "fas fa-book-open"
                    valor = {categoriesTotal}
                />
                <SmallCard
                    color= "success"
                    titulo = "Total Usuarios"
                    icono = "fas fa-user"
                    valor = {usersTotal}
                />
            </div>
        </div>
    )
}

export default ContentTop