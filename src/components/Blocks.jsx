import React from "react";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import VideoGallery from './VideoGallery';

const Blocks = (props) => {
// console.log(props)
    return (
        <>
        {props.blocks
          ? props.blocks.map(function (block, i) {
              switch (block.__typename) {
                case "PagesBlocksHero":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <Hero data={block} />
                    </React.Fragment>
                  );
                case "PagesBlocksFeatures":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <WhatWeDo data={block} />
                    </React.Fragment>
                  );
                case "PagesBlocksVideoGallery":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <VideoGallery data={block}/>
                    </React.Fragment>
                  );
                default:
                  return null;
              }
            })
          : null}
        </>
    );
}

export default Blocks;