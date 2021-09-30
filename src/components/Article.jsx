import React from 'react';
import Markdown from "react-markdown";

const Article = ({data}) => {
    return (
        <div>
            {data.title}
        </div>
    );
}

export default Article;