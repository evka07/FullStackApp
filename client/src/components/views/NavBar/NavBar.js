import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faUserTie, faMobile } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllBagProducts } from '../../../redux/bagRedux';
import styles from '../NavBar/NavBar.module.scss';

const NavBar = () => {
  const bagItems = useSelector(state => getAllBagProducts(state)); 
  const [numberOfBagItems, setNumberOfBagItems] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setNumberOfBagItems(bagItems.length);
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); 
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
  }, [bagItems]);

  return (
    <Navbar bg="light" data-bs-theme="light" className="pb-0" fixed="top" expand="md">
      <div className={styles.customNavbar}>

        <Row className="align-items-center"> 
          
          <Col className="mx-5" >
            <Nav className={styles.link}>
              <div className={styles.mediaBox}>
                <Nav.Link href="#search" className="px-3">
                  <span className={styles.icon}><FontAwesomeIcon icon={faSearch} /></span>
                </Nav.Link>

                <Nav.Link href="#user" className="px-3">
                  <span className={styles.icon}><FontAwesomeIcon icon={faUserTie} /></span>
                </Nav.Link>
                <Nav.Link as={Link} to="/bag" className="px-3">
                  <span className={styles.icon}><FontAwesomeIcon icon={faCartShopping} /></span>
                  {numberOfBagItems > 0 && <span className={styles.badge}>{numberOfBagItems}</span>}
                </Nav.Link>

              </div>
            </Nav>
          </Col>

          <Col className="d-flex justify-content-end">
            <Navbar.Brand href="/home">
              <span className={styles.brand}>
                {isMobileView ? 'MS' : 'MobiSale'}
                <FontAwesomeIcon icon={faMobile} className="px-2" />
              </span>
            </Navbar.Brand>
          </Col>

          <Col className="d-flex justify-content-end">
            <Navbar.Toggle aria-controls="mobile-menu" />
            <Navbar.Collapse id="mobile-menu">
              <Nav className="mx-5">
                <Nav.Link href="/"><span className={styles.link}>Home</span></Nav.Link>

                <div className={styles.dropdown}>
                  <Nav.Link href="/products"><span className={styles.link}>Categories</span></Nav.Link>
                    <div className={styles.dropdownContent}>
                      <div  className={styles.block}>
                        <a href="#" >IPhone</a>
                        <a href="#">IPad</a>
                        <a href="#" >Other</a>
                      </div>
                    </div>
                </div>
                <Nav.Link href="/pages"><span className={styles.link}>Pages</span></Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Col>
        </Row>
      </div>
    </Navbar>
  );
};

export default NavBar;