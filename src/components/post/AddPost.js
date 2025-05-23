import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddPostagem = () => {
    const [postagem, setPostagem] = useState({
        titulo: "",
        conteudo: "",
        fk_tema: 0,
    });
    const [temas, setTemas] = useState([]);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setPostagem((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/posts",
                postagem);
            navigate("/post");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetch("http://localhost:8081/tema")
            .then(res => res.json())
            .then(data => setTemas(data))
            .catch(err => console.error(err));
    }, []);


    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando
                Postagem</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label"> Titulo:</label>
                            <input type="text" className="form-control" id="titulo"
                                placeholder="Digite o título do Post" name="titulo"
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label"> Conteúdo:</label>
                            <input type="text" className="form-control" id="conteudo"
                                placeholder="Digite o conteúdo do Post" name="conteudo"
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Tema:</label>
                            <select
                                className="form-control"
                                id="fk_tema"
                                name="fk_tema"
                                onChange={handleChange}
                                defaultValue=""
                            >
                                <option value="" disabled>Selecione um tema</option>
                                {temas.map(tema => (
                                    <option key={tema.idTema} value={tema.idTema}>
                                        {tema.descricao} 
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary"
                            onClick={handleClick}>Postar</button>
                        <br />
                        <Link to="/post">Listar Postagems</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddPostagem;