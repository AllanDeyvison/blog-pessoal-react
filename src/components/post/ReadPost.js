import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/posts/" + id)
            .then(res => {
                console.log(res);
                setPost(res.data);
            }).catch(err => console.log(err))
    }, [id]);
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes do Post</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Conteudo</th>
                                <th>Data de Criação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{post.titulo} </td>
                                <td>{post.conteudo} </td>
                                <td>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ""}</td>
                                {/* <td>{new
                                    Date(post.createdAt).toLocaleDateString()}</td>
                                <td>{new
                                    Date(post.updatedAt).toLocaleDateString()}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ReadPost;