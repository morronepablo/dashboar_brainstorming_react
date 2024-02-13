import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component'

const columnas = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true,
        grow: 0
    },
    {
        name: 'TITULO',
        selector: 'title',
        sortable: true,
        grow: 4
    },
    {
        name: 'PRECIO',
        selector: 'price',
        sortable: true,
        right: true
    },
    {
        name: 'DESC',
        selector: 'discount',
        sortable: true,
        center: true,
        grow: 0
    },
    {
        name: 'CATEGORIA',
        selector: 'category',
        sortable: true,
        grow: 1
    },
    {
        name: 'SUBCATEGORIA',
        selector: 'subcategory',
        sortable: true,
        grow: 1
    }
];

const paginacionOpciones = {
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

function ContentDataTableProducts () {
    const [tablaProducts, setTablaProducts] = useState([]);
    useEffect(() => {
        fetch("/api/products/datatable")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
            setTablaProducts(data.products);
          })
          .catch((error) => console.log(error));
    },[])

    return (
        <div className="content-wrapper">
            <div className="row ml-1 mr-1 mt-4">
                <div className="col-lg-12 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 bg-warning">
                            <h6 className="m-0 font-weight-bold text-gray-800">TODOS LOS PRODUCTOS</h6>
                        </div>
                        <div className="card-body table-responsive">
                            <DataTable 
                                columns={columnas}
                                data={tablaProducts}
                                title="Listado general de productos"
                                pagination
                                paginationComponentOptions={paginacionOpciones}
                                fixedHeader
                                fixedHeaderScrollHeight="300px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentDataTableProducts