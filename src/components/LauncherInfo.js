import React from 'react';

const LauncherInfo = props => {
  return(
    <div>
      <h2 className="launcher-name">{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  )
}

export default LauncherInfo;
