import React from 'react'

function SmallCard ({color,titulo,icono,valor}) {
    return (
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-${color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}> {titulo}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{valor}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`${icono} fa-2x`} style={{color: '#ccc'}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SmallCard