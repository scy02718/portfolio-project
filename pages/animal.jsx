import React from "react";
import Image from "next/image";
import Link from "next/link";
import animalfaceImage from "../public/assets/projects/animal.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const animal = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={animalfaceImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-30%] text-white p-2 z-10">
          <h2 className="py-2">Animal Classification</h2>
          <h3>Pytorch Lightning / Python</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="my-4">
            I developed a simple animal classifier using PyTorch Lightning. The
            main motivation behind this project stemmed from a simple thought:
            &quot;People sometimes compare each other to certain animals, like
            cats or dogs. What if I build an animal classifier and feed it
            images of humans? Would it be able to identify the most similar
            animal?&quot; To accomplish this, I obtained the{" "}
            <Link href="https://www.kaggle.com/datasets/andrewmvd/animal-faces">
              <span className="text-[#5651e5] cursor-pointer">
                Animal Face dataset
              </span>
            </Link>{" "}
            from Kaggle. The initial dataset consisted of only three classes:
            Dog, Cat, and Wildlife. Since I wanted more categories, I manually
            classified each image (16,130 images) into the following categories:
            [&quot;cat&quot;, &quot;cheetah&quot;, &quot;dog&quot;,
            &quot;fox&quot;, &quot;leopard&quot;, &quot;lion&quot;,
            &quot;tiger&quot;, &quot;wolf&quot;].
          </p>
          <p className="my-4">
            Next, I preprocessed the dataset using pl.utils.data.Dataset and
            pl.LightningDataModule, transforming the data and passing it to a
            dataloader. The selected transformations were designed to maximize
            accuracy. Then, using pl.LightningModule, I implemented the complete
            training pipeline using the ResNet34 backbone. I utilized the AdamW
            optimizer and customized the training and validation steps.
            EarlyStopping was employed with a patience of 5, and the model was
            saved as a .ckpt file after each epoch.
          </p>
          <p className="my-4">
            Since the model used was only ResNet-34 (meaning it has 34 layers),
            the training process itself took approximately 40 minutes, even with
            a single GPU on my RTX-3060 laptop. During the initial attempt, the
            loss consistently plateaued at a high value, with the accuracy
            barely surpassing random selection. This issue was resolved by
            switching from Adam to AdamW optimizer, as the weight decay in Adam
            was likely the cause. Eventually, the loss reached the global
            minimum, achieving an accuracy of 99.9%.
          </p>
          <p className="my-4">
            However, despite having a well-functioning animal classifier, the
            initial hypothesis was proven wrong. I expected that a deep neural
            network would capture abstract features of an image, and when
            provided with an image of a human without a specific &quot;human&quot; class,
            the network would output the most similar-looking animal. However,
            this hypothesis proved to be incorrect. Regardless of the animal a
            person resembled, the output was ALWAYS a &quot;dog&quot;. I realized my
            hypothesis was flawed and learned that AI generally perceives humans
            as resembling dogs.
          </p>
          <p className="my-4">
            Overall, this project was enjoyable. Although my initial hypothesis
            was incorrect, developing a model from scratch on a local GPU (I had
            only done it on Google Colaboratory previously) was a valuable
            learning experience. I gained practice in connecting CUDA, utilizing
            an external GPU, working with Conda, and using PyTorch Lightning. If
            I were to redo this project, now equipped with web development
            knowledge, I would consider implementing it into a web application,
            after addressing the fundamental issue.
          </p>
          <p className="my-4">
            Detailed hyperparameters and the code can be found below.
          </p>
          <Link href="https://github.com/scy02718/project-animal">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>

          <Link href="/#projects">
            <button className="px-8 py-2 mt-4">Return</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 max-h-[160px]">
          <div className="p-2">
            <p className="text-center font-bold uppercase pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pytorch Lightning
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

export default animal;
