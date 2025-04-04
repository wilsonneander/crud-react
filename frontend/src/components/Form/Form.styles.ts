import styled from "styled-components"

export const FormContainer = styled.form`
  margin: 0px auto;
  width: 100%;
  max-width: 448px;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
  padding: 48px;
`

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`

export const Input = styled.input`
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
              rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
              rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
              rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, 
              rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
              rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
              rgba(0, 0, 0, 0) 0px 0px 0px 0px;
              color: #000;
`

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  display: block;
  color: #1a1f36;
`

export const Button = styled.button`
  background-color: rgb(84, 105, 212);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
              rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
              rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, 
              rgb(84, 105, 212) 0px 0px 0px 1px, 
              rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
              rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
              rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  margin-top: 12px;
`

export const PageContainer = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`

export const Background = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
`

export const BackgroundGrid = styled.div`
  display: grid;
  grid-template-columns: [start] 1fr [left-gutter] repeat(16, 86.6px) [left-gutter] 1fr [end];
  grid-template-rows: [top] 1fr [top-gutter] repeat(8, 64px) [bottom-gutter] 1fr [bottom];
  justify-content: center;
  margin: 0 -2%;
  transform: rotate(-12deg) skew(-12deg);
`

export const FormWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 448px;
  z-index: 1;
  position: relative;
`

export const FormTitle = styled.h1`
  letter-spacing: -1px;
  color:rgb(255, 255, 255);
  text-align: center;
  margin-bottom: 24px;
  z-index: 0;
`

export const FormHeader = styled.span`
  display: block;
  font-size: 20px;
  line-height: 28px;
  color: #1a1f36;
  text-align: center;
  margin-bottom: 15px;
`

export const GridItem = styled.div<{ area?: string; bg?: string; animation?: string }>`
  grid-area: ${(props) => props.area || "auto"};
  background: ${(props) => props.bg || "transparent"};
  box-sizing: border-box;
  animation: ${(props) => {
    if (props.animation === "rightLeft") return "animationRightLeft 2s ease-in-out infinite"
    if (props.animation === "leftRight") return "animationLeftRight 2s ease-in-out infinite"
    if (props.animation === "tans3s") return "animationLeftRight 3s ease-in-out infinite"
    if (props.animation === "tans4s") return "animationLeftRight 4s ease-in-out infinite"
    return "none"
  }};
  flex-grow: 1;
`

export const ContentContainer = styled.div`
  padding-top: 24px;
  flex-grow: 1;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`

export const FooterLinks = styled.div`
  padding-top: 24px;
  text-align: center;
  font-size: 14px;
  
  a {
    color: #5469d4;
    text-decoration: none;
    font-weight: 600;
  }
  
  span {
    font-size: 14px;
    color: #1a1f36;
  }
`



