import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
    return (
        <section id="home">
            <h1 id="home__title" >
                <span>Sylvain Jeanpierre</span>
                <br />
                Développeur web front-end
            </h1>
            <div class="scroll-icon">
                <span class="wheel"></span>
            </div>
        </section>
    );
}

export default Home;