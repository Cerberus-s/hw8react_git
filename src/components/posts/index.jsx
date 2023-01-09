import React, {useEffect, useState} from "react";
import styles from "./styles.module.css";
import {useParams} from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




const PostPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const data = await getPost(id)
                setPost(data)
            } catch (e) {

            } finally {
                setIsLoading(false)
            }
        })()
    }, [])

    const getPost = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()
        return data
    }
    

    if (isLoading) {
        return (
            <div className="load">
                <div className="loader">
                <span className="loaderBlock"></span>
                <span className="loaderBlock"></span>
                <span className="loaderBlock"></span>
                <span className="loaderBlock"></span>
                <span className="loaderBlock"></span>
                <span className="loaderBlock"></span>
                <span className="loaderBlock"></span>
                <span className="loaderBlock"></span>
                <span className="loaderBlock"></span>
                </div>
            </div>
        )
    }

    if (!post) {
        return (
         <div>
            no result
         </div>   
        )
    }

    return (
        <div className={styles.postPage}>
            <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {post.title}. id:{post.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {post.body}
                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
        </div>
    )
}

export default PostPage




   