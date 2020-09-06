import Link from '../../utils/withRouter';
import Head from 'next/head';
import Router from 'next/router';

import Classes from './Layout.module.css';
import HamMenuNext from "../HamMenu/HamMenuNext";


const Layout = ({ children, title, description, backButton }) => {

    const colors = {
        navBg: '#f0FF00',
        borderColor: '#FF2200',
        textColor: '#333'
    }

    const settings = {
        links: [
            {
                name: 'Home',
                href: '/'
            },
            {
                name: 'Meetings',
                href: '/meetings'
            },
            {
                name: 'Am I An Adult Children?',
                href: '/adultchildren'
            },
            {
                name: 'Events',
                href: '/events'
            },
            {
                name: 'Announcements',
                href: '/announcements'
            }
        ],

        colors: {
            navBg: '#FF2200',
            borderColor: '#f0FF00',
            textColor: '#f0FF00'
        }
    };


    return (
        <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Head>
            <HamMenuNext settings={settings} />
            {/*<div className="container">
            <nav>
                <Link activeClassName="active" href="/">
                    <a>
                        <span className={Classes.Link}>Home</span>
                    </a>
                </Link>

                <Link activeClassName="active" href="/meetings">
                    <a className={Classes.Link}>Mettings</a>
                </Link>
                <Link activeClassName="active" href="/adultchildren">
                    <a className={Classes.Link}>Am I a adult children?</a>
                </Link>
                <Link activeClassName="active" href="/events">
                    <a className={Classes.Link}>Events</a>
                </Link>
                <Link activeClassName="active" href="/announcements">
                    <a className={Classes.Link}>Announcements</a>
                </Link>
            </nav>
            */}
        <div>
            {children}
        </div>

        <style jsx>{`
            .container {
                max-width: 80%;
                margin: 0 auto;
                font-size: 1.1rem;
            }

            .active {
                font-weight: bold;
                font-size: 1.5em;
                /*background-color: #f0FF00;*/
                color: #0070f3;
                text-transform: uppercase;
            }

            nav {
                background: #FF2200;
                padding: 1em;
                border: solid 2px #f0FF00;
            }

            nav > * {
                display: inline-block;
                /*color: black;*/
            }

            nav a {
                text-decoration: none;
                margin: 1em;

            }

            nav .main-title {
                /*font-weight: bold;*/
            }

        `}</style>

    </div>
    );
}


export default Layout;