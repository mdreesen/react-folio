import React from 'react';

// props being passed through
function NavTabs(props) {
    const tabs = ['About', 'Projects', 'Contact'];

    return (
        <ul className="nav nav-tabs">
            {tabs.map(tab => (
                <li className="nav-item" key={tab}>
                    <a href={'#' + tab.toLowerCase()}
                    // whenever a tab is clicked on, the current page is set through the handlePageChange props
                    onClick={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                    }
                    >{tab}</a>
                </li>
            ))}
        </ul>
    )
}

export default NavTabs