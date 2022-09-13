import tw from "tailwind-styled-components"
import { useState } from 'react'

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
const ListIcon = tw.img`
  text-bizgu-grey
`
const IconDatetime = tw(ListIcon)`
  absolute
  desktop:w-[18px]
  desktop:h-[18px] 
  desktop:left-[121px]
  desktop:top-[161px]
  tablet:left-[40px]
  tablet:top-[153px]
  tablet:w-[18px]
  tablet:h-[18px] 
  mobile:w-[16px]
  mobile:h-[16px]
  mobile:left-[20px]
  mobile:top-[118px]
`
const IconLocation = tw(ListIcon)`
  absolute
  desktop:w-[16px]
  desktop:h-[22px] 
  desktop:left-[123px]
  desktop:top-[198px]
  tablet:w-[16px]
  tablet:h-[22px] 
  tablet:left-[42px]
  tablet:top-[190px]
  mobile:w-[14px]
  mobile:h-[20px]
  mobile:left-[21px]
  mobile:top-[148px]
`
const ListItem = tw.div`
  font-raleway 
  not-italic
  font-medium
  text-2xl
  text-bizgu-white
  opacity-90
  leading-[100%]
` 
const DatetimeItem = tw(ListItem)`
  absolute
  desktop:left-[149px]
  desktop:top-[158px]
  tablet:left-[68px]
  tablet:top-[150px]
  mobile:left-[46px]
  mobile:top-[113px]
  mobile:text-lg
`
const LocationItem = tw(ListItem)`
  absolute
  desktop:left-[149px]
  desktop:top-[197px]
  tablet:left-[68px]
  tablet:top-[189px]
  mobile:left-[46px]
  mobile:top-[147px]
  mobile:text-lg
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

/* component */

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <Background>
      <BgContainer>
        <TsoyBg alt="Tsoy background"/>
        <BlurBg />
        <GradientBg />   
      </BgContainer>
      <Logo src="/logo-stb.svg" alt="Vite logo" />
      <SaleButton>купить билет</SaleButton>
      <IconDatetime src="/iconClock.svg" alt='datetime' />
      <DatetimeItem>8-9 октября • 19:00</DatetimeItem>
      <IconLocation src='/iconTarget.svg' alt='location' />  
      <LocationItem>Киностудия Лендок</LocationItem>
      <VersionTag>#Concert Version</VersionTag>
      <ChildsTitle>Дети проходных <br />дворов. Vol. 2.0</ChildsTitle>
      <ChildsMain>
        Новый звук, авторские аранжировки, в которых синтезируются самые неожиданные стили, а актёры делятся своими мыслями в различных формах. <br/>Vol.2.0 о том, как звучит «КИНО» и голос Цоя сегодня. 
      </ChildsMain>
    </Background>
  )
}

export default App
