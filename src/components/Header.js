import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <header>
                    <nav className='nav'>
                        <div><a href='#'className='navbar'>SHOP MANAGEMENT</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}



export default Header;
