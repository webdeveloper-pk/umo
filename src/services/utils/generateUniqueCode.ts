export const generateUniqueCode = (cityName: string) => {
  // Get the first letter of the city name
  const firstLetter = cityName.charAt(0);

  // Generate a random 4-digit number
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  // Combine the parts to create the unique code
  const uniqueCode = `UM${firstLetter}${randomNumber}`;

  return uniqueCode;
};
