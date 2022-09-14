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

  const clockPath = "M10.25,2.375c-4.212,0-7.625,3.413-7.625,7.625s3.413,7.625,7.625,7.625s7.625-3.413,7.625-7.625S14.462,2.375,10.25,2.375M10.651,16.811v-0.403c0-0.221-0.181-0.401-0.401-0.401s-0.401,0.181-0.401,0.401v0.403c-3.443-0.201-6.208-2.966-6.409-6.409h0.404c0.22,0,0.401-0.181,0.401-0.401S4.063,9.599,3.843,9.599H3.439C3.64,6.155,6.405,3.391,9.849,3.19v0.403c0,0.22,0.181,0.401,0.401,0.401s0.401-0.181,0.401-0.401V3.19c3.443,0.201,6.208,2.965,6.409,6.409h-0.404c-0.22,0-0.4,0.181-0.4,0.401s0.181,0.401,0.4,0.401h0.404C16.859,13.845,14.095,16.609,10.651,16.811 M12.662,12.412c-0.156,0.156-0.409,0.159-0.568,0l-2.127-2.129C9.986,10.302,9.849,10.192,9.849,10V5.184c0-0.221,0.181-0.401,0.401-0.401s0.401,0.181,0.401,0.401v4.651l2.011,2.008C12.818,12.001,12.818,12.256,12.662,12.412"
  const locationPath="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"

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
      <SaleButton>купить билет</SaleButton>
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
