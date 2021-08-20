import React, {useEffect} from 'react'
import { Link } from 'gatsby'

//  styles components
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from '../styles/globalStyles'

import { useGlobalStateContext, useDispatchStateContext } from '../context/globalContext'
// import { useEffect } from 'react'



const Header = () => {
    const dispatch = useDispatchStateContext()
    const {currentTheme} = useGlobalStateContext()

        const toggleTheme = () => {
            if(currentTheme === 'dark') {
                dispatch({type: 'TOGGLE_THEME', theme: 'light'})
            } else {
                dispatch({type: 'TOGGLE_THEME', theme: 'dark'})
            }
        }

        useEffect (() => {
            window.localStorage.setItem("theme", currentTheme)
        }, [currentTheme])



    return <HeaderNav
            animate={{y: 0, opacity: 1}}
            initial={{y: -72, opacity: 0}}
            transition={{duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
            >
        <Container /*fluid*/>
            
            <Flex spaceBetween noHeight>
                <Logo>
                    <Link to="/">[theTech</Link>
                    <span onClick={toggleTheme}></span>
                    <Link to="/">academy]</Link>
                    


                    
                </Logo>
                <Menu>
                    <button>
                        <span></span>
                        <span></span>
                    </button>
                </Menu>
            </Flex>
        </Container>
    </HeaderNav>
    
}
export default Header 