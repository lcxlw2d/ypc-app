import React from 'react'
import ListItem from './list/List-item'

class Recmd extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.data
        
        console.warn(data)
        
        return (
            <div className="cf n_plate">
                <h3 className="cf n_h3">
                    <a className="n_more" href="javascript:;">{ data.title }</a>
                    <span className="n_tit">{ data.type }<b className="n_hot" style={data.type!=="热门基金"?{visibility:"hidden"}:{}}>HOT</b></span>
                </h3>
                <div className="n_cont">
                    <ul className="cf n_list2">
                        { data.list.map((item,index) => (
                            <ListItem data={ item } key={item.proId} />
                        )) }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Recmd