import React, { useState, useEffect } from "react";
import CategoriesInDb from './CategoriesInDb'
import LastProduct from './LastProduct'

function ContentLastProduct () {
    const [product, setProduct] = useState({});
    //const [lastProducts, setLastProducts] = useState(0);
    const [productLast, setProductLast] = useState(0);
    const [productDiscount, setProductDiscount] = useState(0);
    const [imageLastProduct, setImageLastProduct] = useState('');
    let ultimoReg;
    useEffect(() => {
        fetch("/api/products/all/")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
            ultimoReg = data.products[data.products.length-1].id;
            setProductLast(ultimoReg);
            setProduct(data.products[data.products.length-1])
            //setLastProducts(ultimoReg)
          })
          .catch((error) => console.log(error));
    }, [productLast]);

    useEffect(() => {
        fetch(`/api/product/${productLast}`)
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
            setImageLastProduct(data.data.img);
            setProductDiscount(data.data.discount);
          })
          .catch((error) => console.log(error));
    }, [productLast]);

    return (
        <div className="row ml-1 mr-1">
            {/*<!-- Last Movie in DB -->*/}
            <LastProduct dataProduct = {product} dataImage = {imageLastProduct} dataDiscount = {productDiscount} />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriesInDb />
            {/*<!--End Genres In Db-->*/}		
        </div>
    )
}

export default ContentLastProduct