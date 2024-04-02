import { Row, Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getSpringCollectionProducts } from '../../../redux/productsRedux';
import { IMAGES_URL } from '../../../config';
import styles from '../SpringCollection/SpringCollection.module.scss';
import { Link } from 'react-router-dom';

const SpringCollection = () => {
    const collectionProducts = useSelector(state => getSpringCollectionProducts(state));
    
    const galleryImages = collectionProducts.map(product => {
        if (product.gallery) {
            return product.gallery.split(',').map(image => image.trim());
        } else {
            return [];
        }
    });

   
    return (  
      <div className={styles.collectionBox}>
        <div className={styles.textBox} >
          <h2>New Arrivals</h2>
          <h2 className={styles.boxName}>Don't be late</h2>
        </div>
        
        <div className={styles.smallProduct}>
          <img src={`${IMAGES_URL}/${galleryImages[0]}`} alt='gallery-img' />
        </div>
        
        <Row className="gx-0 mt-5">

          {collectionProducts.map(product => (
            <Col key={product.id} lg={6}sm={12} className="p-0">
                <div className={styles.imageContainer}>
                  <img
                    src={`${IMAGES_URL}/${product.photo}`}
                    alt={product.name}
                    className="img-fluid d-block w-100"
                    style={{ maxHeight: '40rem', objectFit: 'cover' }}
                  />
                  <div className={styles.overlay}>

                  <Link to={`/products/${product.id}`} className={styles.link}>
                    Discover now
                  </Link>

                  </div>
               </div>
            </Col>
            ))}
        </Row>
      </div>
    );
};

export default SpringCollection;