import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Menu, Input, Icon, Label, Image, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { withRouter, Redirect } from "react-router";

function Navbar(props) {

    const [initialShows, setInitialShows] = useState([])

    useEffect(() => {
        if (props.shows && (props.shows.length > initialShows.length)) {
            setInitialShows(props.shows)
        }
    }, [props.shows]);

    function handleSearchItems(e) {
        let filteredShows = _.filter(initialShows, (obj) => {
            return _.includes(obj.title.toLowerCase(), e.target.value.toLowerCase())
        })

        props.filterShows(filteredShows)
    }

    // function handleOnScroll(e)

    return (
        <Menu id='navbar' className='menu_background p-4 m-0' size='massive' secondary>
            
            <Menu.Item as={Link} to='/' header>
                {/* <Image src={require('../../assets/images/crayfish.png')} size='tiny' /> */}
                <Header inverted as='h1'>Odiance</Header>
            </Menu.Item>
            
            {/* <Menu.Item className='search-bar'>
                <Input icon={{ name: 'search', link: true }} placeholder='Search...' onChange={handleSearchItems} />
            </Menu.Item> */}

            <Menu.Menu position='right'>
                <Menu.Item name='LIVE' color='blue' style={{color:'white'}} as={Link} to='/live'>
                    LIVE
                </Menu.Item>

                <Menu.Item>
                    <Button onClick={()=>props.handleTogglePane('cart')} icon inverted>
                        <Icon size='large' name='cart' />
                        <Label style={{zIndex:0}}color='red' floating>{props.itemsInCartCount}</Label>
                    </Button>
                </Menu.Item>

                <Menu.Item>
                    <Button inverted onClick={()=>props.handleTogglePane('account')} icon><Icon size='large' name='user circle' /></Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

Navbar.propTypes = {
    showSearch: PropTypes.bool.isRequired,
    itemsInCartCount: PropTypes.number.isRequired,
    shows: PropTypes.array,
    filterShows: PropTypes.func.isRequired,
    handleTogglePane: PropTypes.func.isRequired
}

export default Navbar