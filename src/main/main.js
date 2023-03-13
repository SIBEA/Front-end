import React from 'react';
import Content from '../content/content.js';
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
            <Content />
          </body>
        </div>
      );
}

export default Main;