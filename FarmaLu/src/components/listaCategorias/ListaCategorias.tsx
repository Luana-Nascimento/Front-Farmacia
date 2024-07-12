import React, { useEffect, useState } from 'react';
import Categoria from '../../model/Categoria';
import { buscar } from '../../service/Service';
import CardCategorias from '../cardCategorias/CardCategorias';

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
      try{
        await buscar(`/categorias`, setCategorias);
      } catch (error: any) {
        alert('Não é possível acessar.');
      }
  }
    useEffect(() => {
      buscarCategorias();
    }, []);

    return (
      <>
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categoria) => (
                  <CardCategorias key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ListaCategorias;