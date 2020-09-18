import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Label, Image, Button, Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import MobileDetect from "mobile-detect";

const DesktopContainer = ({children, getWidth, props}) => (
    <Responsive
        fireOnMount
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
    >
        <Menu id='navbar' className='menu_background p-4 m-0' size='massive' secondary>
            
            <Menu.Item as={Link} to='/' header>
                <Image src={require('../../assets/images/odiance-logo.svg')} size='small' />
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item name='LIVE' as={Link} to='/live'>
                    <div className="h4 site-font text-white">LIVE</div>
                </Menu.Item>

                <Menu.Item onClick={()=>props.handleTogglePane('account')}>
                    {
                        props.auth.isAuthenticated ? 
                        <Icon size='large' name='user circle' inverted /> :
                        <div className="h4 site-font text-white">LOGIN</div>
                    }
                </Menu.Item>

                <Menu.Item>
                    <Button onClick={()=>props.handleTogglePane('cart')} icon inverted className="cart-btn">
                        <Icon size='large' name='cart' />
                        <Label style={{zIndex:0}} color='red' floating>{props.itemsInCartCount}</Label>
                    </Button>
                </Menu.Item>

            </Menu.Menu>
        </Menu>
    </Responsive>
)

const MobileContainer = ({children, getWidth, props}) => (
    <Responsive
        fireOnMount
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
    >
        <Menu className='menu_background p-4 m-0' size='massive' secondary>
            
            <Menu.Item as={Link} to='/' header className="d-block">
                <Image src={require('../../assets/images/odiance-logo.svg')} size='small' />
            </Menu.Item>
        </Menu>
        <Menu className='menu_background p-4 m-0' size='massive' secondary>
            <Menu.Item style={{color:'white'}} as={Link} to='/live'>
                LIVE
            </Menu.Item>

            <Menu.Item as={Link} to='/account'>
                {
                    props.auth.isAuthenticated ? 
                    <Icon size='large' name='user circle' inverted /> :
                    <span className="text-white">LOGIN</span>
                }
            </Menu.Item>

            <Menu.Item>
                <Button as={Link} to='/cart' icon inverted className="cart-btn">
                    <Icon size='large' name='cart' />
                    <Label style={{zIndex:0}}color='red' floating>{props.itemsInCartCount}</Label>
                </Button>
            </Menu.Item>
        </Menu>
    </Responsive>
)

const ResponsiveContainer = ({ children, getWidth, props }) => {
    return (
    <React.Fragment>
      <DesktopContainer getWidth={getWidth} props={props}>{children}</DesktopContainer>
      <MobileContainer getWidth={getWidth} props={props}>{children}</MobileContainer>
    </React.Fragment>
    )
}

const getWidthFactory = isMobileFromSSR => () => {
    const isSSR = typeof window === "undefined"
    const ssrValue = isMobileFromSSR ? Responsive.onlyMobile.maxWidth : Responsive.onlyTablet.minWidth
    return isSSR ? ssrValue : window.innerWidth
}

function Navbar(props) {

    const md = new MobileDetect(window.navigator.userAgent);
    const isMobileFromSSR = !!md.mobile();

    return (
        <ResponsiveContainer getWidth={getWidthFactory(isMobileFromSSR)} props={props} />
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


// function Navbar(props) {

//     const [initialShows, setInitialShows] = useState([])

//     useEffect(() => {
//         if (props.shows && (props.shows.length > initialShows.length)) {
//             setInitialShows(props.shows)
//         }
//     }, [props.shows]);

//     function handleSearchItems(e) {
//         let filteredShows = _.filter(initialShows, (obj) => {
//             return _.includes(obj.title.toLowerCase(), e.target.value.toLowerCase())
//         })
//         props.filterShows(filteredShows)
//     }

//     return (
//         <Menu id='navbar' className='menu_background p-4 m-0' size='massive' secondary>
            
//             <Menu.Item as={Link} to='/' header>
//                 <Image src={require('../../assets/images/odiance-logo.svg')} size='small' />
//             </Menu.Item>
            
//             <Menu.Item className='search-bar'>
//                 <Input icon={{ name: 'search', link: true }} placeholder='Search...' onChange={handleSearchItems} />
//             </Menu.Item>

//             <Menu.Menu position='right'>
//                 <Menu.Item name='LIVE' color='blue' style={{color:'white'}} as={Link} to='/live'>
//                     LIVE
//                 </Menu.Item>

//                 <Menu.Item onClick={()=>props.handleTogglePane('account')}>
//                     {
//                         props.auth.isAuthenticated ? 
//                         <Icon size='large' name='user circle' inverted /> :
//                         <span className="text-white">LOGIN</span>
//                     }
//                 </Menu.Item>

//                 <Menu.Item>
//                     <Button onClick={()=>props.handleTogglePane('cart')} icon inverted className="cart-btn">
//                         <Icon size='large' name='cart' />
//                         <Label style={{zIndex:0}}color='red' floating>{props.itemsInCartCount}</Label>
//                     </Button>
//                 </Menu.Item>

//                 <Menu.Item>
//                     <Button as={Link} to="/cart">cart</Button>
//                 </Menu.Item>

//             </Menu.Menu>
//         </Menu>
//     )
// }