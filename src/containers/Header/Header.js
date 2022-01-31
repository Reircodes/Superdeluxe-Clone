import React from 'react'
import Button from '@material-ui/core/Button'
import './Header.css'


const Header = () => {
    return (
        <section className='header mainone'>
            <div className='header__container mainone__container'>
                <div className="header__container-text">
                    <h1 className='text-gradient'>
                        Building Revolutionary Websites and Apps on the Jamstack
                    </h1>
                    <p>
                        We’ll build your fast, secure, scalable Jamstack experiences to outperform the competition and hang on the wall as art.
                    </p>
                    <Button>Request a Quote</Button>

                </div>

                <div className="header__container-img">
                    <img src='https://www.superdelux.dev/static/5506eafba75528d0700beaece469fc3e/ee604/hero.png' alt='hero img' />

                </div>

            </div>
        </section>
    )
}

export default Header
