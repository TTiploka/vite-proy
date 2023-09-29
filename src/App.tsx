
function App() {
  return (
    <>

  <section className='overflow-x-hidden'>
  <div className='bg-stone-900 h-screen w-screen grid grid-cols-5 gap-2 p-20'> 
    <button className='bg-slate-600	hover:bg-indigo-200	 rounded-md p-2 text-white' >PI</button>
    <button className='bg-slate-600 hover:bg-indigo-200 rounded-md p-2 text-white' >e</button>
    <button className='bg-slate-600 hover:bg-indigo-200 rounded-md p-2 text-white' >|n|</button>
    <button className='bg-slate-600 hover:bg-indigo-200 rounded-md p-2 text-white' >C</button>
    <button className='bg-slate-600 hover:bg-indigo-200 rounded-md p-2 text-white ' ><div className="bg-slate-950 w-1/5 ml-20 border border-white rounded rounded-l-full ">X</div></button>
    <div className='bg-stone-900 w-full col-span-3 row-span-4 grid grid-cols-3  gap-2 p-0'>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >1</button>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >2</button>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >3</button>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >4</button>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >5</button>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >6</button>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >7</button>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >8</button>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >9</button>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >+/-</button>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >0</button>
      <button className='bg-blue-400 hover:bg-indigo-200 rounded-md p-2 text-white' >.</button>
    </div>
    <div className='bg-stone-900 w-full col-span-2 row-span-4 grid grid-cols-2 gap-2 p-0'>
      <button className='bg-slate-600 hover:bg-indigo-200 rounded-md p-2 text-white' >+</button>
      <button className='bg-slate-600 hover:bg-indigo-200 rounded-md p-2 text-white' >-</button>
      <button className='bg-slate-600 hover:bg-indigo-200 rounded-md p-2 text-white' >*</button>
      <button className='bg-slate-600 hover:bg-indigo-200 rounded-md p-2 text-white' >/</button>
      <button className='bg-slate-600 hover:bg-indigo-200 rounded-md p-2 text-white' >sin</button>
      <button className='bg-slate-600 hover:bg-indigo-200 rounded-md p-2 text-white' >cos</button>
      <button className='bg-slate-600 hover:bg-indigo-200 rounded-md p-2 text-white col-span-2' >=</button>
    </div>
  </div>


  <div className='bg-stone-900 h-screen w-screen grid grid-cols-3 gap-5'> 
  <button className='bg-blue-400 rounded-md p-2 text-white' ></button>
  <button className='bg-blue-400 rounded-md p-2 text-white' ></button>
  <button className='bg-blue-400 rounded-md p-2 text-white' >8</button>
  <button className='bg-blue-400 rounded-md p-2 text-white' >9</button>
  </div>
  <div className='bg-stone-900 h-screen w-screen columns-3 gap-5'> 
  <button className='bg-blue-400 rounded-md p-2 text-white' >0</button>
  <button className='bg-blue-400 insolate rounded-md p-2 text-white' >+</button>
  <button className='bg-blue-400 rounded-md p-2 text-white' >-</button>
  <button className='bg-blue-400 rounded-md p-2 text-white' >*</button>
  <button className='bg-blue-400 rounded-md p-2 text-white' >/</button>
  </div>
  <div className="bg-stone-900 h-screen w-screen text-white columns-2">
    <p className="insolate hover:break-after-column">Well, let me tell you something, ...</p>
    <p className='insolate'>Sure, go ahead, laugh...</p>
    <p>Maybe we can live without...</p>
    <p>Look. If you think this is...</p>
  </div>

  </section>
    </>
  )
}
export default App
