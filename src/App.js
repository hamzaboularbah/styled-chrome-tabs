import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import AddTabButton from './Components/AddButton'
import CloseTabButton from './Components/CloseTabButton'


const Container = styled.div`
  max-width: 1203px;
  margin: 0 auto;
  border-radius: 5px 5px 0px 0px;
  overflow: hidden;

`
const TabBar = styled.ul`
  margin: 0;
  list-style: none;
  background-color: #dfe1e5;
  position: relative;
  padding-top: 5px;
  display: flex;
  padding-right:50px;
  overflow:hidden;
`
const Tab = styled.li`
  position: relative;
  width: 100%;
  max-width: 240px;
  background-color: #dfe1e5;
  padding: 10px 10px;
  border-radius: 8px 8px 0px 0px;
  color: #3C4043;
  text-transform: capitalize;
  font-family : Arial, Helvetica, sans-serif;
  font-size: 13px;

  ${props =>
    props.active
      ? css`
        box-shadow: 0 10px 20px rgba(0,0,0,.2);
        background-color: #FFFFFF;
        z-index: 2;
        &::after, &::before {
          position: absolute;
          content: "";
          background: transparent;
          width: 23px;
          height: 15px;
          border-radius: 100%;
          border-width: 4px;
          top: 13px;
          border-style: solid;
        }
        &::after {
          border-color: transparent #FFFFFF transparent transparent;
          transform: rotate(48deg);
          left: -25px
        }
        &::before {
          border-color: transparent transparent transparent #FFFFFF;
          transform: rotate(-48deg);
          right: -25px
        }
      `
      : css`
       &:hover {
        background-color: rgba(255,255,255, 0.5);
        }
        &::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 20px;
          background-color: gray;
          top: 0;
          bottom: 0;
          right: -1px;
          margin: auto;
          opacity: .7;
          z-index: 1;
        }`
  }
`
const AddTab = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 27px;
    height: 27px;
    border-radius: 100%;
    align-self: center;
    margin-left: 30px;
    cursor: pointer;
    &:hover {
      background-color: rgba(169,169,169, 0.2);
    }
`
const TabContent = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`
const TabName = styled.div`
  user-select:none;
`

const CloseTab = styled.div`
  width:14px;
  height:14px;
  border-radius:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  position: absolute;
  right:10px;
  overflow:hidden;
  &:hover {
    background-color: rgba(169,169,169, 0.2);
  }
`
const MidWrapper = styled.div`
  display :flex;
  align-items:center;
  justify-content:space-between;
  margin-top:4px;
  div {
    margin-right:20px;
  }
   svg {
        &:hover {
          background-color:black;
          border-radius:100%; 
          border-width:10px;
        }
      }
`

const ContorlButtons = styled.div`
  width:100px;
  display: flex;
  flex-direction: row;
  margin-left:16px;
  svg {
    margin-right:20px;
    &:last-child {
      margin-right:0px;
    }
  }
`
const SearchBarContainer = styled.div`
    width:100%;
    input {
    width:99%;
    border-radius: 14px;
    border: 0;
    background-color: #F1F3F4;
    padding: 7px 0px 6px 11px;
      &:focus {
      outline: none;
    }
}
`

const ProfileImage = styled.div`
img {
  border-radius : 100%;
}
`
const SettingButton = styled.div``

let App = () => {
  let _tabs = [
    { id: 1, name: 'facebook', active: false },
    { id: 2, name: 'instagram', active: false },
    { id: 3, name: 'twitter', active: false },
    { id: 4, name: 'reddit', active: false },
    { id: 5, name: 'youtube', active: true }
  ]
  let [tabs, setTabs] = useState(_tabs)

  let generateNewID = () => {
    return tabs.reduce((prev, item) => {
      return item.id > prev ? item.id + 1 : prev + 1
    }, 0)
  }
  let handleClick = (tabID) => {
    setTabs(
      tabs.map(tab =>
        tabID === tab.id
          ? { ...tab, active: true }
          : { ...tab, active: false }
      )
    )
  }
  let handleAddTab = () => {
    setTabs([...tabs.map(tab => ({ ...tab, active: false })), { id: generateNewID(), name: 'empty', active: true }])
  }
  let handleCloseTab = tabID => {
    let setActiveLast = index => {
      newTabs.map(tab => tab.active = false)
      newTabs[newTabs.length - 1].active = true
    }
    let newTabs = tabs.filter(tab => tab.id !== tabID)
    tabs.map((tab, index) => tab.id === tabID && tab.active && newTabs.length > 0 ? index === newTabs.length ? setActiveLast(index) : newTabs[index].active = true : '')
    setTabs(newTabs)
  }

  return (
    <div className="App">
      <Container>
        <TabBar>
          {tabs.map((tab, i) => (
            <Tab
              onClick={() => handleClick(tab.id)}
              active={tab.active}
              key={i}
            >
              <TabContent>
                <TabName>{tab.name}</TabName>
                <CloseTab onClick={(e) => { e.stopPropagation(); handleCloseTab(tab.id) }}>
                  <CloseTabButton />
                </CloseTab>
              </TabContent>
            </Tab>
          ))}
          <AddTab onClick={handleAddTab}>
            <AddTabButton />
          </AddTab>
        </TabBar>
        <MidWrapper>
          <ContorlButtons>
            <svg width="13" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M2.46 6.719l4.134 4.028a.721.721 0 0 1 0 1.033l-.007.007a.75.75 0 0 1-1.046 0L.23 6.613a.721.721 0 0 1-.218-.487.735.735 0 0 1 .002-.288.719.719 0 0 1 .215-.45L5.54.212a.75.75 0 0 1 1.047 0l.007.007a.722.722 0 0 1 0 1.033L2.485 5.257h9.784a.73.73 0 0 1 0 1.462H2.461z" fill="#5F6367" fillRule="nonzero" /></svg>
            <svg width="13" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.54 6.719l-4.134 4.028a.721.721 0 0 0 0 1.033l.007.007a.75.75 0 0 0 1.046 0l5.31-5.174a.721.721 0 0 0 .218-.487.735.735 0 0 0-.002-.288.719.719 0 0 0-.215-.45L7.46.212a.75.75 0 0 0-1.047 0L6.406.22a.722.722 0 0 0 0 1.033l4.109 4.004H.73a.73.73 0 0 0 0 1.462h9.808z" fill="#5F6367" fillRule="nonzero" /></svg>
            <svg width="13" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M13 5.467V0l-2.154 2.213A6.103 6.103 0 0 0 6.264.143C2.805.142 0 3.022 0 6.574 0 10.128 2.805 13 6.264 13c2.613 0 4.851-1.638 5.783-3.977a.819.819 0 0 0 .058-.296c0-.414-.317-.75-.72-.75a.73.73 0 0 0-.654.425c-.02.028-.029.068-.039.097-.73 1.767-2.44 3.01-4.428 3.01-2.652 0-4.804-2.21-4.804-4.934s2.152-4.934 4.804-4.934c1.416 0 2.69.63 3.553 1.627l-2.16 2.22c0-.042 5.343-.021 5.343-.021" fill="#5F6367" fillRule="evenodd" /></svg>
          </ContorlButtons>
          <SearchBarContainer>
            <input placeholder="Search Google or type a URL" />
          </SearchBarContainer>
          <ProfileImage>
            <img src="https://picsum.photos/id/922/20/20" alt="profile-picture" />
          </ProfileImage>
          <SettingButton>
            <svg width="3" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#5F6367" fill-rule="nonzero" /></svg>
          </SettingButton>
        </MidWrapper>


      </Container>

    </div >
  )
}

export default App