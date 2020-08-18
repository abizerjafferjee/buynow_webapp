import React from 'react'
import classNames from 'classnames'
import { Menu, Input, Icon, Label, Image } from 'semantic-ui-react'

function Footer({className}) {

    const footerClass= classNames(
        className,
        'site-background'
    );

    return (
        <Menu color='blue' inverted size='massive' secondary>
            <Menu.Item>        
                Odiance © 2020 Copyright
            </Menu.Item>
        </Menu>
    )
}

export default Footer