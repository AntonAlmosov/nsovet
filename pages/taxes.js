import React from 'react';
import Head from 'next/head'
import anime from 'animejs'

import data from './taxes.json'
import Header from './../components/Header'
import TaxesWrapper from './../components/taxes/TaxesWrapper'
import './../css/style.scss'

class Taxes extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data
        }
    }

    componentDidMount(){
        anime({
            targets: '#callButton',
            background: ['linear-gradient(110deg, rgba(255,199,0,1) 0%, rgba(255,254,151,1) 25%, rgba(255,199,0,1) 100%)',
                'linear-gradient(110deg, rgba(255,199,0,1) 0%, rgba(255,254,151,1) 75%, rgba(255,199,0,1) 100%)'],
            duration: 2300,
            direction: 'alternate',
            easing: 'cubicBezier(.1, .05, .1, .3)',
            loop: true,
        })
    }

    render(){
        return(
            <div style={{backgroundColor: '#DCC3A6'}}>
                <Head>
                    <title>Налоговый советник | 3-НДФЛ</title>
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/static/favicon/site.webmanifest" />
                    <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#6b4f38" />
                    <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#7b5638" />
                    <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <Header />
                <style JSX>
                    {`
                        body{
                            background-color: #DCC3A6;
                        }
                    `}
                </style>
                <TaxesWrapper services={this.state.data.services} />
            </div>
        )
    }
    
}

export default Taxes