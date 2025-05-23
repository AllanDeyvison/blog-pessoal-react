import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListTema = () => {
    const [tema, setTema] = useState([]);
    //Listar Tema
    useEffect(() => {
        const fetchAllTema = async () => {
            try {
                const res = await
                    axios.get("http://localhost:8081/tema");
                setTema(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllTema();
    }, []);
    //Deletar Tema
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/tema/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container shadow-sm">
            <h2 className='w-100 d-flex justify-content-center p-3 mb-4' style={{fontWeight:700, letterSpacing:"1px"}}>Listando
                Tema</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/post" className="btn btn-primary m-1">Lista de Posts</Link></p>
                    <p><Link to="/addTema" className="btn btn-success">Adicionar novo Tema</Link></p>
                    <table className="table table-bordered table-dark" style={{
                        borderRadius: "1rem",
                        overflow: "hidden",
                        borderColor: "#444"
                    }}>
                        <thead style={{background: "#6c5ce7"}}>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tema.map((tema) => {
                                return (
                                    <tr>
                                        <td>{tema.idTema} </td>
                                        <td>{tema.descricao} </td>
                                        <td>
                                            <Link
                                                to={`/readTema/${tema.idTema}`}
                                                className="btn btn-success mx-2">Ler</Link>
                                            <Link
                                                to={`/updateTema/${tema.idTema}`}
                                                className="btn btn-info mx-2">Editar</Link>
                                            <button
                                                onClick={() => handleDelete(tema.idTema)}
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
export default ListTema;