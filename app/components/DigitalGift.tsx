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
      bank: 'BCA',
      name: 'Oryza Sativani',
      accountNumber: '28314193391',
    },
    groom: {
      bank: 'BCA',
      name: 'Romadhona Fajar',
      accountNumber: '4371254280',
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
            {/* <div className="text-2xl font-head mb-3">
              <p className="mb-1 font-sans text-xl">Bank: {accountInfo.bride.bank}</p>
              <p className="mb-1 font-sans text-xl">Atas Nama: {accountInfo.bride.name}</p>
              <p className="mb-5 font-sans text-xl">Nomor Rekening: {accountInfo.bride.accountNumber}</p>
              <ClipboardCopy copyText={accountInfo.bride.accountNumber}></ClipboardCopy>
            </div> */}
            <div className="mb-1">
              <p className="mb-1 font-sans">Bank: {accountInfo.groom.bank}</p>
              <p className="mb-1 font-sans">Atas Nama: {accountInfo.groom.name}</p>
              <p className="mb-5 font-sans">Nomor Rekening: {accountInfo.groom.accountNumber}</p>
              <ClipboardCopy copyText={accountInfo.groom.accountNumber}></ClipboardCopy>
            </div>
          </div>
          
        )}
      </SectionWrapper>
      
    </div>
  );
}

export default DigitalGift;