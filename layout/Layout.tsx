import {useEffect, useState} from "react";

import Main         from "./Main"
import Header       from "./Header"
import Footer       from "./Footer"
import Wrapper      from "./Wrapper"

import { queryHomeContent } from './../utilis/prismicQueries'
import { client } from './../utilis/prismicHelpers';


import {
    faTv,
    faWifi,
    faUpload,
    faTools
} from "@fortawesome/free-solid-svg-icons";

import {
    faChromecast,
} from "@fortawesome/free-brands-svg-icons"


const Layout = ({children}) => {



    const menuLinks = [
        {
            id: 1,
            name: 'Strona główna',
            hasSubmenu: false,
            url: "/"
        },
        {
            id: 2,
            name: 'Nasze rozwiązania',
            hasSubmenu: true,
            url: '',
            subLinks: [
                {
                    id: 1,
                    icon: faWifi,
                    name: 'LEXELL internet',
                    url: '/clientChoose'
                },
                {
                    id: 2,
                    icon: faTools,
                    name: 'LEXELL help desk IT',
                    url: '/helpDesk'
                },
                {
                    id: 3,
                    icon: faUpload,
                    name: 'LEXELL computer',
                    url: '/computer'
                },
                {
                    id: 4,
                    icon: faUpload,
                    name: 'LEXELL energy',
                    url: '/energy'
                },
                {
                    id: 5,
                    icon: faUpload,
                    name: 'LEXELL smart and security',
                    url: '/smart'
                },
                {
                    id: 6,
                    icon: faUpload,
                    name: 'LEXELL building',
                    url: '/building'
                },
                {
                    id: 7,
                    icon: faUpload,
                    name: 'LEXELL telecom',
                    url: ''
                },
                {
                    id: 8,
                    icon: faUpload,
                    name: 'Fineinvest',
                    url: '/fineinvest'
                },
            ]
        },
        {
            id: 3,
            name: 'O nas',
            hasSubmenu: false,
            url: "/about"
        },
        {
            id: 4,
            name: "Kontakt",
            hasSubmenu: false,
            url: "/contact"
        }

    ]

    const footerLinks = [
        {
            id: 1,
            header: 'Nasze rozwiązania',
            link: [
                {
                    id: 1,
                    name: 'LEXELL internet',
                    url: '/clientChoose'
                },
                {
                    id: 2,
                    name: 'LEXELL help desk IT',
                    url: '/helpDesk'
                },
                {
                    id: 3,
                    name: 'LEXELL computer',
                    url: '/computer'
                },
                {
                    id: 4,
                    name: 'LEXELL energy',
                    url: '/energy'
                },
                {
                    id: 5,
                    name: 'LEXELL smart and security',
                    url: '/smart'
                },
                {
                    id: 6,
                    name: 'LEXELL building',
                    url: '/building'
                },
                {
                    id: 7,
                    icon: faUpload,
                    name: 'LEXELL telecom',
                    url: 'https://telecom.lexell.pl'
                },
                {
                    id: 8,
                    icon: faUpload,
                    name: 'Fineinvest',
                    url: '/fineinvest'
                },
            ]
        },
    ]


    return (
       
        <Wrapper>
            <Header
                links={menuLinks}
                isMobile={children.props.isMobile}
            />
            <Main>
                {children}
            </Main>
            <Footer
                footerLinks={footerLinks}
            />
        </Wrapper>
        
    )
}

export default Layout

// export async function getStaticProps({  previewData }) {
//     const allPosts = await getAllLayouts(previewData)
//     console.log(allPosts.node)
//     return {
//         props: {}
//     }
//   }