import React from 'react'
import logo from "./../../src/logo.svg";


const siteName = ('D Lester')
const siteCreator = ('Kieran Walker')
const copyrightYear = (new Date().getFullYear());


function Footer() {
    return (
         <footer>
        <div className="container">
            <div class="row align-items-center">
                <div class="col-12 col-sm-4 siteCopyright">
                <p>Copyright &copy; {siteName} {copyrightYear}</p>
                </div>
                <div class="col-12 col-sm-4 footerLogo">
                <a href="/"><img src={logo} alt={siteName} class="img-fluid d-block mx-auto" /></a>
                </div>
                <div class="col-12 col-sm-4 siteCreator">
                    <p>Site created by <a href="https://www.kieranwalker.co.uk/" target="_blank">{siteCreator}</a></p>
                </div>
            </div>
            </div>

        </footer>
    )
}

export default Footer;
