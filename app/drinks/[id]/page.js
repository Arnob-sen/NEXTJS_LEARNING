import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import drinkImg from './drinks.jpg'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getDrinks = async(id)=>{
    const res =  await fetch(`${url}${id}`)
    if(!res.ok){
        throw new Error('failed to fetch single drink')
    }
    return res.json();
}
const SingleDrinkPage = async ({params}) => {
    const data = await getDrinks(params.id);
    // console.log(data);
    const title = data?.drinks[0]?.strDrink;
    const imgsrc = data?.drinks[0]?.strDrinkThumb;
    console.log(title,imgsrc)
  return (
    <div>
        <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
          Back  To Drinks
        
        </Link>
        <Image src={imgsrc} width={300} height={300} className='w-48 h-48 rounded-lg shadow-lg mb-8' priority alt={title}/>
         <p className='text-3xl mb-8 mt-8'>{title}</p>
      {/* <Image  src={drinkImg} alt={`A picture of  ${title}`} className='h-48 w-48' /> for static img
       */}
    </div>
  )
}

export default SingleDrinkPage
