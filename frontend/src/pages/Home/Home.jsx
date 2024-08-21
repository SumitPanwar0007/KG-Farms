
// import wall2 from '../../images/wall2.jpg'
// import car from '../../images/car.gif'

import rules from '../../assets/rules.jpg'
import lane from '../../assets/carlane.jpg'
import helmet from '../../assets/helmet.jpg'
import Header from '../../component/Header/Header';
import { assets } from '../../assets/assets';


const Home = () => {
  return (
    <div className="w-full flex flex-col">
    <Header />


        <div className="w-full flex-col gap-4">
            <p className="mt-10 text-center sm:text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            From <span className="text-blue-500"> Farm</span> to Fridge, in a Matter of <span className='text-blue-500'> Hours!</span>
            </p>
      
      {/* first */}
            <div className="flex flex-col sm:flex-row w-full justify-between  items-center">
                <div className="sm:w-1/2  flex flex-col gap-4 py-4">
                        <p className="text-5xl font-semibold  text-blue-500 sm:pl-4">Indian Cow/Buffalo  </p>
                        <p className=" text-lg sm:text-2xl text-justify px-4">Sourced from healthy Indian cows and buffaloes, 
                        our milk delivers rich, authentic flavor and nutrition, straight from local farms to your home.
                          </p>
                </div>
                <div className="sm:w-1/2">
                    <iframe src="https://lottie.host/embed/8b2534c5-137e-4847-9fad-aa78a1f9d123/FKZLE3yimJ.json" className='w-full h-80'></iframe>

                    {/* <iframe src="https://lottie.host/embed/9857afc7-e503-431d-882f-4aa537ee30a2/kpqPHUVhvk.json"></iframe> */}
                </div>
            </div>
{/* second */}

        <div className="hidden sm:flex flex-col sm:flex-row w-full justify-between  items-center">
                <div className="w-1/2">
                    {/* <img src={lane} className='w-2/3 ml-6 rounded-xl' alt="" /> */}
                    <iframe src="https://lottie.host/embed/61139400-2ec9-406b-b40b-d06e0c9966d1/fAnIxY5MZD.json" className='w-full h-80'></iframe>

                   
                </div>
                <div className="w-1/2  flex flex-col gap-4 py-4">
                        <p className="text-5xl font-semibold text-blue-500 pl-4">Timely Delivery</p>
                        <p className="text-2xl text-justify px-6">  Delivers in 45 minutes</p>
                        <p className="text-2xl text-justify px-6">
                        Enjoy fresh milk at your doorstep every morning
                        </p>
                </div>
                
            </div>
 {/* second on mobile */}
 <div className="flex flex-col sm:hidden w-full justify-between  items-center">
                <div className="sm:w-1/2  flex flex-col gap-4 py-4">
                        <p className="text-5xl font-semibold  text-blue-500 sm:pl-4">Timely Delivery  </p>
                        <p>Delivers in 45 minutes</p>
                        <p className=" text-lg sm:text-2xl text-justify px-4">Sourced from healthy Indian cows and buffaloes, 
                        Enjoy fresh milk at your doorstep every morning, guaranteed on time to ensure your day starts with pure, natural goodness
                          </p>
                </div>
                <div className="sm:w-1/2">
                <iframe src="https://lottie.host/embed/61139400-2ec9-406b-b40b-d06e0c9966d1/fAnIxY5MZD.json" className='w-full h-80'></iframe>

                    {/* <iframe src="https://lottie.host/embed/9857afc7-e503-431d-882f-4aa537ee30a2/kpqPHUVhvk.json"></iframe> */}
                </div>
            </div>

        
  {/* third */}
            <div className="flex flex-col sm:flex-row w-full justify-between  items-center">
       
                <div className=" sm:w-1/2   flex flex-col gap-4 py-2">
                        <p className="text-5xl font-semibold text-blue-500 pl-4 ">No Human Touch</p>
                        <p className="text-2xl text-justify px-4">
                        Our milk is processed and packaged without human contact, ensuring the highest level of hygiene and 
                        safety for your family.</p>
                </div>

                <div className="sm:w-1/2  ml-11">
                    {/* <img src={rules} className='w-2/3  ml-4 my-4 rounded-xl' alt="" /> */}
                    <iframe src="https://lottie.host/embed/68ebed1a-2a63-4f4c-90da-b4f907b12c1d/yV5kCUGcaC.json" className='w-full h-80'></iframe>
                </div>
                
            </div>

        {/* fourth */}

        <div className="hidden sm:flex flex-col sm:flex-row w-full justify-between  items-center">
                <div className="w-1/2">
                    {/* <img src={lane} className='w-2/3 ml-6 rounded-xl' alt="" /> */}
                    {/* <iframe src="https://lottie.host/embed/61139400-2ec9-406b-b40b-d06e0c9966d1/fAnIxY5MZD.json" className='w-full h-80'></iframe> */}
                    <iframe src="https://lottie.host/embed/9b97d48a-4307-4c79-ad45-775efcabb0e2/GIuPM1SSuu.json" className='w-full h-80 rounded-xl'></iframe>
                   
                </div>
                <div className="w-1/2 text-center  flex flex-col gap-4 py-4">
                        <p className="text-4xl font-semibold">Freshness Guaranteed</p>
                        <p className="text-2xl text-justify px-6">
                        Delivered within hours of milking, our milk retains its natural freshness and taste,
                giving you the best quality in every sip.
                        </p>
                </div>
                
            </div>
           {/* Fourth on mobile */}
           <div className="flex sm:hidden flex-col sm:flex-row w-full justify-between  items-center">
       
       <div className=" sm:w-1/2   flex flex-col gap-4 py-2">
               <p className="text-5xl font-semibold text-blue-500 pl-4 ">Freshness Guaranteed</p>
               <p className="text-2xl text-justify px-4">
               Delivered within hours of milking, our milk retains its natural freshness and taste,
               giving you the best quality in every sip.</p>
       </div>

       <div className="sm:w-1/2  ml-11">
           {/* <img src={rules} className='w-2/3  ml-4 my-4 rounded-xl' alt="" /> */}
           <iframe src="https://lottie.host/embed/9b97d48a-4307-4c79-ad45-775efcabb0e2/GIuPM1SSuu.json" className='w-full h-80 rounded-xl'></iframe>
           </div>
       
   </div>
           

            
        </div>
        
{/* Contact forms */}
       <div className="w-full flex flex-col sm:flex-row justify-center px-2 py-8 sm:py-24 gap-6" style={{ backgroundImage: `url(${assets.bg})` }} >
        <div className=" rounded-lg sm:py-4 sm:w-1/2 bg-stone-300 flex flex-col justify-center items-center text-center">
          <h1 className=" text-xl sm:text-6xl mb-10 font-semibold">Get in Touch</h1>

          <form className=" w-5/6">
             
          <div className=" md:gap-1">
          <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                 htmlFor="floating_first_name"
                  className="peer-focus:font-medium text-center absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>

              
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
          
            <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
         
            
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                Location
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" sm:w-1/2  flex flex-col text-center sm:ml-14 justify-center gap-8 text-blue-500">

            <p className="text-3xl sm:text-4xl font-semibold">
                We Delivers
            </p>

            <p className="text-3xl sm:text-3xl lg:text-8xl font-bold">
                Before 7 am
            </p>
            <p className="text-xl font-semibold sm:text-3xl"> at your door</p>
            <p className="text-xl ftext-xl font-semibold sm:text-5xl"> +91 9911995970</p>


        </div>
      </div> 


     
    </div>
  );
}

export default Home
