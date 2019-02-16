import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {tabsIndex: 0};
  }

  changeTab(e){
    this.setState({ tabsIndex: e.target });
  }

  render(){
    return (
      <ul>
        <li><h1>{tabInfo[this.tabsIndex].title}</h1>
          <header onClick={this.changeTab()}></header>
          <article>{tabInfo[this.tabsIndex].content}</article>
        </li>
      </ul>
    )
  }

}

export default Tabs;