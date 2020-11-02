import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const siteEmail = ('davidlester910@yahoo.com')
const sitePhone = '07951752604'

function ContactDetails() {
    return (
        <div className="cDets">
            <ul>
                <li><FontAwesomeIcon icon={['fal', 'boxing-glove']} /><a href="mailto:davidlester910@yahoo.com">{siteEmail}</a></li>
                <li><FontAwesomeIcon icon={['fal', 'boxing-glove']} /><a href="tel:07951752604">{sitePhone}</a></li>
            </ul>
        </div>
    )
}

export default ContactDetails;
