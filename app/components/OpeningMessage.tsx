import TextWithLine from "./Utils/TextWithLine";
import lotus from "~/images/lotus-section.png";

const OpeningMessage = () => {
  return (
    <div className="pt-10">
      <h3 className="text-3xl pb-5 text-center font-sans font-bold">
        <TextWithLine>Assalamualaikum Warrahmatullahi Wabarakatuh</TextWithLine>
      </h3>
      <div className="pb-2 -pt-2 content-center">
        <div className="text-center text-sm sm:text-lg italic font-normal font-head text-black pb-2 sm:px-44 px-16">
          <div>
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” <br />
            <TextWithLine>(Ar-Rum Ayat 21)</TextWithLine>
          </div>
        </div>
        <div className="text-center text-sm sm:text-lg font-light font-head text-black mb-5 px-16 sm:px-44">
          <div className="m-auto sm:w-24 sm:h-24 h-16 w-16 bg-center bg-contain bg-no-repeat px-10"
            style={{ backgroundImage: `url(${lotus})` }} >
          </div>
          <div>
            Dengan memohon rahmat dan ridho Allah SWT, kami hendak menyampaikan kabar bahagia, Insya Allah kami akan menyelenggarakan acara pernikahan<br />
            <TextWithLine>•••</TextWithLine>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningMessage;
