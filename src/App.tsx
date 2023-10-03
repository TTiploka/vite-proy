import Btn from "./components/Btn"

function App() {
  return (
    <>

      <section className='overflow-x-hidden'>

        <div className='bg-stone-900 h-screen w-screen grid grid-cols-7 gap-2 p-20'>
          <div className='bg-stone-900 rounded-md text-white col-span-5 grid gap-2 text-2xl' >

            <input type="text" className="border rounded-md p-4 w-full bg-stone-900 text-white m-0 bottom-2  text-4xl" />

            <div className="flex flex-row gap-2 ">
              <Btn class='basis-1/5'>PI</Btn>
              <Btn class='basis-1/5'>e</Btn>
              <Btn class='basis-1/5'>|n|</Btn>
              <Btn class='basis-1/5'>C</Btn>
              <button className="basis-1/5 rounded-md bg-slate-600 shadow-lg hover:shadow-cyan-500/50	text-white"><button className="bg-slate-950 w-1/3  border border-white rounded rounded-l-full ">X</button></button>
            </div>
            <div className="grid grid-cols-5 gap-2 row-span-4">
              <div className="rounded-md bg-stone-900 col-span-3 grid grid-cols-3 gap-2 ">
                <Btn type="degrad">1</Btn>
                <Btn type="degrad">2</Btn>
                <Btn type="degrad">3</Btn>
                <Btn type="degrad">4</Btn>
                <Btn type="degrad">5</Btn>
                <Btn type="degrad">6</Btn>
                <Btn type="degrad">7</Btn>
                <Btn type="degrad">8</Btn>
                <Btn type="degrad">9</Btn>
                <Btn type="degrad">+/-</Btn>
                <Btn type="degrad">0</Btn>
                <Btn type="degrad">.</Btn>
              </div>
              <div className="rounded-md bg-stone-900 col-span-2 grid gap-2 ">
                <Btn>+</Btn>
                <Btn>-</Btn>
                <Btn>*</Btn>
                <Btn>/</Btn>
                <Btn>sin</Btn>
                <Btn>cos</Btn>
                <Btn class="col-span-2">=</Btn>
              </div>
            </div>
          </div>
          <div className='bg-stone-900 rounded-md border text-white col-span-2 p-2' >
            <p className=" inline  ml-10 text-2xl">Result </p>
            <br />
            <p className="block mt-20 my-4 ml-20 text-4xl">0</p>
            <hr />
            <p className="block mt-2 my-4 ml-8 text-2xl">History</p>
          </div>
        </div>
      </section>
    </>
  )
}
export default App
