import React from 'react'

class Recmd extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cf n_plate">
                <h3 className="cf n_h3">
                    <a className="n_more" href="javascript:;">人气之选 投资热门</a>
                    <span className="n_tit">热门基金<b className="n_hot">HOT</b></span>
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
                                <span className="n_title"><i>手快才有赚钱机会手快才有赚钱机会</i><s className="tip_title tip_1"></s></span>
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
        )
    }
}

export default Recmd