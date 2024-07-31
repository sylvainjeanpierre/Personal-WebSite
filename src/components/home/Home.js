import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
    return (
        <section id="home">
            <h1 id="home__title" >
                <span>Sylvain Jeanpierre</span>
                <br />
                Développeur web dans le Briançonnais
            </h1>
            <div className="scroll-icon">
                <span className="wheel"></span>
            </div>
        </section>
    );
}

export default Home;