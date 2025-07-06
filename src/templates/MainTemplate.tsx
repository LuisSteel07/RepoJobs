import Navbar from "../components/Navbar";

interface ContenedorProps {
  children: React.ReactNode;
}

const MainTemplate:React.FC<ContenedorProps> = ({children}) => {
    return (
        <main className='min-h-screen flex flex-col'>
            <Navbar />
            {children}
        </main>
    )
}

export default MainTemplate