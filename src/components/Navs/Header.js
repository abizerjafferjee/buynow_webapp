import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Label, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

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
                <Image src={require('../../assets/images/odiance-logo.svg')} size='small' />
            </Menu.Item>
            
            {/* <Menu.Item className='search-bar'>
                <Input icon={{ name: 'search', link: true }} placeholder='Search...' onChange={handleSearchItems} />
            </Menu.Item> */}

            <Menu.Menu position='right'>
                <Menu.Item name='LIVE' color='blue' style={{color:'white'}} as={Link} to='/live'>
                    LIVE
                </Menu.Item>

                <Menu.Item onClick={()=>props.handleTogglePane('account')}>
                    {
                        props.auth.isAuthenticated ? 
                        <Icon size='large' name='user circle' inverted /> :
                        <span className="text-white">LOGIN</span>
                    }
                </Menu.Item>

                <Menu.Item>
                    <Button onClick={()=>props.handleTogglePane('cart')} icon inverted className="cart-btn">
                        <Icon size='large' name='cart' />
                        <Label style={{zIndex:0}}color='red' floating>{props.itemsInCartCount}</Label>
                    </Button>
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
    handleTogglePane: PropTypes.func.isRequired,
    auth: PropTypes.object
}

export default Navbar