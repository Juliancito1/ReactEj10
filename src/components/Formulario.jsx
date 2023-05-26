import { Card , Form , Button } from "react-bootstrap";
import { useState , useEffect } from "react";
import Cardpelicula from "./Cardpelicula";
const Formulario = () => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [genero, setGenero] = useState('');
    const [imagen, setURLImagen] = useState('');
    let peliculas = JSON.parse(localStorage.getItem('listadoPeliculas')) || []
    const [listadoPeliculas, setListadoPeliculas] = useState(peliculas);

    useEffect(() => {
        localStorage.setItem('listadoPeliculas',JSON.stringify(listadoPeliculas))
    },[listadoPeliculas])

    const handleSubmit = (e) => {
        e.preventDefault()
        setListadoPeliculas([...listadoPeliculas,{nombre: titulo, imagen: imagen , descripcion: descripcion , genero: genero}])
        setTitulo('');
        setDescripcion('');
        setGenero('');
        setURLImagen('');
    }


    return (
        <section className='container my-5'>
            <h1 className='display-5 text-center mb-4 bg-dark text-light fw-bold border border-4 border-dark'>Administrador de Peliculas</h1>
            <Card className='border border-3 border-dark'>
                <Card.Header className='bg-danger text-light'>
                    <h2>Completar el formulario para mostrar una pelicula</h2>
                </Card.Header>
                <Card.Body className='bg-danger text-light'>
                    <Form className='row' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formPelicula">
                    <Form.Label>Nombre de la Pelicula</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de la pelicula. Ej: Super Mario Bros" onChange={(e) => setTitulo(e.target.value)} value={titulo}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formImg">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese una url con una imagen de la pelicula. Ej: https://supermariobros.jpg" onChange={(e) => setURLImagen(e.target.value)} value={imagen}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Descripcion de la pelicula</Form.Label>
                    <Form.Control as="textarea" className='Area' rows={4} placeholder="Descripcion de la pelicula" onChange={(e) => setDescripcion(e.target.value)} value={descripcion}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGenero">
                    <Form.Label>Genero</Form.Label>
                    <Form.Control as="select" onChange={(e) => setGenero(e.target.value)} value={genero}>
                    <option>Seleccione el genero de la pelicula</option>
                    <option value="Accion">Accion</option>
                    <option value="Aventura">Aventura</option>
                    <option value="Terror">Terror</option>
                    </Form.Control>
                    </Form.Group>
                    <Button variant="success" className='col-5 ms-2 col-md-2 col-lg-1 ms-md-3' type="submit">
                    Enviar
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
            <Cardpelicula listadoPeliculas={listadoPeliculas}></Cardpelicula>
            </section>
    );
};

export default Formulario;