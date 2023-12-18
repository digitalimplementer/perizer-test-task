export const checkStrContainsAnother = (strToCheck: string, containedStr: string) => {
  return strToCheck.toLowerCase().includes(containedStr.toLowerCase());
};
