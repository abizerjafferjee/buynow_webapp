import React from 'react'
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Footer({className}) {

    return (
        <Menu className='menu_background p-4 m-0' size='massive' secondary stackable>
            <Menu.Item>        
                <div className="h4 site-font text-white">Odiance © 2020 Copyright</div>
            </Menu.Item>
            
            <Menu.Item>        
                <div className="h4 site-font text-white"><Link to="/policies">Privacy Policy</Link></div>
            </Menu.Item>

            <Menu.Item>        
                <div className="h4 site-font text-white"><Link to="/faq">FAQ</Link></div>
            </Menu.Item>

        </Menu>
    )
}

export default Footer