import react from 'react'

function App() {

  return (
  <> 
    <div id='web-page'>
      <nav className='flex justify-evenly p-2'>
        <div>
          <img src="https://www.dominos.co.in/assets/Logo@2x.png" className='w-40' alt="" />
        </div>
        <div>
          <button className='text-blue-500 font-bold px-4 py-2 mx-3'>OUR MENU</button>
          <button className='text-blue-500 font-bold px-4 py-2 mx-3'>DOMINO'S STORE</button>
          <button className='text-blue-500 font-bold px-4 py-2 mx-3'>CORPORATE ENQUIRY</button>
          <button className='text-blue-500 font-bold px-4 py-2 mx-3'>CONTACT</button>
        </div>
        <div>
          <button className='bg-red-400 border-2 rounded border-black px-4 py-2 mx-3'>Download App</button>
        </div>
      </nav>

      <div className='flex justify-evenly'> 
        <div>
        <img src="https://www.dominos.co.in/assets/header_bg.png" alt="" className='mx-auto'/>
        </div>
        <div>
          <h1>Domino's online ordering</h1>
          <p>Yummy pizza delivered fast & fresh</p>
          <button>ORDER ONLINE NOW</button>
          <img src='https://www.dominos.co.in/assets/banner_brand_20210922.jpg' alt="" />
        </div>
      </div>
      <div>
        <h1 className='text-4xl font-bold text-center'>Welcome to Domino's</h1>
        <p className='text-center'>Your favorite pizza, just a click away!</p>
      </div>
    </div>
    
  </>
  )
}

export default App
