import React from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import { NavLink as Link, Route } from 'react-router-dom'
import routes from 'routes'

import { connect } from 'react-redux'


import '../assets/js/remAdapter'
import '../assets/css/main.css'

import IndexCompo from './index'
import Nav from '../components/Nav'
import Activity from '../components/Activity'

const App = () => (
    <Router>
        <div className='App'>
            <div className="container">
                <div className="header">
                    <a className="icon" href="#"></a>
                    <h1 className="title">优品城</h1>
                    <a className="icon" href="#"></a>
                </div>
                <div className="footer">

                    <ul>
                        <li>
                            <Link to='/' className='bottom_btn home'>首页</Link>
                        </li>
                        <li>
                            <Link to='/my' className='bottom_btn mine'>我的</Link>
                        </li>
                    </ul>

                </div>

                <Route path="/" component={IndexCompo} exact></Route>


                {/* <Router>
                    {renderRoutes(routes)}
                </Router> */}
            </div>

        </div>
    </Router>


)

export default App