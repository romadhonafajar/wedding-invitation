import TextWithLine from "./Utils/TextWithLine";

const OpeningMessage = () => {
  return (
    <div className="pt-10">
      <h3 className="text-3xl pb-4 text-center font-sans font-bold text-gray-700">
        <TextWithLine>Om Swastiastu</TextWithLine>
      </h3>
      <div className="pb-2 -pt-2 content-center">
        <div className="text-center text-sm sm:text-lg font-light font-head text-gray-600 py-7 mx-2">
          <p>Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wassa (Tuhan Yang Maha Esa), <br/>
            Kami bermaksud mengundang Bapak/Ibu/Saudara/i <br /> 
            Pada Upacara Manusa Yadnya Pawiwahan  <br /> 
            (Pernikahan) Putra & Putri kami <br />
            yang akan dilaksanakan pada <br/>
          </p>
          <p> Kamis 13 Oktober 2022 </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningMessage;