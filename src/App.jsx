import Random from './components/Random'


export default function App() {

  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center ">
        <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold">
            GIFFY
        </h1>
        <div className=" flex flex-col">
          <Random/>
        </div>
    </div>
  ) 

}
