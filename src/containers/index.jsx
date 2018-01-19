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
                    <Block data={ bannerData } />
                    {/* 定期 */}
                    <Recmd data={ regularData } />
                    {/* block */}
                    <Block data={ bannerData } />
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
