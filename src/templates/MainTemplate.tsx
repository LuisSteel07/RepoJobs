import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface ContenedorProps {
  children: React.ReactNode;
}

const MainTemplate:React.FC<ContenedorProps> = ({children}) => {
    return (
        <main className='min-h-screen flex flex-col'>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default MainTemplate