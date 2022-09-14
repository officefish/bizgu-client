
import { useState } from 'react'
import tw from "tailwind-styled-components"

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
    console.log(props.link)    
    return(
        <NavigationItem>
            <NavigationLink href={props.link} target="_blank">
                <NavigationWrapper>
                    <div className='flex items-center justify-center w-[24px] h-[24px]'>
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className='fill-bizgu-white group-hover:fill-bizgu-red'>
                            <path d={props.path} />
                        </svg> 
                    </div>
                    <span className='group-hover:text-bizgu-red group-hover:underline ml-3'>{ props.value }</span>
                </NavigationWrapper>
            </NavigationLink>            
        </NavigationItem>
    )
}

const PerformanceNavigationItem = props => {
    return(
        <NavigationItem>
            <NavigationWrapper>
                <div className='flex items-center justify-center w-[24px] h-[24px]'>
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className='fill-bizgu-white group'>
                        <path d={props.path} />
                    </svg> 
                </div>
                <span className='ml-3'>{ props.value }</span>
            </NavigationWrapper>            
        </NavigationItem>
    )
}

const PerformanceNavination = (props) => {

    return (
        <Navigation>
        {props.data.items.map((itemData, i) =>
            itemData.link 
            ?
            <PerformanceNavigationLinkItem 
                key={i} 
                value={itemData.value} 
                path={itemData.path}
                link={itemData.link}
                />
            : <PerformanceNavigationItem
                key={i} 
                value={itemData.value} 
                path={itemData.path}
            />
        )}
        </Navigation>
    )
}

export default PerformanceNavination