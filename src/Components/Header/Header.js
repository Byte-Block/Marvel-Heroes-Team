import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import { Navbar, Icon } from 'react-materialize';

const Header = () => {
    return (
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="#">Hero Team</a>}
            centerChildren
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >

        </Navbar>
    )
}

export { Header };