// export const getImageUrl = (path) => {
//   if (path === "hero/heroImage.png") {
//     return "https://media.licdn.com/dms/image/D4D35AQGQj3wckY78Mw/profile-framedphoto-shrink_400_400/0/1715956331352?e=1723824000&v=beta&t=4q1-B8aCKe7EGw5Fy79pVepldtMsnah2-e8HQHHHEos";
//   }
//   return new URL(`/assets/${path}`, import.meta.url).href;
// };




export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
