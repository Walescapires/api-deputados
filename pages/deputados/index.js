import Pagina from '@/Components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const index = (props) => {
    return (
        <Pagina titulo="Deputados">
            <Row md={6}>
                {props.deputados.map(item => (
                    <Col className='m-3'>
                        <Card>
                            <Link href={'/deputados/' + item.id}>
                                <Card.Img variant="top" src={item.urlFoto} />
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiDeputados.get('/deputados')
    const deputados = resultado.data.dados

    return {
        props: { deputados },
    }
}