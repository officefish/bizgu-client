
import { useState } from 'react'
import tw from "tailwind-styled-components"
import { useMediaQuery } from 'react-responsive';

const Navigation = tw.nav`
    list-none
    list-outside
    p-0
    m-0
`

const NavigationItem = tw.li`
    desktop:my-3.5
    tablet:my-3
    mobile:my-2.5
    py-px
     
`

const NavigationLink = tw.a`
    hover:text-bizgu-red
    cursor-pointer  
`

const NavigationWrapper = tw.div`
    flex 
    items-center 
    whitespace-nowrap
    
    font-raleway 
    not-italic
    font-medium
    text-bizgu-white
    leading-[100%]
    opacity-90

    desktop:w-[300px]
    tablet:w-[270px]
    mobile:w-[240px]
    h-[24px]

    desktop:text-2xl
    tablet:text-xl
    mobile:text-lg

    group
`

const PerformanceNavigationLinkItem = props => {
    
    const [pathMobile, setPathMobile] = useState(props.pathMobile)
    const [pathDesktop, setPathDesktop] = useState(props.pathDesktop)
    
    return(
        <NavigationItem>
            <NavigationLink href={props.link} target="_blank">
                <NavigationWrapper>
                    {props.isMobile
                    ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-bizgu-white group-hover:fill-bizgu-red">
                        <path clipRule="evenodd" fillRule="evenodd" d={pathMobile} />
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-bizgu-white group-hover:fill-bizgu-red">
                        <path clipRule="evenodd" fillRule="evenodd" d={pathDesktop} />
                    </svg>}
                    <span className='group-hover:text-bizgu-red group-hover:underline ml-3'>{ props.value }</span>
                </NavigationWrapper>
            </NavigationLink>            
        </NavigationItem>
    )
}

const PerformanceNavigationItem = props => {
    
    const [pathMobile, setPathMobile] = useState(props.pathMobile)
    const [pathDesktop, setPathDesktop] = useState(props.pathDesktop)

    return(
        <NavigationItem>
            <NavigationWrapper>
                {props.isMobile
                ? <div className='flex items-center justify-center w-5 h-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-bizgu-white">
                        <path clipRule="evenodd" fillRule="evenodd" d={pathMobile} />
                    </svg>
                </div>
                : <div className='flex items-center justify-center w-6 h-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-bizgu-white">
                        <path clipRule="evenodd" fillRule="evenodd" d={pathDesktop} />
                    </svg>
                </div>}
                <span className='ml-3'>{ props.value }</span>
            </NavigationWrapper>            
        </NavigationItem>
    )
}

const PerformanceNavination = (props) => {
    
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    console.log ({isMobile})

    return (
        <Navigation>
        {props.data.items.map((itemData, i) =>
            itemData.link 
            ? <PerformanceNavigationLinkItem 
                key={i} 
                value={itemData.value} 
                pathDesktop={itemData.pathDesktop}
                pathMobile={itemData.pathMobile}
                link={itemData.link}
                isMobile={isMobile}
                />
            : <PerformanceNavigationItem
                key={i} 
                value={itemData.value} 
                pathDesktop={itemData.pathDesktop}
                pathMobile={itemData.pathMobile}
                isMobile={isMobile}
            />)}
        </Navigation>
    )
}

export default PerformanceNavination