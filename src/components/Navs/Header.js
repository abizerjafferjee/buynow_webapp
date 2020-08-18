import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Menu, Input, Icon, Label, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { withRouter, Redirect } from "react-router";

import Logo from '../Logo'

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
        <Menu id='navbar' className='' color='blue' inverted size='massive' secondary>
            
            <Menu.Item as={Link} to='/' header>
                {/* <Image src={require('../../assets/images/crayfish.png')} size='tiny' /> */}
                <Header as='h1'>Odiance</Header>
            </Menu.Item>
            
            <Menu.Menu position='right'>
                <Menu.Item id='centeritem'>
                    <Input icon={{ name: 'search', link: true }} placeholder='Search...' onChange={handleSearchItems} />
                </Menu.Item>

                <Menu.Item as={Link} to='/cart'>
                    <Icon size='large' name='ticket' />
                    <Label color='red' floating>{props.itemsInCartCount}</Label>
                </Menu.Item>

                <Menu.Item as={Link} to='/account'>
                    <Icon size='large' name='user circle' />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

Navbar.propTypes = {
    showSearch: PropTypes.bool.isRequired,
    itemsInCartCount: PropTypes.number.isRequired,
    shows: PropTypes.array,
    filterShows: PropTypes.func.isRequired
}

export default Navbar