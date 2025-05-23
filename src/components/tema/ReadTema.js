import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadTema = () => {
    const { id } = useParams();
    const [tema, setTema] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/tema/" + id)
            .then(res => {
                console.log(res);
                setTema(res.data);
            }).catch(err => console.log(err))
    }, [id]);
    return (
        <div className="container shadow-sm">
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className="mb-4" style={{fontWeight:700, letterSpacing:"1px"}}>Detalhes do Tema</h1>
                    <table className="table table-dark" style={{
                        borderRadius: "1rem",
                        overflow: "hidden",
                        borderColor: "#444"
                    }}>
                        <thead style={{background: "#00b894", color: "#fff"}}>
                            <tr>
                                <th>Descrição</th>
                                <th>Data de Criação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{tema.descricao} </td>
                                <td>{tema.createdAt ? new Date(tema.createdAt).toLocaleDateString() : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ReadTema;