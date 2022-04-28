import React from 'react';
import {Helmet} from 'react-helmet';
const Meta= (props) =>{
    return (
        <Helmet>
            <meta charset="utf-8"/>
            <title>{props.title}</title>

        </Helmet>
    );
};
Meta.defaultProps = {
    title: 'React 연습문제',
    description: 'React.js 예제입니다.',
    keywords: 'React',
    author: 'Young',
    url: window.location.href
};

export default Meta;