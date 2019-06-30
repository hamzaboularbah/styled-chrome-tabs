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
  width:1000px;
  margin: 0;
  list-style: none;
  background-color: #dfe1e5;
  position: relative;
  padding-top: 5px;
  display: flex;
  padding-right:50px;
`
const Tab = styled.li`
  position: relative;
  width: 100%;
  max-width: 240px;
  background-color: #dfe1e5;
  padding: 10px 10px;
  border-radius: 8px 8px 0px 0px;
  ${props =>
    props.active
      ? css`
        box-shadow: 0 10px 20px rgba(0,0,0,.5);
        background-color: #FFFFFF;
        z-index: 2;
        &::after, &::before {
          position: absolute;
          content: "";
          background: transparent;
          width: 15px;
          height: 15px;
          border-radius: 100%;
          border-width: 10px;
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
        background-color: rgba(169,169,169, 0.1);
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
    transition: all 0.4s;
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

let App = () => {
  let _tabs = [
    { id: 1, name: 'facebook', active: false },
    { id: 2, name: 'facebook', active: false },
    { id: 3, name: 'facebook', active: false },
    { id: 4, name: 'facebook', active: false },
    { id: 5, name: 'facebook', active: false }

  ]
  let [tabs, setTabs] = useState(_tabs)

  let generateNewID = () => {
    return tabs.reduce((prev, item) => {
      return item.id > prev ? item.id + 1 : prev + 1
    }, 0)
  }
  let handleClick = tabID => {
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
  let handleCloseTab = (tabID) => {
    setTabs(tabs.filter(tab => tab.id !== tabID))
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
      </Container>
    </div>
  )
}

export default App