import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import '../assets/css/main.css'

import Nav from '../components/Nav'
import Activity from '../components/Activity'
import Recmd from '../components/Recmd'
import Block from '../components/Block'

class Index extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // fetch('../../static/mock/homepage.json')
        // .then(resp => resp.json())
        // .then(data => {
        //     this.setState({
        //         isLoading:false,
        //         data
        //     })
        // })
    }


    render() {
        console.log(this.props,'index.jsx的props')
        if(this.props.homepageData.onReady){
            const navData = this.props.homepageData.items.nav
            const activityData = this.props.homepageData.items.activity
            return (
                <div className="content">
                    {/* Nav Menu */}
                    <Nav data={ navData } />
            
                    {/* activity */}
                    <Activity data={ activityData } />
            
                    {/* 热门 */}
                    <Recmd />
            
                    {/* block */}
                    <Block />
                    {/* 定期 */}
                    <div className="cf n_plate">
                        <h3 className="cf n_h3">
                            <a className="n_more" href="javascript:;">固定期限 省心理财</a>
                            <span className="n_tit">精选定期</span>
                        </h3>
                        <div className="n_cont">
                            <ul className="cf n_list2">
                                <li className="tit">
                                    <div className="list_left l_box">
                                        <span className="n_redIncomes posi"><b>23.64</b><em>%</em></span>
                                        <span className="n_gray">
                                            近一年收益率
                                        </span>
                                    </div>
                                    <div className="list_right">
                                        <span className="n_title"><i>手快才有赚钱机会</i><s className="tip_title tip_1"></s></span>
                                        <span className="n_detail"><em>兴全恒益债券基金</em> </span>
                                    </div>
                                </li>
                                <li className="tit">
                                    <div className="list_left l_box">
                                        <span className="n_redIncomes minus"><b>-13.41</b><em>%</em></span>
                                        <span className="n_gray">
                                            近一年收益率
                                        </span>
                                    </div>
                                    <div className="list_right">
                                        <span className="n_title"><i>1基搞定 2种投资</i><s className="tip_title tip_2"></s></span>
                                        <span className="n_detail"><em>兴全恒益债券基金</em> </span>
                                    </div>
                                </li>
                                <li className="tit">
                                    <div className="list_left l_box">
                                        <span className="n_redIncomes posi"><b>31.72</b><em>%</em></span>
                                        <span className="n_gray">
                                            近一年收益率
                                        </span>
                                    </div>
                                    <div className="list_right">
                                        <span className="n_title"><i>手快才有赚钱机会</i><s className="tip_title tip_3"></s></span>
                                        <span className="n_detail"><em>前海开源沪港深蓝筹</em> </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* block */}
                    <div className="cf n_plate">
                        <div className="n_cont n_banner">
                            <a href="javascript:;">
                                <span className="img_contain" style={ { background:'url()' , backgroundSize:'100%' } }></span>
                            </a>
                        </div>
                    </div>
                    {/* 活期 */}
                    <div className="cf n_plate">
                        <h3 className="cf n_h3">
                            <a className="n_more" href="javascript:;">闲置资金 安心理财</a>
                            <span className="n_tit">精选活期</span>
                        </h3>
                        <div className="n_cont">
                            <ul className="cf n_list2">
                                <li className="tit">
                                    <div className="list_left l_box">
                                        <span className="n_redIncomes posi"><b>23.64</b><em>%</em></span>
                                        <span className="n_gray">
                                            近一年收益率
                                        </span>
                                    </div>
                                    <div className="list_right">
                                        <span className="n_title"><i>手快才有赚钱机会</i><s className="tip_title tip_1"></s></span>
                                        <span className="n_detail"><em>兴全恒益债券基金</em> </span>
                                    </div>
                                </li>
                                <li className="tit">
                                    <div className="list_left l_box">
                                        <span className="n_redIncomes minus"><b>-13.41</b><em>%</em></span>
                                        <span className="n_gray">
                                            近一年收益率
                                        </span>
                                    </div>
                                    <div className="list_right">
                                        <span className="n_title"><i>1基搞定 2种投资</i><s className="tip_title tip_2"></s></span>
                                        <span className="n_detail"><em>兴全恒益债券基金</em> </span>
                                    </div>
                                </li>
                                <li className="tit">
                                    <div className="list_left l_box">
                                        <span className="n_redIncomes posi"><b>31.72</b><em>%</em></span>
                                        <span className="n_gray">
                                            近一年收益率
                                        </span>
                                    </div>
                                    <div className="list_right">
                                        <span className="n_title"><i>手快才有赚钱机会</i><s className="tip_title tip_3"></s></span>
                                        <span className="n_detail"><em>前海开源沪港深蓝筹</em> </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null
        }
        
        
    }

} 

const select = state => ({
    homepageData:state.posts
})

export default connect(select)(Index)
