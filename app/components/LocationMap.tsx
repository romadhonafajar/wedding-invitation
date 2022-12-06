import { useLoaderData } from "remix";
import { LoaderDataType } from "~/controls";
import SectionWrapper from "./Utils/SectionWrapper";
import TextWithLine from "./Utils/TextWithLine";

const MAP_REDIRECT_URL =
  "https://goo.gl/maps/9heNjUQvsebpPcFp6";
const MAP_TITLE = "Istana Kana Kawaluyaan";
const MAP_ADDRESS = "Jl. Kawaluyaan Indah raya No. 9, Jatisari, Kec. Buahbatu, Kota Bandung, Jawa Barat";

const LocationMap = (data: any) => {
  const { isBoth: isBoth } = useLoaderData<LoaderDataType>();

  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
      <div className="text-3xl font-head font-bold text-center mb-10 pt-3 text-gray-700">
            <h4 className="mb-1"><TextWithLine>Lokasi Acara</TextWithLine></h4>
      </div>
      <div className="flex flex-col-reverse md:flex-row">
          <div className=" w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-center text-gray-700 font-bold">
              <h4 className="text-xl md:text-xl mb-4 font-sans">
                {MAP_TITLE}
              </h4>
              {
                isBoth === '1' && (
                  <div>
                    <p className="mb-16 md:mb-5 font-sans font-normal">{MAP_ADDRESS}</p>
                    <h3 className="text-2xl font-head mb-3">
                      Akad
                    </h3>
                    <p className="mb-1 font-sans text-xl">Minggu, 11 Desember 2022</p>
                    <p className="mb-1 font-sans text-xl">🕰 08.00 - 10.00 WIB </p>
                    <p className="mb-5 font-sans text-sm"><b>*Hanya dihadiri keluarga</b></p>
                  </div>
                )
              } 
              
              <h3 className="text-2xl font-head mb-3">
                Resepsi
              </h3>
              <p className="mb-1 font-sans text-xl">Minggu, 11 Desember 2022</p>
              <p className="mb-5 font-sans text-xl">🕰 11.00 - 14.00 WIB</p>
              <div className="flex justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-[#CE7BB0] hover:bg-[#A267AC] outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  Buka Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;
