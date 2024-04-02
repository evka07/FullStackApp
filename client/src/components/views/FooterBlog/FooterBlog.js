import styles from '../FooterBlog/FooterBlog.module.scss'

const FooterBlog = () => (
  <section className={styles.blog}>
    <div className={styles.content}>
      <div  className={styles.block}>
        <h5 className={styles.blockTitle}>Information</h5>
        <a href="#" >Legal&Privacy</a>
        <a href="#">Customer service</a>
      </div>
      <div className={styles.block}>
        <h5 className={styles.blockTitle}>Company</h5>
        <a href="#">About us</a>
        <a href="#">Blog</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </div>
      <div className={styles.details}>
        <h4 className={styles.detailsTitle}>JUST CALL US</h4>
        <h4 className={styles.number} >+1 888-000-7777</h4>
        <p>Monday-Friday: 10:00-19:00</p>
        <p>Saturday: 11:00-14:00</p>
      </div>
    </div>
    <div className='text-center'>
    </div>
  </section>
);
  
export default FooterBlog;