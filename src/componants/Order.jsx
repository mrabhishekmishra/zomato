import Cardmini from './Card';
import order from '../assets/images/order.avif'
import dining from '../assets/images/dining.avif'
import live from '../assets/images/live.jpeg'


function Order() {
  return (
    <>
    <div className='container  mx-auto  flex justify-evenly gap-0 '>
        <Cardmini img={order} h1='Order Online' p='Stay home and order to your doorstep'/>
        <Cardmini img={dining} h1='Dining' p="View the city's  favpurite dining venues"/>
        <Cardmini img={live} h1='Live Events' p="Discover india's best events & concerts"/>
    </div>
    </>
  )
}

export default Order;
