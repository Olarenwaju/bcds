import React from 'react'
import Header from '../components/header/Header'
import cancersign from '../assets/cancer-sign.png'
import ellipse from '../assets/ellipse-img.png'
import '../css/style.css'



const Home = () => {
  return (
    <>
      <div className="hero-bg-img bg-cover bg-center">
        <Header />

        <section>
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="text-white font-bold text-7xl lg:flex-grow md:w-1/2 lg:pr-15 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              When cancer is detected <br /> early, there is a 98% <br />{" "}
              survival rate
            </div>

            <div class="lg:max-w-[400px] lg:w-full md:w-1/2 w-5/6">
              <img
                // className="object-cover object-center rounded"
                alt="hero"
                src={cancersign}
              />
            </div>
          </div>
        </section>

      
      </div>

      <div className="container bg-[#FBDAE8] flex justify-center">
        <div>
          <div>
            Breast cancer awareness is a <br />
            global health campaign aimed at <br />
            increasing public awareness about <br />
            breast cancer, encouraging early <br />
            detection, and fostering support for <br />
            those affected by the disease
          </div>
          <button>Get a Diagnosis</button>
        </div>

        <img src={ellipse} alt="img" />
      </div>

      

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Early Detection <br /> Saves Lives
                </h2>
               
                <p class="leading-relaxed mb-3">
                Emphasizing the significance of early
                detection through regular breast 
                self-exams, clinical breast exams,
                and mammograms is a central theme.
                Detecting breast cancer in its early 
                stages often leads to more effective 
                treatment and improved outcomes.
                </p>
                
                
              </div>
            </div>

            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Pink Ribbon <br /> Symbolism
                </h2>
                
                <p class="leading-relaxed mb-3">
                The pink ribbon has become a universal
                symbol of breast cancer awareness.
                Wearing or displaying the pink ribbon
                during awareness campaigns signifies 
                solidarity with those affected by breast 
                cancer and shows support for the 
                ongoing efforts to find a cure.
                </p>
                
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Get familiar with <br /> some symptoms
                </h2>
                <h1 class="title-font sm:text-lg text-sm font-medium text-gray-900 mb-3">
                  Lump or Mass, Changes in Size or Shape, 
                  Skin Changes (redness, dimpling, or 
                  puckering), Nipple Changes, Discharge 
                  other than breast milk, Pain or Discomfort
                  (unexplained tenderness or pain), 
                  Skin Color Changes, Swelling (distortion 
                  or swelling in part of the breast).
                </h1>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;