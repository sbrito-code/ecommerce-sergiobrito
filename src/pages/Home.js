import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Layout from '../components/Layout';
const Home = () => {
    return(
        /* Con los picos vacios retorna varios elementos */
        <>
            {/* Con esto llamo a Navbar. Se le coloca / xq no tiene hijos */}
            <Navbar />
            {/* <Welcome title="Hola clase por props"/> */}
            {/* <Welcome title="Otro título"/> */}
            {/* <Main />*/}
            {/* <Footer />*/}
            <Layout>
                <div>
                    {/* <h1>Este es el hijo</h1> */}
                </div>
            </ Layout>
        </>
    );
};

export default Home;