import { render } from '@testing-library/react'
import MenuPage from '.'
import { GlobalState } from '../../store/startState'

describe("Menu should", () => {
    const state: GlobalState = {
        name: "Scott",
        cards: [
            {
                number: 1234,
                cvc: 123,
                expiry: "12/12"
            }
        ],
        dispatch: (() => null)
    }

    const renderMenu = () => {
        return render(
            <MenuPage />
        )
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

    it("show user settings", () => {
        const { getAllByText } = renderMenu()

        let userSettings = getAllByText("User Settings")

        expect(userSettings).toBeTruthy()
    })

    it("show cards", () => {
        const { getAllByText } = renderMenu()

        let userCards = getAllByText("No cards registered yet")

        expect(userCards).toBeTruthy()
    })
})