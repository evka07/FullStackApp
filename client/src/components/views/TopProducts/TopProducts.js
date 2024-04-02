import { useSelector } from "react-redux";
import { getTopProducts } from "../../../redux/productsRedux";
import { Row} from "react-bootstrap";
import styles from './TopProducts.module.scss'
import CardProduct from "../../features/CardProduct/CardProduct";

const TopProducts = () => {

  const topProducts = useSelector(state =>  getTopProducts(state));

  return (
    <section className="Top-Products">
      <div className={styles.sectionName}>
        <h1 className={styles.title}>Bestseller</h1>
        <h3 className={styles.subtitle}></h3>
      </div>
    
      <Row xs={1} md={2} lg={4} className="g-4 py-3">
        {topProducts.map(product => (
        <CardProduct  key={product.id} product={product}/>
        ))}
      </Row>
      <p className='text-center'> And many more modern devices</p>
    </section>
  );

};
  
export default TopProducts;