import React from 'react'

function Products ({title}) {
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-info  shadow">
                    <div className="card-body">
                        {title}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Products