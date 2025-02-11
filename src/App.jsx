import "./App.css";
import logoSVG from "./assets/images/logo.svg";
import imageComputer from "./assets/images/image-computer.png";
import imageDevices from "./assets/images/image-devices.png";
import blackList from "./assets/images/icon-blacklist.svg";
import text from "./assets/images/icon-text.svg";
import preview from "./assets/images/icon-preview.svg";
function App() {
  return (
    <>
      {/* hero section */}
      <section className="font-bai">
        <div className="section-container mb-40  pt-16">
          <img src={logoSVG} className="mx-auto my-16" />
          <h3>A history of everything you copy</h3>
          <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            incidunt possimus nesciunt animi repellat, sapiente dolore nisi?
          </p>
          <div className="button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>
      {/* snippets section */}
      <section>
        <div className="section-container my-20 ">
          <h3>Keep track of your snippets</h3>
          <p className="section-content mb-24">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis corrupti unde ea ut sit asperiores tempore eaque
            incidunt.
          </p>
        </div>
      </section>
      {/* Features section */}
      <section>
        <div className="section-container my-20 ">
          {/* image container */}
          <div className=" relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2">
              <img
                src={imageComputer}
                className="md:absolute top-0 right-[50%]"
              />
            </div>
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2">
              {/* item 1 */}
              <div>
                <h5>Quick Search</h5>
                <p className="max-w-md text-grayishBlue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                  magni.
                </p>
              </div>
              {/* item 2 */}
              <div>
                <h5>iCloud Sync</h5>
                <p className="max-w-md text-grayishBlue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                  magni.
                </p>
              </div>
              {/* item 3 */}
              <div>
                <h5>Complete History</h5>
                <p className="max-w-md text-grayishBlue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                  magni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Acess Anywhere section */}
      <section>
        <div className="section-container my-20">
          <h3>Acess Clipboard Anywehere</h3>
          <p className="section-content mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
            accusamus! Voluptate aliquam aut iure minima.
          </p>
          <img src={imageDevices} className="mx-auto" />
        </div>
      </section>
      {/* Supercharged section  */}
      <section>
        <div className="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p className="section-content mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            {/* item 1 */}
            <div className="flex flex-col items-center space-y-5">
              <img src={blackList} />
              <h5>Create Blacklists</h5>
              <p className="max-w-md text-grayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis error inventore consequatur.
              </p>
            </div>
            {/* item 2 */}
            <div className="flex flex-col items-center space-y-5">
              <img src={text} />
              <h5>Plain Text Snippets</h5>
              <p className="max-w-md text-grayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis error inventore consequatur.
              </p>
            </div>
            {/* item 3 */}
            <div className="flex flex-col items-center space-y-5">
              <img src={preview} />
              <h5>Sneak Preview</h5>
              <p className="max-w-md text-grayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis error inventore consequatur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
