interface ContenedorProps {
  children: React.ReactNode;
}

const MainTemplate:React.FC<ContenedorProps> = ({children}) => {
    return (
        <main className='min-h-screen flex flex-col'>
            {children}
        </main>
    )
}

export default MainTemplate