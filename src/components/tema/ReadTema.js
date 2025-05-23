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
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes do Tema</h1>
                    <table className="table">
                        <thead>
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