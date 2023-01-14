import Directory from '../../components/directory/directory.component'
import Categories from '../../categories.json';

const Home = () => {
    return(
        <div>
            <Directory categories = {Categories}/>
        </div>
    );
}

export default Home;