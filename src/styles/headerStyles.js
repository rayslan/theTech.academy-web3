import styled from "styled-components"


export const HeaderNav = styled.div`
    height: 0px;
    width: 100%;
    position: absolute;
    top: 72px;
    right: 0;
    left: 0;
    z-index: 99;

`
export const Logo = styled.div`
    a {
        font-size: 1.8rem;
        font-weight: 800;
        color: ${props => props.theme.text}
    }
    span {
        height: 0.5rem;
        width: 0.5rem;
        background: ${props => props.theme.peach};
        margin: 0 4px;
        border-radius: 100%;
        display: inline-block;
        position: relative;
        bottom: 1px;
    }

`

export const Menu = styled.div``