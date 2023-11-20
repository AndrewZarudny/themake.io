import React from 'react';


function Header(props) {
    return (
        <header>
            <title>{props.person.name} {props.person.lastname} - Personal site</title>
            
            {/* SEO tags */}
            <meta name="description" content={props.person.description} />
            <meta name="keywords" content={props.person.keywords} />
            <meta name="author" content={props.person.name} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph (OG) tags */}
            <meta property="og:title" content={props.person.name} />
            <meta property="og:description" content={props.person.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:image" content={props.person.image} />
            <meta property="og:image:alt" content={props.person.name} />
            <meta property="og:site_name" content="Personal Site" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={props.person.name} />
            <meta name="twitter:description" content={props.person.description} />
            <meta name="twitter:image" content={props.person.image} />
            <meta name="twitter:image:alt" content={props.person.name} />

            <h1>{props.person.name} {props.person.lastname} personal site</h1>
            <h2>{props.person.title}</h2> 
        </header>
    );
}
export default Header;
