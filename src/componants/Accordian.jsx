import React, { useState } from 'react'
import Mobail from '../assets/images/mobail.avif'

const Accordian = () => {

  const [Show , useShow] = useState(false)

   const show = ()=>{
    useShow(!Show);

  }

  const Data = [
    {
      ques:'  Popular Cuisines Near Me',
      ans:['Bakery near me','Beverages near me','Biryani near me', 'Burger near me','Chinese near me','Coffee near me','Continental near me','Desserts near me','Italian near me','Mithai near me','Momos near me','Mughlai near me', 'North Indian near me','Pasta near me','Pizza near me','Rolls near me','Sandwich near me','Shake near me','South Indian near me','Street near me']
    },
    // {
    //   ques:'  Popular Restaurant Types Near me',
    //   ans:'Bakeries near me . Bars near me . Beverage Shops near me . Bhojanalya near me . Cafés near me . Casual Dining near me . Clubs near me . Cocktail Bars near me . Confectioneries near me . Dessert Parlors near me . Dhabas near me . Fine Dining near me . Food Courts near me . Food Trucks near me . Irani Cafes near me . Kiosks near me . Lounges near me . Microbreweries near me . Paan Shop near me . Pizzerias near me . Pubs near me . Quick Bites near me . Sweet Shops near me'
    // },
    // {
    //   ques:' Top Restaurant Chains',
    //   ans:'Bakery near me .   Beverages near meBiryani near me .  Burger near meChinese near me .  Coffee near me .  Continental near me .  Desserts near me .  Italian near me .  Mithai near me .  Momos near me .  Mughlai near me .  North Indian near me .  Pasta near me .  Pizza near me .  Rolls near me .  Sandwich near me .  Shake near me .  South Indian near me Street near me'
    // },
    // {
    //   ques:'  Popular Cuisines Near Me',
    //   ans:'Bakery near me .   Beverages near meBiryani near me .  Burger near meChinese near me .  Coffee near me .  Continental near me .  Desserts near me .  Italian near me .  Mithai near me .  Momos near me .  Mughlai near me .  North Indian near me .  Pasta near me .  Pizza near me .  Rolls near me .  Sandwich near me .  Shake near me .  South Indian near me Street near me'
    // }
  ]
  return (
 <> 
 <div className='container p-3 border mx-auto'>
   <h1 className='text-[32px] my-2 '>Explore options near me</h1>
   <div className='accordian '>
    {
      Data.map(
        (v,i)=>{

         return(
          <div className='my-2'>
          <div className='ques w-[100%] border rounded-[10px] cursor-pointer' onClick={show}>
          <h1 className='p-4 text-[25px] '>
          {v.ques}
          </h1>
          <div className={`ans w-[100%]  p-4  ${Show ? "block" : "hidden"}` } >
            <ul className='flex flex-wrap-reverse'>
          {
            v.ans.map(
              (a,i)=>{
                 console.log(a)
                return(
                  <li className='mx-1'> 
                    {a}
                  </li>
                )
              }
            )
          }
          </ul>
          </div>
          </div>
          </div>
         )

        }
      )
    }

   
    
    
   </div>
 </div>
 </>
  )
}

export default Accordian
