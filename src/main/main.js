import React from 'react';
import Header from '../header/header.js'
import Group from '../investigation_group/group.js';
import Profile from '../profile/profile.js';

function Main() {

    return (
        <div>
          <header>
            <Header />
          </header>
          <hr></hr>
          <body>
            <Profile />
          </body>
        </div>
      );
}

export default Main;