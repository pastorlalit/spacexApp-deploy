import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="headWrap">
                    <div className="container">

                        <div className="col-md-3">
                            <img alt ="logo" className="logo" src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png" />
                        </div>
                        <div className="col-md-8"></div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Header;
