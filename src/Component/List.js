import React from "react";

const List = ({ results }) => {
    const renderedList = results.map((item) => {
        let link = "https:/en.wikipedia.org?curid=" +item.pageid;
        return(
            <div key={item.pageid} className="ui segment">
                <h2>
                <a 
                href={link} 
                className="header" 
                target="_blank" 
                rel="noreferrer"
                >{item.title}</a>
                </h2>
                <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
            </div>
        );
    });


    return renderedList;
}

export default List;