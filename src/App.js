import React, { useState } from 'react'
import styled, { css } from 'styled-components'

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
`
const Tab = styled.li`
  position: relative;
  width: 100%;
  max-width: 240px;
  background-color: #dfe1e5;
  padding: 10px 20px;
  ${props =>
    props.active
      ? css`
        z-index: 2;
        border-radius: 8px 8px 0px 0px;
        box-shadow: 0 10px 20px rgba(0,0,0,.5);
        background-color: #FFFFFF;
        z-index: 10;
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
          z-index: 9;
        }`
  }
`

let App = () => {
  let _tabs = [
    { name: 'facebook', active: false },
    { name: 'instagram', active: true },
    { name: 'reddit', active: false },
    { name: 'twitter', active: false }
  ]
  let [tabs, setTabs] = useState(_tabs)

  let handleClick = tabName => {
    setTabs(
      tabs.map(tab =>
        tabName === tab.name
          ? { ...tab, active: true }
          : { ...tab, active: false }
      )
    )
  }
  return (
    <div className="App">
      <Container>
        <TabBar>
          {tabs.map((tab, i) => (
            <Tab
              onClick={() => handleClick(tab.name)}
              active={tab.active ? true : false}
              key={i}
            >
              {tab.active ? console.log(tabs[i - 1]) : null}
              {tab.name}
            </Tab>
          ))}
        </TabBar>
      </Container>
    </div>
  )
}

export default App