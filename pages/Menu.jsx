import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Menu = () => {
  const imgStyles =
    'w-full h-64 object-cover rounded-lg mb-4 hover:translate-y-[10px] hover:opacity-[50%] transition-all duration-500 ease-in';

  const foodItems = [
    {
      id: 1,
      image: '/sushi-rolls.jpg',
      title: 'California Roll',
      desc: 'Rice, crab, avocado, and cucumber wrapped in seaweed',
      price: '$8.00',
      btnText: 'Add To Cart',
    },
    {
      id: 2,
      image: '/tuna-rolls.jpg',
      title: 'Tuna Roll',
      desc: 'Rice and tuna wrapped in seaweed',
      price: '$7.00',
      btnText: 'Add To Cart',
    },
    {
      id: 3,
      image: '/sushi-4.jpg',
      title: 'Salmon Roll',
      desc: 'Rice, crab, avocado, and cucumber wrapped in Salmon',
      price: '$18.00',
      btnText: 'Add To Cart',
    },
    {
      id: 4,
      image: '/sushi-2.jpg',
      title: 'Salmon Sashimi',
      desc: 'Rice and salmon wrappen',
      price: '$10.00',
      btnText: 'Add To Cart',
    },
    {
      id: 5,
      image: '/sushi2.jpg',
      title: 'Tuna Sashimi',
      desc: 'Rice and tuna- sashimi',
      price: '$18.00',
      btnText: 'Add To Cart',
    },
    {
      id: 6,
      image: '/sushi-rolls.jpg',
      title: 'Yellowtail Sashimi',
      desc: 'Yellowtail Sashimi with mushrooms and finished in a marsala and cream reduction',
      price: '$18.00',
      btnText: 'Add To Cart',
    },
    {
      id: 6,
      image: '/sushi-2.jpg',
      title: 'Yellowtail Nigiri',
      desc: 'Yellowtail Sashimi with mushrooms and finished in a marsala and cream reduction ',
      price: '$18.00',
      btnText: 'Add To Cart',
    },
    {
      id: 7,
      image: '/sushi-2.jpg',
      title: 'Salmon Nigiri',
      desc: 'Salmon Nigiri with mushrooms and finished in a marsala and cream reduction ',
      price: '$18.00',
      btnText: 'Add To Cart',
    },
    {
      id: 8,
      image: '/sushi-rolls.jpg',
      title: 'Cali Nigiri',
      desc: 'Cali Nigiri with mushrooms and finished in a marsala and cream reduction ',
      price: '$18.00',
      btnText: 'Add To Cart',
    },
    {
      id: 9,
      image: '/sushi-rolls.jpg',
      title: 'Naples Shasimi',
      desc: 'Naples Shasimi with mushrooms and finished in a marsala and cream reduction ',
      price: '$18.00',
      btnText: 'Add To Cart',
    },
  ];

  return (
    <div className='min-h-screen max-w-[1640px] text-gray-300 bg-indigo-950 pt-10'>
      <h1 className='text-center text-4xl  mb-10'> Our Menu</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 order-2 px-8 mb-10'>
        {foodItems.map((item, id) => (
          <div className='border-gray-200  bp-8'>
            <img src={item.image} alt='Sushi platter' className={imgStyles} />
            <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
            <p className='text-gray-400 mb-2'>{item.desc}</p>
            <p className='text-gray-300 font-bold'>{item.price}</p>

            <div className='flex justify-center items-center cursor-pointer'>
              <AiOutlineShoppingCart size={40} className='text-white p-2' />
              <button className='text-white rounded-lg bg-indigo-500 px-2 py-2'>
                <p className='text-[14px]  text text-white'>{item.btnText}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
