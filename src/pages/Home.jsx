import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { API_URL, fetchData } from '../api';

const Home = () => {
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        fetchData(`${API_URL}/api/character`)
            .then((response) => response.json())
            .then((data) => setCharacters(data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 bg-secondary">
                    <h3 className="text-center text-white">Listado de Personajes</h3>
                </div>
            </div>
            <div className="row" style={{ height: '370px', overflowY: 'scroll' }}>
                {
                    !!characters &&
                    characters?.results?.length > 0 &&
                    characters?.results?.map((char, i) => {
                        return (
                            <div className="col-md-3 d-flex justify-content-center align-items-center flex-column" key={i}>
                                <Link to={"/character/" + char.id}>
                                    <img src={char.image} alt="" className="img-fluid rounded-circle" width={150} height={150} />
                                    <h4>{char.name}</h4>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                {
                    !!characters && (
                        <div className="col-md-12 d-flex justify-content-around py-3">
                            <button className={"btn btn-primary btn-sm " + (characters.info.prev !== null ? "" : "disabled")}
                                onClick={() => {
                                    fetchData(characters?.info?.prev)
                                        .then((response) => response.json())
                                        .then((data) => setCharacters(data))
                                        .catch((error) => console.log(error))
                                }}>
                                Prev
                            </button>
                            <button className={"btn btn-primary btn-sm " + (characters.info.next !== null ? "" : "disabled")}
                                onClick={() => {
                                    fetchData(characters?.info?.next)
                                        .then((response) => response.json())
                                        .then((data) => setCharacters(data))
                                        .catch((error) => console.log(error))
                                }}>
                                Next
                            </button>
                        </div>
                    )
                }

            </div>
            <div className="row">
                <div className="col-md-12">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Home