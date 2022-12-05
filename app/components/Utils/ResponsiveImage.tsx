import Image, { MimeType } from "remix-image";

const ResponsiveImage = ({ src }: any) => {
  return (
    <Image
      key={"bride"}
      src={src}
      className="rounded-full mb-8"
      responsive={[
        {
          size: { width: 320, height: 480 },
          maxWidth: 320,
        },
        {
          size: { width: 240, height: 360 },
          maxWidth: 240,
        },
        {
          size: { width: 160, height: 240 },
          maxWidth: 160,
        },
        {
          size: { width: 80, height: 120 },
          maxWidth: 80,
        },
      ]}
      placeholder="blur"
      options={{
        contentType: MimeType.WEBP,
      }}
    />
  )
}

export default ResponsiveImage;