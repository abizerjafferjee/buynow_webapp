import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Segment, Form, Button, Divider, Header } from 'semantic-ui-react'

function Billing(props) {

    const [paymentMethod, setPaymentMethod] = useState('debit card')

    useEffect(() => {
        if ('data' in props.billing) {
            setPaymentMethod(props.billing.data)
        }
    }, [])

    function nextStep() {
        props.setBillingOptions(paymentMethod)
        props.nextStep()
    }

    function handleRadioOnChange(e, obj) {
        setPaymentMethod(obj.value)
    }

    return (
        <div>
        <Segment attached>
            <Form>
                <Header as='h3' attched='top'>Payment options</Header>
                <Segment attached>
                    <Form.Radio
                        name='paymentMethod'
                        value='debit card'
                        label='Debit card'
                        checked={paymentMethod === 'debit card'}
                        onChange={handleRadioOnChange}
                    />

                    <Form.Radio
                        name='paymentMethod'
                        value='credit card'
                        label='Credit card'
                        checked={paymentMethod === 'credit card'}
                        onChange={handleRadioOnChange}
                    />

                    <Form.Radio
                        name='paymentMethod'
                        value='cash on delivery'
                        label='Cash on delivery'
                        checked={paymentMethod === 'cash on delivery'}
                        onChange={handleRadioOnChange}
                    />
                </Segment>
            </Form>
        </Segment>

        <Divider />

        <Button.Group floated='right'>
            <Button primary onClick={(e) => props.previousStep()}>Previous step</Button>
            <Button.Or />
            <Button color='red' onClick={nextStep}>Next step</Button>
        </Button.Group>
    </div>
    )
}

Billing.propTypes = {
    previousStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
}

export default Billing