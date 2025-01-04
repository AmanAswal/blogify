import { IKImage } from "imagekitio-react";

const Image = ({ src, alt, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      lqip={{ active: true, quality: 20 }}
      loading="lazy"
      alt={alt}
      width={w}
      height={h}
    />
  );
};

export default Image;
