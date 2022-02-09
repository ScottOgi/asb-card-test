import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './navigation'

describe('Page layout ', () => {
    const BASE_URL = "http://localhost/"
    const renderNavigation = () => {
        return render (
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
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

    it('should render without crashing', () => {
        renderNavigation()
    })

    it('should show menu button', () => {
        const menu = renderNavigation().getByLabelText('menu')

        expect(menu).toBeTruthy()
    })

    it('should link to menu page', () => {
        renderNavigation()
        var menu = document.getElementsByTagName("a")["0"]

        expect(menu.href === BASE_URL+"MenuPage").toBeTruthy()
    })

    it('should show back button', () => {
        const { getByRole } = renderNavigation()
        var menu = getByRole("link")

        if (menu !== null){
            fireEvent.click(menu)
        }

        var back = document.getElementsByTagName("a")["0"]

        expect(back.href === BASE_URL).toBeTruthy()
    })
})