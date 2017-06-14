import React, { Component } from 'react';
import './Sidebar.css'
import SidebarInfo from './SidebarInfo'

class Sidebar extends Component{
    render(){
        return(
            <aside className="large-4 medium-12 columns">
            <SidebarInfo />
          </aside>
        )
    }
}

export default Sidebar