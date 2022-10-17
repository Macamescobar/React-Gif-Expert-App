import { useState } from "react";
import { AddCategory } from "./components/addCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {

        setCategories(['Valorant',...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

  return (
    <>
      {/* {titulo} */}
      <h1> GifExpertApp </h1>
      
      {/* {Input} */}
      < AddCategory />

      {/* {Listado de Gif} */}
      <button onClick={onAddCategory}> Agregar </button>
      <ol>
        {
        categories.map(category => {
            return <li key={category}> {category} </li>
            })
        }
        {/* <li>hola</li> */}
      </ol>
      {/*  {Gif Item} */}
    </>
  )
}
