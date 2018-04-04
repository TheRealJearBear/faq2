import React, { Component } from 'react';
import LauncherInfo from '../components/LauncherInfo';

class LauncherShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      launcherInfo: {}
    }
  }

  componentDidMount(){
    let launcherId = this.props.params.id
    fetch(`/api/v1/launchers/${launcherId}`)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(launcher => {
      this.setState({ launcherInfo: launcher})
    })
  }

  render(){
    return(
      <LauncherInfo
        id={this.state.launcherInfo.id}
        name={this.state.launcherInfo.name}
        bio={this.state.launcherInfo.bio}
      />
    )
  }
}

export default LauncherShow;
