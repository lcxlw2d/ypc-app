import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './style/main.css'

import Nav from './nav/Nav'
import Activity from './activity/Activity'
import Recmd from './recmd/Recmd'
import Banner from './banner/Banner'

class Index extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props,'index.jsx的props')
        if(this.props.homepageData.onReady){
            const { 
                nav:navData,
                activity:activityData,
                hotFund:hotFundData,
                regular:regularData,
                current:currentData,
                banners:bannerData 
            } = this.props.homepageData.items
            return (
                <div className="content">
                    {/* Nav Menu */}
                    <Nav data={ navData } />
            
                    {/* activity */}
                    <Activity data={ activityData } />
            
                    {/* 热门 */}
                    <Recmd data={ hotFundData } />
            
                    {/* block */}
                    <Banner data={ bannerData } />
                    {/* 定期 */}
                    <Recmd data={ regularData } />
                    {/* block */}
                    <Banner data={ bannerData } />
                    {/* 活期 */}
                    <Recmd data={ currentData } />
                    
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
