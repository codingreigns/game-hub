import placeHolder from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImg = (url: string) => {
  if (!url) return placeHolder;
  const target = "media/";
  const cropDimensions = "crop/600/400/";
  const index = url.indexOf(target) + target.length;
  const newUrl = url.slice(0, index) + cropDimensions + url.slice(index);
  return newUrl;
};
export default getCroppedImg;
