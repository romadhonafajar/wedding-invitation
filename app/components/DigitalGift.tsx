import React, { useState, useRef } from 'react';
import SectionWrapper from './Utils/SectionWrapper';
import TextWithLine from "./Utils/TextWithLine";
import ClipboardCopy from "./Utils/ClipboardCopy";

const DigitalGift = () => {
  // Declare a state variable to track whether the bank account information is visible or not
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const textContainer = useRef(null);

  // Define the bank account information that will be shown to the user
  const accountInfo = {
    bride: {
      bank: 'BTPN',
      name: 'Oryza Sativani',
      accountNumber: '90110042177',
      locationName: 'Jl. Permata Biru Blok T No.10, Cinunuk, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat 40624',
      locationURL: 'https://goo.gl/maps/fPmdcEqhVz89gZHPA'
    },
    groom: {
      bank: 'BCA',
      name: 'Romadhona Fajar',
      accountNumber: '4371254280',
      locationName: 'Jl. Pacitan No.13, Antapani Kidul, Kec. Antapani, Kota Bandung, Jawa Barat 40291',
      locationURL: 'https://goo.gl/maps/cRVFFAQg6mjhjxSe7'
    },
  };

  return (
    <div className="pt-10 bg-[#EFEFEF]">
      <SectionWrapper>
        <div className="text-3xl font-head font-bold text-center mb-5 pt-3 text-gray-700">
          <h3 className="mb-1"><TextWithLine>Kado Pernikahan</TextWithLine></h3>
        </div>
        {/* Display a button that allows the user to view the bank account information */}
        <div className="flex flex-col items-center text-center mb-5">
          <p className="font-head text-gray-600 leading-6">Silahkan klik tombol dibawah ini untuk mengirimkan hadiah secara online untuk kami</p>
          <button
            onClick={() => setIsVisible(true)}
            className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-[#CE7BB0] hover:bg-[#A267AC] outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            Buka
          </button>
        </div>
        {/* If the bank account information is visible, display it to the user */}
        {isVisible && (
          <div className="flex justify-center mb-5">
            <div className="mb-5 mx-2">
              <p className="mb-5 font-sans mx-2">Alamat Rumah: {accountInfo.bride.locationName} <br/>
                [<a target="_blank" className='text-[#CE7BB0]' href={accountInfo.bride.locationURL}>Tampilkan Lokasi</a>]
              </p>
              <p className="mb-1 font-sans mx-2">{accountInfo.bride.bank}-{accountInfo.bride.accountNumber}-{accountInfo.bride.name}</p>
              <ClipboardCopy copyText={accountInfo.bride.accountNumber} copyTitle={"Copy Nomor Rekening"}></ClipboardCopy>
            </div>
            <div className="mb-5 mx-2">
              <p className="mb-5 font-sans mx-2">Alamat Rumah: {accountInfo.groom.locationName} <br/>
                [<a target="_blank" className='text-[#CE7BB0]' href={accountInfo.groom.locationURL}>Tampilkan Lokasi</a>]
              </p>
              <p className="mb-1 font-sans mx-2">{accountInfo.groom.bank}-{accountInfo.groom.accountNumber}-{accountInfo.groom.name}</p>
              <ClipboardCopy copyText={accountInfo.groom.accountNumber} copyTitle={"Copy Nomor Rekening"}></ClipboardCopy>
            </div>
          </div>
          
        )}
      </SectionWrapper>
      
    </div>
  );
}

export default DigitalGift;