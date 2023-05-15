const images = [
  {
    url: "https://images.pexels.com/photos/1414535/pexels-photo-1414535.jpeg?auto=compress&cs=tinysrgb&w=300",
    alt: "Imagem de uma Floresta"
  },
  {
    url: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=300",
    alt: "Imagem de outra Floresta"
  },
  {
    url: "https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&w=300",
    alt: "Imagem de mais uma Floresta"
  }
];
function load() {
  return {
    image: images.map((img) => ({
      url: img.url,
      alt: img.alt
    }))
  };
}
export {
  load
};
