import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Paleta de cores vibrantes para categorias
const vibrantColors = [
    "#ff6f61", // vermelho vibrante
    "#ffb400", // amarelo vibrante
    "#00b894", // verde vibrante
    "#0984e3", // azul vibrante
    "#6c5ce7", // roxo vibrante
    "#fd79a8", // rosa vibrante
    "#00cec9", // ciano vibrante
    "#e17055", // laranja vibrante
];

const ListPost = () => {
    const [posts, setPosts] = useState([]);
    const [temas, setTemas] = useState([]);
    const [selectedTema, setSelectedTema] = useState('all');

    // Buscar temas e posts
    useEffect(() => {
        const fetchAll = async () => {
            try {
                const temasRes = await axios.get("http://localhost:8081/tema");
                setTemas(temasRes.data);
                const postsRes = await axios.get("http://localhost:8081/posts");
                setPosts(postsRes.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAll();
    }, []);

    // Deletar Posts
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/posts/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };

    // Agrupar posts por tema
    const postsPorTema = temas.map(tema => ({
        ...tema,
        posts: posts.filter(post => post.fk_tema === tema.idTema)
    }));

    // Filtrar posts conforme tema selecionado
    const temasParaExibir = selectedTema === 'all'
        ? postsPorTema
        : postsPorTema.filter(tema => tema.idTema === selectedTema);

    // Função para pegar cor vibrante baseada no índice
    const getColor = (idx) => vibrantColors[idx % vibrantColors.length];

    return (
        <div className="container shadow-sm">
            <h2 className='w-100 d-flex justify-content-center p-3 mb-4' style={{fontWeight:700, letterSpacing:"1px"}}>Listando Posts por Tema</h2>
            {/* Navbar de categorias estilizada */}
            <nav className="mb-4 d-flex flex-wrap align-items-center justify-content-center gap-2" style={{background: "#23272a", borderRadius: "1rem", padding: "1rem"}}>
                <button
                    className={`btn m-1 fw-bold`}
                    style={{
                        background: selectedTema === 'all' ? "#444950" : "#23272a",
                        color: "#fff",
                        border: "none",
                        boxShadow: selectedTema === 'all' ? "0 2px 8px #44495055" : "none",
                        transition: "all 0.2s"
                    }}
                    onClick={() => setSelectedTema('all')}
                >
                    Todos
                </button>
                {temas.map((tema, idx) => (
                    <button
                        key={tema.idTema}
                        className="btn m-1 fw-bold"
                        style={{
                            background: selectedTema === tema.idTema ? getColor(idx) : "#23272a",
                            color: "#fff",
                            border: "none",
                            boxShadow: selectedTema === tema.idTema ? `0 2px 8px ${getColor(idx)}55` : "none",
                            transition: "all 0.2s"
                        }}
                        onClick={() => setSelectedTema(tema.idTema)}
                    >
                        {tema.descricao}
                    </button>
                ))}
            </nav>
            <Link className="btn btn-primary m-1" to="/tema">Listar Temas</Link>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addPost" className="btn btn-success">Adicionar novo Post</Link></p>
                    {temasParaExibir.map((temaObj, idx) => (
                        <div key={temaObj.idTema} className="mb-4">
                            <h4 style={{
                                color: getColor(idx),
                                fontWeight: "bold",
                                letterSpacing: "1px",
                                textShadow: `0 2px 8px ${getColor(idx)}22`
                            }}>
                                {temaObj.descricao}
                            </h4>
                            <table className="table table-bordered table-dark" style={{
                                borderColor: getColor(idx),
                                borderRadius: "1rem",
                                overflow: "hidden"
                            }}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Título</th>
                                        <th>Conteúdo</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {temaObj.posts.length === 0 ? (
                                        <tr>
                                            <td colSpan="4">Nenhum post para este tema.</td>
                                        </tr>
                                    ) : (
                                        temaObj.posts.map((post) => (
                                            <tr key={post.idPostagem}>
                                                <td>{post.idPostagem}</td>
                                                <td>{post.titulo}</td>
                                                <td>{post.conteudo}</td>
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
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ListPost;