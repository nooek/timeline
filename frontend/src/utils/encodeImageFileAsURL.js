function encodeImageFileAsURL(element, index) {
    console.log(element)
  const images = []
  let file = element.target.files[0];
  let reader = new FileReader();
  reader.onloadend = function () {
    images.push(reader.result.split("base64,")[1])
    console.log(images)
  };
  reader.readAsDataURL(file);
  console.log(images)
  return images
}

export default encodeImageFileAsURL
