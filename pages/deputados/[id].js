import Pagina from '@/Components/Pagina';
import apiDeputados from '@/services/apiDeputados';
import Link from 'next/link';
import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap';

const Detalhes = ({ deputados, despesas, profissoes }) => {
  return (
    <Pagina>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={deputados.ultimoStatus.urlFoto} />
            <Card.Body>
              <Card.Title>{deputados.ultimoStatus.nome}</Card.Title>
              <p>Partido: {deputados.ultimoStatus.siglaPartido}</p>
              <p>UF Partido: {deputados.ultimoStatus.siglaUf}</p>
              <Link className='btn btn-danger mt-3' href={'/deputados/'}>Voltar</Link>
            </Card.Body>
          </Card>          
        </Col>      
        
        <Col md={6}>
        <h3 className='mt-3'>Despesas</h3> 
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {despesas.map(item => (
                <tr key={item.id}>
                  <td>{item.dataDocumento}</td>
                  <td>{item.tipoDespesa}</td>
                  <td>{item.valorDocumento}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={2}>
         <h2>Profissões 2</h2>          
          <ul>
            {profissoes.map(item => (
              <li>{item.titulo}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Pagina>
  )
}

export default Detalhes


export async function getServerSideProps(context) {

  const id = context.params.id;

  const perfil = await apiDeputados.get('/deputados/' + id);
  const deputados = perfil.data.dados

  const resDesp = await apiDeputados.get('/deputados/' + id + '/despesas/');
  const despesas = resDesp.data.dados

  const resProf = await apiDeputados.get('/deputados/' + id + '/profissoes/');
  const profissoes = resProf.data.dados

  return {

    props: { deputados, despesas, profissoes },
  }




}