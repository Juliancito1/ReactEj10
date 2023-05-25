import { Card , Form , Button } from "react-bootstrap";
import { useState , useEffect } from "react";
const Formulario = () => {

    const [pelicula, setPelicula] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [genero, setGenero] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <section className='container my-5'>
            <h1 className='display-5 text-center mb-4 bg-dark text-light fw-bold border border-4 border-dark'>Administrador de Peliculas</h1>
            <Card className='border border-3 border-dark'>
                <Card.Header className='bg-danger text-light'>
                    <h2>Completar el formulario para crear una cita</h2>
                </Card.Header>
                <Card.Body className='bg-danger text-light'>
                    <Form className='row' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formPelicula">
                    <Form.Label>Nombre de la Pelicula</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de la pelicula. Ej: Super Mario Bros" onChange={(e) => setPelicula(e.target.value)} value={pelicula}/>
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

                    <Button variant="success" className='col-md-1 ms-md-3' type="submit">
                    Enviar
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
            </section>
    );
};

export default Formulario;