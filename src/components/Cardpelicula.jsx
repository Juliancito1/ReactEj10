import { Badge, Button, Card , Col, Form, Row } from "react-bootstrap";

const Cardpelicula = ({listadoPeliculas}) => {
    return (
        <section className="d-flex justify-content-center">
                <Row className="mt-3 container">
            {listadoPeliculas.map((pelicula,indice) => (
            <Col md={6} lg={4} key={indice}>
            <Card className="mb-3">
                <Card.Header className="bg-danger text-center text-light">
                    <div className="">
                        <h3>{pelicula.nombre}</h3>
                    </div>
                </Card.Header>
                <Card.Body className="bg-dark">
                    <img src={pelicula.imagen} alt="Portada pelicula" className="img-fluid mb-3 h-100"/>
                    <article className="bg-danger text-light">
                        <p className="fw-bold">{pelicula.descripcion}</p>
                    </article>
                </Card.Body>
                <Card.Footer className="bg-danger text-light">
                    <h5>Genero<Badge bg="info ms-3">{pelicula.genero}</Badge></h5>
                </Card.Footer>
            </Card>
            </Col>
            ))}
            </Row>
        </section>
    );
};

export default Cardpelicula;