export const convertTextToHex = (data: string): string => {
  let result = "";
  const hexArray = data.match(/.{1,4}/g) || [];

  for (let i = 0; i < hexArray.length; i++) {
    result += String.fromCharCode(parseInt(hexArray[i], 16));
  }

  return result;
};