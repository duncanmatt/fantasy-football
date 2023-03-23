
import styles from '../styles/Home.module.css';
import articles from '../articles.json';


const News = () => {
	return (
		<div className={styles.center}>
			{articles.map((article, index) => (
				<div key={index}>
					<h3>{article.title}</h3>
					
          <p>{article.desc}</p>
        
				</div>
      ))}
		</div>
	);
};

export default News;
