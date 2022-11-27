import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/QRT/QRTEDIT-0528.jpg";
import groom from "~/images/QRT/QRTEDIT-9545.jpg";

const BrideAndGroom = () => {
  return (
    <div className="pt-20 pb-4">
      <h3 className="text-3xl text-center font-sans font-bold text-gray-700 mb-6">
      <TextWithLine>Kami yang Berbahagia</TextWithLine>
      </h3>
      <div className="w-full flex flex-wrap pb-2">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={bride}
              alt="Pengantin Wanita"
              className="w-80 h-100 rounded-full mb-8"
            />
            <h3 className="text-xl font-medium font-head mb-4 text-black">
              Oryza Sativani
            </h3>
            <div className="mb-4">
              <TextWithLine>Pengantin Wanita</TextWithLine>
            </div>
            <p className="font-head text-gray-600 leading-6">
              Putri dari <br/>
              Bapak Ridwan & <br/>
              Ibu Siti Murwati
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={groom}
                alt="Pengantin Pria"
                className="w-80 h-100 rounded-full mb-8"
              />
              <h3 className="text-xl font-medium font-head mb-4 text-black">
                Romadhona Fajar
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Pengantin Pria</TextWithLine>
              </div>
              <p className="font-head text-gray-600 leading-6">
                Putra dari <br /> 
                Bapak Alm. Edih Kusnadi & <br />
                Ibu Tuti Surwati
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
