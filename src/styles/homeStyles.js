import styled from 'styled-components'
import { motion } from 'framer-motion'


// Banner
export const Banner = styled.div`
    background: ${props => props.theme.background};
    height: 100vh;
    width: 100%;
    position: relative;
    margin-bottom: 296px;
    
`
// Video
export const Video = styled.div`
    height: 100%;
    width: 100%;
    video {
        object-fit: cover;
    }
    
`

// Canvas
export const Canvas = styled.canvas`
    position: absolute;
    top: 50;
    left: 50;
    height: 100%;
    display: block;
        
`

// BannerTitle
export const BannerTitle = styled(motion.h1)`
    position: absolute;
    bottom: 0px;
    left: -15px;
    color: ${props => props.theme.text};
    pointer-events: none;
        
`

// Headline
export const Headline = styled(motion.span)`
   display: block;
   font-size: 10rem;
   font-weight: 900;
   line-weight: 0.76;

        
`