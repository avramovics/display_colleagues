import React from 'react'
import NavBarContainer from '../container/NavBarContainer'
import UsersListContainer from '../container/UsersListContainer'
function DashBoardComponent() {
   return (
            <div className="dashboard bg_color">
                <NavBarContainer />
                <UsersListContainer />
            </div>
    );
}

export default DashBoardComponent;