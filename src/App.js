import { useState } from 'react';
import './App.css';
import Bill from './components/Bill';
import Header from './components/Header';
import ItemPhoto from './components/ItemPhoto';
import MenuList from './components/MenuList';






function App() {
 
  const [orderData, setOrderData] = useState([]);

  const handleClick = (data) =>{
    let checkArray = orderData.find((item) => item.name === data.name);
    if(checkArray === undefined) {
      setOrderData([...orderData, {name: data.name, qty:1, price:data.price}]);
    }
    else
    {
      setOrderData(orderData.map((item) => item.name === data.name ? {...item, qty: item.qty + 1} : item));
    }
  }

  const handleDelete = (data) =>{
    setOrderData(orderData.map((item) => item.name === data.name ? {...item, qty: item.qty - 1} : item));
  }
 
  return (
    <>
     <Header/>
      <div className='flex bg-black w-full h-screen justify-between px-2 space-x-6 h-auto'>

        <div className='flex flex-row w-1/6 md:w-1/6 rounded-md bg-transparent'>
          <MenuList/>
        </div>

      

        <div className='felx h-auto w-4/6 md:w-4/6 rounded-md bg-transparent mt-2'>
          <ItemPhoto handleClick={(data)=> handleClick(data)}/>
        </div>

        <div className='flex w-2/6  pl-4'>
          <div className='justify-center items-center'>
            <div className='fixed  bg-gray-700  w-1/4 md:w-1/4 rounded-xl mt-2'>
              <Bill orderData = {orderData} handleDelete={(data) => handleDelete(data)}/>
            </div>
          </div>
        </div>
      </div>

      
      
    </>
  );
}

export default App;
