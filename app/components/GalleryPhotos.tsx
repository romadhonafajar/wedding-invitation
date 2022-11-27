import { useCallback, useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import foto1 from "~/images/QRT/QRTEDIT-9533.jpg";
import foto2 from "~/images/QRT/QRTEDIT-0509.jpg";
import foto3 from "~/images/QRT/QRTEDIT-0367.jpg";
import foto4 from "~/images/QRT/QRTEDIT-0355.jpg";
import foto5 from "~/images/QRT/QRTEDIT-0319.jpg";
import foto6 from "~/images/QRT/QRTEDIT-9545.jpg";
import foto7 from "~/images/QRT/QRTEDIT-0457.jpg";
import foto8 from "~/images/QRT/QRTEDIT-0418.jpg";
import foto9 from "~/images/QRT/QRTEDIT-0407.jpg";
import TextWithLine from "./Utils/TextWithLine";

const photos = [
  {
    src: foto1,
    width: 6,
    height: 4,
  },
  {
    src: foto2,
    width: 6,
    height: 4,
  },
  {
    src: foto3,
    width: 6,
    height: 4,
  },
  {
    src: foto4,
    width: 4,
    height: 6,
  },
  {
    src: foto5,
    width: 6,
    height: 4,
  },
  {
    src: foto6,
    width: 4,
    height: 6,
  },
  {
    src: foto7,
    width: 4,
    height: 6,
  },
  {
    src: foto8,
    width: 4,
    height: 6,
  },
  {
    src: foto9,
    width: 4,
    height: 6,
  },
];

let isHydrating = true;

const GalleryPhotos = () => {
  let [isHydrated, setIsHydrated] = useState(!isHydrating);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  return (
    <div className="w-full px-1 md:px-4">
      <div className="text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700">
        <h4 className="mb-1"><TextWithLine>Momen Bahagia Kami</TextWithLine></h4>
      </div>
      {isHydrated ? (
        <div className="w-full overflow-auto">
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    source: x.src,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPhotos;
