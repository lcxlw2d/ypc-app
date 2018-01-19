import React from 'react'

class ListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const data = this.props.data
        return (
            <li className="tit">
                <div className="list_left l_box">
                    <span className={"n_redIncomes"+" "+(parseFloat(data.profitRatio)>0?"posi":"minus") }><b>{ data.profitRatio }</b><em>%</em></span>
                    <span className="n_gray">近一年收益率</span>
                </div>
                <div className="list_right">
                    <span className="n_title"><i>{ data.slogan }</i><s className="tip_title tip_1"></s></span>
                    <span className="n_detail"><em>{ data.proName }</em> </span>
                </div>
            </li>
        )
    }
}

export default ListItem