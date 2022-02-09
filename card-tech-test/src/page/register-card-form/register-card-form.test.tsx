import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import RegisterCard from '.'
import { Card } from '../../store/startState'

describe('Register card form', () => {
    const renderCardForm = () => {
        return render(
            <BrowserRouter>
                <RegisterCard />
            </BrowserRouter>)
    }

    const state: Card = {
        number: 1234,
        cvc: 111,
        expiry: '03/12'
    }

    beforeEach(() => {
        window.matchMedia = window.matchMedia || function () {
            return {
                matches: false,
                addListener: function () { },
                removeListener: function () { }
            };
        };
    })

    it('renders without crashing', () => {
        renderCardForm()
    })

    it('should render number field', () => {
        const { queryAllByLabelText } = renderCardForm()
        expect(queryAllByLabelText("Credit card number").length).toBe(1)
    })

    it('should render cvc field', () => {
        const { queryAllByLabelText } = renderCardForm()
        expect(queryAllByLabelText("cvc").length).toBe(1)
    })

    it('should render expiry field', () => {
        const { queryAllByLabelText } = renderCardForm()
        expect(queryAllByLabelText("Expiry").length).toBe(1)
    })

    it('should have submit button', () => {
        const { findAllByText } = renderCardForm()
        expect(findAllByText('Submit')).toBeTruthy()
    })

    it('should require a number in card number', async () => {
        const { container } = renderCardForm()

        state.number = undefined
        fireInputsEvent(container, state)

        await act(async () => {
            let form = container.querySelector('#register-form')
            form === null ? expect(true).toBeFalsy() : fireEvent.submit(form)
        })
        
        expect(document.getElementsByTagName("input")[0].validity.valid).toBeFalsy()
    })

    it('should pass a valid number in card number', async () => {
        const { container } = renderCardForm()

        state.number = 1234
        fireInputsEvent(container, state)

        await act(async () => {
            let form = container.querySelector('#register-form')
            form === null ? expect(true).toBeFalsy() : fireEvent.submit(form)
        })
        
        expect(document.getElementsByTagName("input")[0].validity.valid).toBeTruthy()
    })

    it('should require a cvc in card cvc', async () => {
        const { container } = renderCardForm()

        state.cvc = undefined
        fireInputsEvent(container, state)

        await act(async () => {
            let form = container.querySelector('#register-form')
            form === null ? expect(true).toBeFalsy() : fireEvent.submit(form)
        })
        
        expect(document.getElementsByTagName("input")[1].validity.valid).toBeFalsy()
    })

    it('should pass a valid cvc number in card cvc', async () => {
        const { container } = renderCardForm()

        state.cvc = 123
        fireInputsEvent(container, state)

        await act(async () => {
            let form = container.querySelector('#register-form')
            form === null ? expect(true).toBeFalsy() : fireEvent.submit(form)
        })
        
        expect(document.getElementsByTagName("input")[1].validity.valid).toBeTruthy()
    })

    it('should require an expiry in card expiry', async () => {
        const { container } = renderCardForm()

        state.expiry = undefined
        fireInputsEvent(container, state)

        await act(async () => {
            let form = container.querySelector('#register-form')
            form === null ? expect(true).toBeFalsy() : fireEvent.submit(form)
        })
        
        expect(document.getElementsByTagName("input")[2].validity.valid).toBeFalsy()
    })

    it('should pass a valid expiry in card expiry', async () => {
        const { container } = renderCardForm()

        state.expiry = "12/12"
        fireInputsEvent(container, state)

        await act(async () => {
            let form = container.querySelector('#register-form')
            form === null ? expect(true).toBeFalsy() : fireEvent.submit(form)
        })
        
        expect(document.getElementsByTagName("input")[2].validity.valid).toBeTruthy()
    })

    function fireInputsEvent(container: HTMLElement, parameters: Card): void {
        const cardNumber = container.querySelector("#register-form_ccNumber")
        const cardCvc = container.querySelector('#register-form_ccCvc')
        const cardExpiry = container.querySelector('#register-form_ccExpiry')

        if (cardNumber !== null) {
            fireEvent.change(cardNumber, {
                target: { value: parameters.number }
            })
        }
        if (cardCvc !== null) {
            fireEvent.change(cardCvc, {
                target: { value: parameters.cvc }
            })
        }
        if (cardExpiry !== null) {
            fireEvent.change(cardExpiry, {
                target: { value: parameters.expiry }
            })
        }
    }
})
