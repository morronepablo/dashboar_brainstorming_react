import React from 'react'
import ContentTop from '../contenttop/ContentTop'
import ContentAllProducts from './ContentAllProducts'
import ContentLastProduct from './ContentLastProduct'

function ContentCore () {
    return (
        <div className="content-wrapper">
            <div className="row ml-1 mr-1">
                <ContentTop />
            </div>
            <ContentLastProduct />
            <div className="row ml-1 mr-1">
                <ContentAllProducts />
            </div>
        </div>
    )
}

export default ContentCore