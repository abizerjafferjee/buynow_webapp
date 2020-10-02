import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ReactGA from 'react-ga'

import AccountPage from './AccountPage';
import CartPage from './CartPage'
import ShowPane from './ShowPane'
import { useWindowSize } from '../helpers/Helpers'

function PaneChild({paneComponent,...props}) {

  ReactGA.modalview(`/${paneComponent}`)

  switch (paneComponent) {
    case 'account':
      return <AccountPage />
    case 'cart':
      return <CartPage />
    case 'show':
      return <ShowPane show={props.show} />
    default:
      return <div className="h3 text-white">Nothing Selected</div>
  }
}
  
function SidePane(props) {
  
    const [width, height] = useWindowSize();
    const paneWidth = width >= 750 ? '500px' : '300px'
    const hidePaneCloseButton = width >= 750 ? true : false

    const [isPaneOpen, setPaneOpen] = useState(false)
    
    useEffect(() => {
        if (props.panel.component !== undefined) {
            setPaneOpen(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.panel])

    return (
      <SlidingPane
        className="pane-background"
        overlayClassName="some-custom-overlay-class"
        isOpen={isPaneOpen}
        title="Go Back"
        onRequestClose={() => {setPaneOpen(false)}}
        width={paneWidth}
        hideHeader={hidePaneCloseButton}>
        <PaneChild  
          paneComponent={props.panel.component}
          show={props.panel.show}
        />
      </SlidingPane>
    )
  }

  const mapStateToProps = (state) => {
    return {
        panel: state.panel
    }
  }
  
  export default connect(mapStateToProps, {})(SidePane);