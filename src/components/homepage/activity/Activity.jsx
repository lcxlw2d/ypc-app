import React from 'react'
//import commonUtils from '../js/common'

class Activity extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const data = this.props.data
        return (
            <div className="n_plate activity_list">
                <div className="chevron"><s></s><em>{ data.actType }</em></div>
                <ul className="">
                    <li className="activity_title">{ data.slogan }</li>
                    <li className="activity_tip">{ data.proName }<s className="tip_title tip_1"></s><s className="tip_title tip_3"></s></li>
                    <li className="activity_yield">
                        <b>{ data.basicRatio }</b><em>%</em>
                    </li>
                    <li className="activity_yieldtype">业绩基准</li>
                    <li className="activity_buybtn buyBtn">立即购买</li>
                </ul>
            </div>
        )
    }
}

export default Activity