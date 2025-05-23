import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListPost = () => {
    const [posts, setPosts] = useState([]);
    //Listar Posts
    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const res = await
                    axios.get("http://localhost:8081/posts");
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllPosts();
    }, []);
    //Deletar Posts
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/posts/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando
            Posts</h2>
         
                <Link className="btn btn-primary m-1" to="/tema">Listar Temas</Link>
           
            <div className='row '>
                <div className='col-md-12 '>
                    <p><Link to="/addPost" className="btn btn-success">Adicionar novo Post</Link></p>
                    <table className="table table-bordered table-dark ">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Conteúdo</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => {
                                return (
                                    <tr>
                                        <td>{post.idPostagem} </td>
                                        <td>{post.titulo} </td>
                                        <td>{post.conteudo} </td>

                                        <td>
                                            <Link
                                                to={`/readPost/${post.idPostagem}`}
                                                className="btn btn-success mx-2">Ler</Link>
                                            <Link
                                                to={`/updatePost/${post.idPostagem}`}
                                                className="btn btn-info mx-2">Editar</Link>
                                            <button
                                                onClick={() => handleDelete(post.idPostagem)}
                                                className="btn btn-danger">Deletar</button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ListPost;