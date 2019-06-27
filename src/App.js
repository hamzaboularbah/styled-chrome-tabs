import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
  max-width: 1103px;
  margin: 0 auto;
  border-radius: 5px 5px 0px 0px;
  overflow:hidden;
`
const TabBar = styled.ul`
  margin: 0;
  list-style:none;
  background-color: #DFE1E5;
  height: 45px;
  position: relative; 
`
const Tab = styled.li`
  position:relative;
  display:inline-block;
  width:100%;
  max-width:240px;
  height: 34px;
  background-color: #DFE1E5;
  bottom: -12px;
  padding : 10px 0px 0px 10px; 

${props => props.active ? {
    zIndex: 2,
    borderRadius: "8px 8px 0px 0px",
    boxShadow: "0 10px 20px rgba(0,0,0,.5)",
    backgroundColor: "#FFFFFF",
    "::after, ::before": {
      position: "absolute",
      content: "''",
      background: "transparent",
      width: "15px",
      height: "15px",
      borderRadius: "100%",
      borderWidth: "10px",
      top: "8px",
      borderStyle: "solid",
    },
    "::after": {
      borderColor: "transparent #FFFFFF transparent transparent",
      transform: "rotate(48deg)",
      left: "-25px",
    },
    "::before": {
      borderColor: "transparent transparent transparent #FFFFFF",
      transform: "rotate(-48deg)",
      right: "-25px",
    }
  } : {
      "::before": {
        content: "''",
        position: "absolute",
        width: "1px",
        height: "20px",
        backgroundColor: "gray",
        top: "0", bottom: "0", right: "10px",
        margin: "auto",
        opacity: ".7"

      }
    }}
`

let App = () => {
  return (
    <div className="App">
      <Container>
        <TabBar>
          <Tab key={1}> Facebook</Tab>
          <Tab key={2} active >Instagram</Tab>
          <Tab key={3} >Twitter</Tab>
          <Tab key={4} >Reddit</Tab>
        </TabBar>
      </Container>

    </div >
  );
}

export default App;
