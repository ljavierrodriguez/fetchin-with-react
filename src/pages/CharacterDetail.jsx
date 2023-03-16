import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL, fetchData } from '../api';

const CharacterDetail = () => {
    const [character, setCharacter] = useState(null);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetchData(`${API_URL}/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data))
    }, [])

    useEffect(() => {
        fetchData(`${API_URL}/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data))
    }, [id])



    return (
        <>

            {
                !!character ? (
                    <div className="card my-3 shadow">
                        <div className="row g-0">
                            <div className="col-md-4">
                                {
                                    !!character && (
                                        <img src={character?.image} className="img-fluid rounded-start" alt="..." width={'100%'} height="300" />
                                    )
                                }
                            </div>
                            <div className="col-md-8 d-flex flex-column justify-content-between">
                                <div className="card-body">
                                    <h5 className="card-title">{character?.name}</h5>
                                    <p className="card-text">{character?.species}</p>
                                    <p className="card-text"><small className="text-muted">Status: {character?.status}</small></p>
                                </div>
                                <div className="card-footer text-center py-3">
                                    <button className="btn btn-warning btn-sm" onClick={() => navigate('/')}>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="card my-3 shadow">
                        <div className="loader d-flex justify-content-center align-items-center">
                            <div className="spinner-border text-info" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default CharacterDetail