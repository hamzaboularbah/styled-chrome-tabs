import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1103px;
  margin: 0 auto;
  border-radius: 5px 5px 0px 0px;
  overflow: hidden;
`
const TabBar = styled.ul`
  margin: 0;
  list-style: none;
  background-color: #dfe1e5;
  height: 45px;
  position: relative;
`
const Tab = styled.li`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 240px;
  height: 34px;
  background-color: #dfe1e5;
  bottom: -12px;
  padding: 10px 0px 0px 10px;

  ${props =>
    props.active
      ? {
        zIndex: 2,
        borderRadius: '8px 8px 0px 0px',
        boxShadow: '0 10px 20px rgba(0,0,0,.5)',
        backgroundColor: '#FFFFFF',
        '::after, ::before': {
          position: 'absolute',
          content: "''",
          background: 'transparent',
          width: '15px',
          height: '15px',
          borderRadius: '100%',
          borderWidth: '10px',
          top: '8px',
          borderStyle: 'solid'
        },
        '::after': {
          borderColor: 'transparent #FFFFFF transparent transparent',
          transform: 'rotate(48deg)',
          left: '-25px'
        },
        '::before': {
          borderColor: 'transparent transparent transparent #FFFFFF',
          transform: 'rotate(-48deg)',
          right: '-25px'
        }
      }
      : {
        '::before': {
          content: "''",
          position: 'absolute',
          width: '1px',
          height: '20px',
          backgroundColor: 'gray',
          top: '0',
          bottom: '0',
          right: '10px',
          margin: 'auto',
          opacity: '.7'
        }
      }}
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
              {tab.name}
            </Tab>
          ))}
        </TabBar>
      </Container>
    </div>
  )
}

export default App