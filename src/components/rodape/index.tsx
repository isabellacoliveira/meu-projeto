import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css'
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import Principal from '../principal';

function Rodape() {
  const navigate = useNavigate();

  return (
    <>
      <div className='rodape'>
        <p>Desenvolvido por Isabella</p>
      </div>
    </>
  );
}

export default Rodape;
