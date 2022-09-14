import tw from "tailwind-styled-components"
import { useState } from 'react'

import PerformanceNavination from "./ui/nav/performance/PerformanceNavigation"

/* Styles */

const Background = tw.div`
  w-screen 
  h-screen
  bg-bizgu-black 
  relative
  desktop:min-h-screen
  tablet:min-h-[900px]
  mobile:h-[667px]
`
const Logo = tw.img`
  absolute 
  desktop:left-[120px]
  desktop:top-[30px]
  tablet:left-[40px]
  tablet:top-[20px]
  mobile:left-[20px]
  mobile:top-[20px]
`
const Button = tw.button`
  leading-[140%] 
  text-bizgu-black 
  hover:text-bizgu-white 
  bg-bizgu-white 
  hover:bg-bizgu-red 
  font-raleway 
  text-sm 
  font-normal 
  rounded-full 
  flex 
  flex-row	
  justify-center 
  items-start 
  gap-2.5 
  pt-2.5 
  pb-2.5 
  pl-7 
  pr-7
`
const SaleButton = tw(Button)`
  absolute 
  top-5 
  desktop:right-[120px]
  tablet:right-[40px] 
  mobile:right-[20px]
  mobile:top-[22px] 
`
const BgContainer = tw.div`
  absolute
  desktop:w-[880px]
  desktop:h-[700px]
  tablet:w-screen
  tablet:h-[750px]
  mobile:w-screen
  mobile:h-[539px]
  right-0
  bottom-0
`

const BlurBg = tw.div`
  absolute
  desktop:w-[206px]
  desktop:h-[156px]
  desktop:left-[497px]
  desktop:top-[400px]
  tablet:w-[220.71px]
  tablet:h-[167.14px]
  tablet:left-[532.5px]
  tablet:top-[435px]
  tablet:bg-[#0B0B0B]
  tablet:opacity-40
  tablet:blur-[54.6429px]
  mobile:invisible
`

const GradientBg = tw.div`
  absolute
  desktop:h-[300px]
  tablet:h-[332.14px]
  mobile:h-[400px]
  w-full
  left-0
  desktop:bottom-0
  tablet:bottom-0
  mobile:bottom-16
  bg-gradient-to-t from-bizgu-black to-transparent
`

const TsoyBg = tw.div`
  desktop:bg-[url('/tsoy_desktop.png')]  
  tablet:bg-[url('/tsoy_tablet.png')] 
  mobile:bg-[url('/tsoy_mobile.png')]  
  bg-no-repeat
  absolute
  desktop:w-[880px]
  desktop:h-[700px]
  desktop:top-0
  desktop:left-0
  tablet:w-[942.86px]
  tablet:h-[750px]
  tablet:left-0
  tablet:top-0
  mobile:w-[375px]
  mobile:h-[481px]
  mobile:left-[-4px]
  mobile:top-[-37px]
`

const TitleTag = tw.h3`
  font-raleway 
  not-italic
  font-bold
  text-bizgu-red
  text-2xl
  uppercase
  opacity-90
  leading-[100%]
`
const VersionTag = tw(TitleTag)`
  absolute
  desktop:left-[120px]
  desktop:top-[399px]
  tablet:left-[40px]
  tablet:top-[527px]
  mobile:left-[20px]
  mobile:top-[353px]
  mobile:text-lg
`

const Title = tw.h1`
  font-raleway 
  not-italic
  font-medium
  desktop:text-[80px]
  tablet:text-6xl
  text-bizgu-white
  flex
  flex-end
  leading-[100%]
`

const ChildsTitle = tw(Title)`
  absolute
  desktop:w-[660px]
  desktop:h-[160px]
  desktop:left-[120px]
  desktop:top-[463px]
  tablet:w-[488px]
  tablet:h-[120px]
  tablet:left-[40px]
  tablet:top-[597px]
  mobile:w-[335px]
  mobile:h-[80px]
  mobile:left-[20px]
  mobile:top-[401px]
  mobile:text-4xl
`

const Main = tw.main`
  font-raleway 
  not-italic
  font-normal
  text-base
  text-bizgu-white
  leading-[140%]
  tracking-widest
`

const ChildsMain = tw(Main)`
  absolute
  desktop:left-[820px]
  desktop:top-[528px]
  desktop:w-[500px]
  desktop:h-[88px]
  tablet:left-[40px]
  tablet:top-[742px]
  tablet:w-[488px]
  tablet:h-[88px]
  mobile:w-[335px]
  mobile:h-[126px]
  mobile:left-[20px]
  mobile:top-[501px]
  mobile:text-[15px]
`

const PerformanceNavPosition = tw.div`
  absolute
  desktop:top-[145px]
  desktop:left-[120px]
  tablet:top-[138px]
  tablet:left-[40px]
  mobile:top-[105px]
  mobile:left-[20px]
`

/* component */

const App = () => {

  const clockPath = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" 
  const locationPath = "M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" 

  const locationLink = 'https://www.google.com/maps/place/%D0%9B%D0%B5%D0%BD%D0%B4%D0%BE%D0%BA/@59.9238336,30.2947165,17z/data=!4m12!1m6!3m5!1s0x469630e342aa5c09:0x81da20e0f21c6df3!2z0JvQtdC90LTQvtC6!8m2!3d59.9238336!4d30.2969052!3m4!1s0x469630e342aa5c09:0x81da20e0f21c6df3!8m2!3d59.9238336!4d30.2969052'

  const [count, setCount] = useState(0)
  const [navigationData, setNavigationData] = useState({
    'items':[
      {'path':clockPath, 'value':'8-9 октября • 19:00'},
      {'path':locationPath, 'value':'Киностудия Лендок', 'link':locationLink}
    ]
  })

  return (
    <Background>
      <BgContainer>
        <TsoyBg alt="Tsoy background"/>
        <BlurBg />
        <GradientBg />   
      </BgContainer>
      <Logo src="/logo-stb.svg" alt="Vite logo" />
      <SaleButton>Купить билет</SaleButton>
      <PerformanceNavPosition>
        <PerformanceNavination data={navigationData} />
      </PerformanceNavPosition>
      <VersionTag>#Concert Version</VersionTag>
      <ChildsTitle>Дети проходных <br />дворов. Vol. 2.0</ChildsTitle>
      <ChildsMain>
        Новый звук, авторские аранжировки, в которых синтезируются самые неожиданные стили, а актёры делятся своими мыслями в различных формах. <br/>Vol.2.0 о том, как звучит «КИНО» и голос Цоя сегодня. 
      </ChildsMain>
    </Background>
  )
}

export default App
