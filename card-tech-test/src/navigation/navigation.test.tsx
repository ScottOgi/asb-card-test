import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './navigation'

describe('Page layout ', () => {
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
        const menu = renderNavigation().findByLabelText('menu')
        expect(menu).toBeTruthy()
    })

    it('should show back button', () => {
        const menu = renderNavigation().findByLabelText('back')
        expect(menu).toBeTruthy()
    })
})