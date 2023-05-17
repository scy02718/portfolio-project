import React from "react";
import Image from "next/image";
import Link from "next/link";
import idolFaceImage from "../public/assets/projects/idol.png";
import initialImage from "../public/assets/projects/idol_image/initial.png";
import after120kImage from "../public/assets/projects/idol_image/after_120k.png";
import finalImage from "../public/assets/projects/idol_image/final.png";
import descriptionImage from "../public/assets/projects/idol_image/idol_description.png";
import { RiRadioButtonFill } from "react-icons/ri";

const idol = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={idolFaceImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-30%] text-white p-2 z-10">
          <h2 className="py-2">Idol Face Project</h2>
          <h3>ReactJS / Flask / Pytorch</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="my-4">
            I trained a StyleGAN2 model from NVIDIA using an idol face dataset
            obtained from the Kaggle competition{" "}
            <Link href="https://www.kaggle.com/datasets/vkehfdl1/kidf-kpop-idol-dataset-female">
              <span className="text-[#5651e5] cursor-pointer"> KID-F </span>
            </Link>{" "}
            (K-Pop Idol Dataset - Female). This process took approximately 30
            hours, utilizing a single GPU with a resolution of 256 x 256. The
            final model was integrated into a React application, allowing for
            the generation of new images on request. The application features a
            React frontend and Flask backend, with a variety of capabilities,
            including adjustable truncation psi, noise input, seed preservation,
            and the ability to save favorite images. However, to further improve
            the model&apos;s output, I suggest utilizing a better and more powerful
            GPU, which would enable higher resolution images. Additionally, I
            recommend incorporating a less biased dataset, as the current
            dataset has a bias towards certain celebrities. Expanding the
            dataset to include a wider variety of celebrities would further
            enhance the model&apos;s performance.
          </p>
          <p className="my-4">
            For this project, I initially considered implementing a whole
            generative model from scratch. However, I quickly realized that
            this was not a practical approach. In modern deep learning models,
            which are often complex and extensive, training from scratch is
            highly likely to lead to poor results. Therefore, I decided to
            perform a transfer learning approach by using a pre-trained model of
            StyleGAN-2 from NVIDIA. After scouring the internet, I found a
            Github repository consisting of an{" "}
            <Link href="https://github.com/NVlabs/stylegan2-ada-pytorch">
              <span className="text-[#5651e5] cursor-pointer">
                {" "}
                official pytorch implementation{" "}
              </span>
            </Link>
            of StyleGAN-2. I thoroughly reviewed the code, which enhanced my
            understanding of the architecture. Although I encountered several
            issues setting up the environment and resolving clashes from Conda
            and Pip, I eventually began the training process. I will share
            some of the images generated during the training process.
          </p>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="justify-center items-center">
                <Image
                  className="rounded-xl"
                  src={initialImage}
                  alt="/"
                  width="770"
                  height="770"
                />
                <p className="uppercase justify-center text-center">
                  Initial pretrained Image
                </p>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="justify-center items-center">
                <Image
                  className="rounded-xl"
                  src={after120kImage}
                  alt="/"
                  width="770"
                  height="770"
                />
                <p className="uppercase justify-center text-center">
                  Image after 120k images
                </p>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="justify-center items-center">
                <Image
                  className="rounded-xl"
                  src={finalImage}
                  alt="/"
                  width="770"
                  height="770"
                />
                <p className="uppercase justify-center text-center">
                  Final trained Image
                </p>
              </div>
            </div>
          </div>
          <p className="py-4">
            As shown, the quality of image generated gradually increases as the
            training proceeds. It is also interesting to see how small details
            such as the camera angle, facial expression and skin color remains
            similar to the original photo. In total, the model learned by having
            900K image inputs. After the training was complete, which took
            approximately 30 hours, I started implementing a web application to
            showcase this, using react frontend and flask backend. For
            minimalistic design, and since not a lot of features were required,
            I tried to keep the frontend of the application simple, with the
            generated image being displayed at the center, with some parameters
            adjustable below it.
          </p>
          <h3 className="py-2">Website Description</h3>
          <div className="py-2 p-2 shadow-xl rounded-xl">
            <div className="justify-center items-center m-auto">
              <Image
                className="rounded-xl"
                src={descriptionImage}
                alt="/"
                width="1000"
                height="1000"
              />
            </div>
          </div>
          <p className="py-4">
            I apologize for the terrible labelling, was the easiest way I could
            think of. Anyways, I will go through the different features of the
            application:
          </p>
          <ol className="list-decimal ml-4">
            <li>
              Seed: This is just an arbitary value showing nth random input. The
              seed is capped at 2^32 - 1, however does not mean this model only
              makes 2^32 images. Theoretically, the generative model can make
              practically infinite number of images by receiving style vector z
              with latent space size of 512. The seed only is used to help user
              identify specific input without knowing the tensor input.
            </li>
            <li>
              Image: This section shows the user the produced image with that
              seed. The image is maintained even when the page is reloaded,
              because the data is stored in external file. The output image size
              is 256x256. I wanted to make the resolutions greater, but I
              predicted that the training time to increase exponentially,
              therefore gave up.
            </li>
            <li>
              Generate: This button fetches to the flask backend, by giving the
              new seed and the psi information. The received information is
              processed at the backend, generates image and returns the image.
              The model takes few seconds to load at the start, but after that
              average time taken is less than a second.
            </li>
            <li>
              Noise and Keep Seed: Keep Seed is self explanatory, just keeping
              the seed on next generate. This allows users to experiment on
              different psi values on same seed. Noise is a feature in StyleGAN,
              which provides slight variation in image such as the hair, skin
              texture and so on.
            </li>
            <li>
              Truncation Psi: The slider allows the user to change the
              truncation psi. Truncation psi is a feature in styleGAN, in which
              it truncates the normal distribution of latent space 512, in whcih
              the input is now restricted by a boundary.The closer the
              truncation psi is to 1, the greater the variation of image is,
              however most of the images were quite abnormal and disturbing
              (less of a human figure). Conversely, the closer the truncation
              psi is to 0, the more general the image became, representing the
              &quot;most average&quot; image of a K-pop idol.
            </li>
            <li>
              Set Favorite: The star button sets the image to favorite. The seed
              information is stored in a separate json file.
            </li>
            <li>
              Favorites: This routes to a separate page, listing all favorite
              images in a grid. The page is really simple, so will not show on
              this overview.
            </li>
          </ol>
          <p className="py-2">
            Overall, this project was entertaining. It was like watching a baby
            grow up as the model slowly started to draw some cool images in a
            way that I initially planned as. The react and flask worked almost
            flawlessly, and the whole process, excluding the wait from training,
            took approximately a week. The website could be improved by first of
            all deploying online, adding additional features, and fixing a bug
            of page reloading after every generate. The github code can be found
            using the button below!
          </p>
          <Link href="https://github.com/scy02718/react-idol-face">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link href="/#projects">
            <button className="px-8 py-2 mt-4">Return</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 max-h-[280px]">
          <div className="p-2">
            <p className="text-center font-bold uppercase pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Flask
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pytorch
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default idol;
