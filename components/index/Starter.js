import React from 'react';

import css from '../../css/index/starter.scss'

export default () => {
    return(
        <div className={css.starterWrapper} id='about'>
            <style JSX>
                {`
                    @media (max-width: 767px){
                        .starterBG{
                            width: 100vw;
                            height: 100vh;
                            background: url('/static/starterMobile.png') no-repeat;
                            background-size: cover;
                            background-position: center;
                            position: absolute;
                            z-index: -1;
                        }
                    }

                    @media (min-width: 768px){
                        .starterBG{
                            width: 100vw;
                            height: 100vh;
                            background: url('/static/starter.png') no-repeat;
                            background-size: cover;
                            background-position: center;
                            position: absolute;
                            z-index: -1;
                        }
                    }
                `}
            </style>
            <div className='starterBG'></div>
            <div className={css.starter}>
                <div className={css.starterAdress}>
                    Москва, Каширское шоссе,<br/>дом 44, корп. 1 
                </div>
                <div className={css.starterInfo}>
                    <h1>Мы за безопасный<br/>и прибыльный бизнес</h1>
                    <p>Мы находимся на рынке более 10 лет и имеем <span>огромный опыт работы</span> с налоговыми органами и судебными инстанциями</p>
                    <a className={css.starterButton} href='#services' id='shadow'><span>Услуги</span></a>
                    <a className={css.starterCallButton} href='tel:8-499-323-43-95' id='callButton'>
                        <img src='/static/phone.svg' />
                        <span>8 (499) 323-43-95</span>
                    </a>
                </div>
            </div>
        </div>
    )
}