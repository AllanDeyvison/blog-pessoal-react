import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdatePost() {
    const { id } = useParams();
    const [post, setPost] = useState({
        titulo: "",
        conteudo: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setPost((prev) => ({
            ...prev, [e.target.name]:
                e.target.value
        }));
    };
    useEffect(() => {
        axios.get("http://localhost:8081/post/" + id)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => console.log(err))
    }, [id]);
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/posts/${id}`,
                post);
            navigate("/post");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className="container shadow-sm">
                <h1 className="mb-4" style={{fontWeight:700, letterSpacing:"1px"}}>Formulário para Editar o Post</h1>
                <form>
                    <div className="mb-3 mt-3">
                        <label className="form-label"> Titulo:</label>
                        <input type="text" className="form-control" id="titulo"
                            placeholder="Título do Post"
                            name="titulo" value={post.titulo}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label"> Conteudo:</label>
                        <input type="text" className="form-control" id="conteudo"
                            placeholder="Conteúdo do Post"
                            name="conteudo" value={post.conteudo}
                            onChange={handleChange} />
                    </div>
              
                    
                    <button type="submit" className="btn btn-primary"
                        onClick={handleClick}>Alterar</button>
                </form>
                <div className='container d-flex justify-content-center'>
                    <Link to="/post">Veja todos os Posts</Link>
                </div>
            </div>
        </>


    )
}
export default UpdatePost;