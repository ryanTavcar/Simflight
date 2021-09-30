import React from "react";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import News from './News';

const Blocks = (props) => {
console.log(props)
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
                case "PagesBlocksNews":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <News data={block} />
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