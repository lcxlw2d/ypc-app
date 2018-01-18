import React from 'react'

class Nav extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        const data = this.props.data
        return (
            <div className="n_plate nav_n">
                <ul>
                    {/* <li className="icon1"><a tapmode="active" href="#">基金</a></li>
                    <li className="icon2"><a tapmode="active" href="#">定期</a></li>
                    <li className="icon3"><a tapmode="active" href="#" >活期</a></li>
                    <li className="icon4"><a tapmode="active" href="#">高端理财</a></li>
                    <li className="icon5"><a tapmode="active" href="#">黄金宝</a></li>
                    <li className="icon6"><a tapmode="active" href="#">基金定投</a></li>
                    <li className="icon7"><a tapmode="active" href="#" >新发基金</a></li>
                    <li className="icon8"><a tapmode="active" href="#">我的理财</a></li> */}
                    { data.map((v,i) => {
                        return (
                            <li key={i} className={ "icon"+(i+1) }><a tapmode="active" href={ v.href }>{ v.title }</a></li>
                        )
                    }) }
                </ul>
            </div>
        )      
    }
}

export default Nav