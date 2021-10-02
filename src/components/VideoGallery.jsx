import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    List,
    ListItem
} from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
    container: {
    //   border: '1px solid orange',
      marginBottom: 100,
      marginTop: 100,
    },
    imageList: {
        display: 'inline-flex',
        flexDirection: 'row',
        padding: 0,
        height: '10rem',
        width: '100%',
        overflowX: 'scroll',
    },
    listItem: {
        minWidth: '10rem',
    },
    '@global': {
        '*::-webkit-scrollbar': {
            height: '0.8em',
          },

        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.3)'
        },

        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#2D4492',
            borderRadius: '20px'
        }
      }
}));

const VideoGallery = ({data}) => {
    const videoData = data.videoItems;
    const classes = useStyles();
    const [video, setVideo] = useState("");
    const videoRef = useRef();

    const changeVideo = (src) => {
        setVideo(src)
    };

    useEffect(() => {
          videoRef.current.load();
      }, [video]);

    useEffect(() => {
        setVideo(videoData[0].src)
      }, []);

    return (
        <div className={classes.container}>
            <video ref={videoRef} width="100%" height="400" controls autoPlay={true} loop={true}>
                <source src={video} type="video/mp4" />
            </video>

            <section >
                <List className={classes.imageList}>
                    {videoData.map((video) => {
                        // const video = item.video;
                        return (
                            <ListItem key={video.src} className={classes.listItem}>
                            <Image src={video.thumb} layout="fill" alt={video.alt} onClick={() => changeVideo(video.src) }/>
                        </ListItem>
                        )
                    })}
                </List>
            </section>
        </div>
    );
}

export default VideoGallery;
