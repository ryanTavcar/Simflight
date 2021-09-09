import React from 'react';
import Head from 'next/head'

const HeadMeta = (props) => {

    const {
        homepage = false,
        title,
        viewPort = true,
        description,
        url,
        icon,
        keywords
    } = props;


    return (
        <Head>
            <title>{title}</title>
            <meta name="author" content="Michael Tavcar"></meta>
            {viewPort &&
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" ></meta>
            }
            {homepage && 
                <link rel="canonical" href="https://simflight.com.au/" ></link>
            }
            {icon &&
                <meta rel="icon" href={icon} ></meta>
            }
            {url &&
                <link name="url" href={`https://simflight.com.au/${url}`} ></link>
            }
            {description &&
                <meta name="description" content={description} ></meta>
            }
            {keywords &&
                <meta name="keywords" content={keywords} ></meta>
            }
        </Head>
    );
}

export default HeadMeta;