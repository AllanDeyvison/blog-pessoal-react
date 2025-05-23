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
        <div className="container shadow-sm">
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className="mb-4" style={{fontWeight:700, letterSpacing:"1px"}}>Detalhes do Post</h1>
                    <table className="table table-dark" style={{
                        borderRadius: "1rem",
                        overflow: "hidden",
                        borderColor: "#444"
                    }}>
                        <thead style={{background: "#ff6f61", color: "#fff"}}>
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