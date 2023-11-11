export const generateUniqueCode = (cityName: string) => {
  // Get the first letter of the city name
  const firstLetter = cityName.charAt(0);

  // Generate a random 4-digit number
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  // Combine the parts to create the unique code
  const uniqueCode = `UM${firstLetter}${randomNumber}`;

  return uniqueCode;
};
// // change the random number logic to date based to make it more unique
// export const generateUniqueCode = (cityName: string) => {
//   // Get the first letter of the city name
//   const firstLetter = cityName.charAt(0);

//   // Get the current date in the format YYYYMMDD
//   const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');

//   // Generate a random 4-digit number based on the current date
//   const randomSeed = parseInt(currentDate) % 10000;

//   // Combine the parts to create the unique code
//   const uniqueCode = `UM${firstLetter}${randomSeed.toString().padStart(4, '0')}`;

//   return uniqueCode;
// };
