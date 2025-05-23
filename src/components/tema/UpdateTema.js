import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateTema() {
    const { id } = useParams();
    const [tema, setTema] = useState({
        descricao: ""
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setTema((prev) => ({
            ...prev, [e.target.name]:
                e.target.value
        }));
    };
    useEffect(() => {
        axios.get("http://localhost:8081/tema/" + id)
            .then(res => {
                console.log(res);
                setTema(res.data);
            })
            .catch(err => console.log(err))
    }, [id]);
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/tema/${id}`,
                tema);
            navigate("/tema");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className="container">
                <h1>Formulário para Editar o Tema</h1>
                <form>
                    <div className="mb-3 mt-3">
                        <label className="form-label"> Descrição:</label>
                        <input type="text" className="form-control" id="descricao"
                            placeholder="Descrição do Tema"
                            name="descricao" value={tema.descricao}
                            onChange={handleChange} />
                    </div>
              
                    
                    <button type="submit" className="btn btn-primary"
                        onClick={handleClick}>Alterar</button>
                </form>
                <div className='container d-flex justify-content-center'>
                    <Link to="/tema">Veja todos os temas</Link>
                </div>
            </div>
        </>


    )
}
export default UpdateTema;