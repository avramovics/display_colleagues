import NavBarContainer from '../container/NavBarContainer'
import UsersListContainer from '../container/UsersListContainer'
import React from 'react';
function DashBoardComponent() { 
    return (
            <div className="dashboard bg_color">
                <NavBarContainer />
                <UsersListContainer />
            </div>
    );
}

export default DashBoardComponent;