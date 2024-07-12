import './Home.css';
import homeLogo from '../../assets/farma.png'
import ListaCategorias from '../../components/listaCategorias/ListaCategorias'

function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Tudo para sua saúde.</p>

            </div>
  
            <div className="flex justify-center image-container">
              <img src={homeLogo} alt="Farmácia Logo" className='custom-logo-size rounded-logo' />
            </div>
          </div>
        </div>
        <ListaCategorias/>
      </>
    );
}

export default Home;