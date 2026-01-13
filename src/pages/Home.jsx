import SecaoVideo from "../sections/SecaoVideo";
import SecaoCards from "../sections/SecaoCards";
import SecaoComentarios from "../sections/SecaoComentarios";


function Home(){
    return (
        <div>
            <SecaoVideo/>
            <SecaoCards></SecaoCards>
            <SecaoComentarios/>
        </div>
    )
}export default Home;
