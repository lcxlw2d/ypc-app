import React from 'react'

class Block extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="cf n_plate">
                <div className="n_cont n_banner">
                    <a href="javascript:;">
                        <span className="img_contain" style={ { background:'url()' , backgroundSize:'100%' } }></span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Block