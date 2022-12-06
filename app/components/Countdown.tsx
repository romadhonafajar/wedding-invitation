import { memo, useEffect, useState } from "react";
import { useLoaderData } from "remix";
import { LoaderDataType } from "~/controls";
import TextWithLine from "./Utils/TextWithLine";

const EVENT_DATE = "December 11, 2022 11:00:00";
const COUNTDOWN_DATE = new Date(EVENT_DATE).getTime();
const CALENDAR_URL = `https://www.google.com/calendar/render?
action=TEMPLATE&
text=Resepsi+Oryza+%26+Roma+💕+&
location=Istana%20Kana%20Kawaluyaan%2C%20Jl.%20Kawaluyaan%20Raya%20No.9%2C%20Jatisari%2C%20Kec.%20Buahbatu%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040286%2C%20Indonesia&
details=Dengan%20sepenuh%20kerendahan%20hati%20dan%20rasa%20syukur%20kepada%20Allah%20SWT%2C%20kami%20ingin%20menyampaikan%20kabar%20bahagia%20mengenai%20resepsi%20pernikahan%20kami%20berdua%3A%20Oryza%20Sativani%20dan%20Romadhona%20Fajar%0A%0ATautan%20undangan%3A%0Ahttps%3A%2F%2Fwedding-oryza-roma.vercel.app%2F%0A%0AMerupakan%20suatu%20kebahagiaan%20bagi%20kami%20jika%20Bapak%2FIbu%2FSaudara%2Fi%20berkenan%20hadir%20dalam%20acara%20resepsi%20pernikahan%20kami%20serta%2F%20memberikan%20doa%20restu.%0A%0AAtas%20perhatiannya%2C%20kami%20ucapkan%20terima%20kasih.%0A%0AKami%20yang%20berbahagia%2C%0AOryza%20dan%20Roma&
dates=20221211T110000Z+08:00%2F20221211T140000Z+08:00`;

interface COUNTDOWNTYPE {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const countdownBase: COUNTDOWNTYPE = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const Countdown = memo(() => {
  const [countdown, setCountdown] = useState<COUNTDOWNTYPE>(countdownBase);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();

      const delta = COUNTDOWN_DATE - now;

      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((delta % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (delta < 0) {
        clearInterval(interval);
        setCountdown(countdownBase);
      }
    }, 1000);
  }, []);

  const { isBoth: isBoth } = useLoaderData<LoaderDataType>();

  return (
    <div className="w-full px-1 md:px-4">
      <div className="text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700 px-2">
        <TextWithLine>Tanggal Acara</TextWithLine>
      </div>

      <div className="flex justify-center pb-10">
        <NumberCard number={countdown.days} label="Hari" />
        <NumberCard number={countdown.hours} label="Jam" />
        <NumberCard number={countdown.minutes} label="Menit" />
        <NumberCard number={countdown.seconds} label="Detik" />
      </div>

      <h3 className="text-2xl md:text-3xl mb-6 text-center text-gray-700 font-head">
          Minggu, 11 Desember 2022
      </h3>
      <div className="px-12 flex max-w-md mx-auto mb-10 text-center">
        <a
          href={CALENDAR_URL}
          target={"_blank"}
          className="px-2 py-2 transition-all text-lg font-semibold w-full rounded-lg bg-[#CE7BB0] hover:bg-[#A267AC] outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
        >
          Simpan ke Google Calendar
        </a>
      </div>
    </div>
  );
});

interface NumberCardProps {
  number: number;
  label: string;
}

const NumberCard = memo(({ number, label }: NumberCardProps) => {
  const numberString = number < 100 ? ("0" + number).slice(-2) : String(number);

  return (
    <div className="rounded-lg bg-[#fde1e1] py-7 px-2 w-24 text-center mx-2 text-gray-700 font-sans">
      <div className="text-3xl mb-2">{numberString}</div>
      <div>{label}</div>
    </div>
  );
});

export default Countdown;
