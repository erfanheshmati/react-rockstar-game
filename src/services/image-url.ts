const noImage = require("../assets/thumbnail.png");

const getCroppedImageUrl = (url: string) => {
  // https://media.rawg.io/media/games/d58/d588947f768s856659sdf9876gh0fd8769fh8d99
  // https://media.rawg.io/media/crop/600/400/games/d58/d588947f768s856659sdf9876gh0fd8769fh8d99

  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
