import Pagina from '@/Components/Pagina';
import apiDeputados from '@/services/apiDeputados';
import Link from 'next/link';
import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap';

const Detalhes = ({ deputados, despesas, profissoes }) => {
    return (
        <Pagina >



            <Row>
            <Col md={3}>
            <Card.Img variant="top" src={deputados.ultimoStatus.urlFoto} />
          </Col>

          <Col md={9}>
            <p><strong></strong>{deputados.nome}</p>
            <p><strong>Partido </strong>{deputados.siglaPartido}</p>
            <p><strong>UF Partido </strong>{deputados.siglaUf}</p>            
            <Link className='btn btn-danger' href={'/deputados/' + deputados.id}>
                           
                            Voltar
                        </Link>
                    </Col>
                
            </Row>

            <h2 className='mt-3'>Despesas</h2>

            <Row>
            
            
    <Table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Descrição</th>
          <th>Valor</th>
          </tr>
      </thead>
      <tbody> 
      {despesas.map(item=>(                   
        <tr>        
          <td>{item.dataDocumento}</td>
          <td>{item.tipoDespesa}</td>
          <td>{item.valorDocumento}</td>          
        </tr>  
        ))}
        </tbody>
        
    </Table>
    </Row>
    <Row>
    <Col md={9}>
            <div>
            <strong>Profissões 2 </strong>
              <ul>
              {profissoes.map(item => (
                <li><p>{item.titulo}</p></li>
              ))}
              </ul>
            </div>

            

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