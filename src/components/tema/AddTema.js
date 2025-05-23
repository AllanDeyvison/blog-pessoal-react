import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddTema = () => {
    const [tema, setTema] = useState({
        descricao: ""
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setTema((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/tema",
                tema);
            navigate("/tema");
        } catch (err) {
            console.log(err);
        }
    };




    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando
                Tema</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label"> Descrição:</label>
                            <input type="text" className="form-control" id="descricao"
                                placeholder="Digite a descrição do Tema" name="descricao"
                                onChange={handleChange} />
                        </div>
                        
                        <button type="submit" className="btn btn-primary"
                            onClick={handleClick}>Postar</button>
                        <br />
                        <Link to="/tema">Listar Temas</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddTema;