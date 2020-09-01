import React from 'react'
import { Menu, Input, Icon, Label, Image, Header } from 'semantic-ui-react'

function Footer({className}) {

    return (
        <Menu className='menu_background p-4 m-0' size='massive' secondary>
            <Menu.Item>        
                <Header as='h4' inverted>Odiance © 2020 Copyright</Header>
            </Menu.Item>
        </Menu>
    )
}

export default Footer