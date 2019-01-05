export const fmpResponseToJSON = (data: string) => {
  // console.log(data);
  const tmp = data.replace(/<(.|\n)*?>/g, "");
  return JSON.parse(tmp);
};

export interface KeyValuePair {
  [k: string]: any;
}

export const keysToSymbolProperty = (dataIn: { [k: string]: any }) => {
  const dataOut: KeyValuePair[] = [];
  let temp: { [k: string]: any };
  Object.keys(dataIn).forEach(key => {
    temp = dataIn[key];
    temp.symbol = key;
    dataOut.push(temp);
  });
  return dataOut;
};

export const toCamelCase = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) =>
      idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()
    )
    .replace(/[^A-Za-z0-9]/g, "");
};

export const renameKeysWith = (
  objIn: any,
  namingFcn: (k: string) => string,
  level: number = 1,
  tgtLevel: number = 1
): any => {
  let result;
  if (typeof objIn === "object") {
    result = Object.keys(objIn).reduce(
      (acc, key) => ({
        ...acc,
        ...{
          [level === tgtLevel ? namingFcn(key) : key]: renameKeysWith(
            objIn[key],
            namingFcn,
            level + 1,
            tgtLevel
          )
        }
      }),
      {}
    );
  } else {
    result = objIn;
  }
  return result;
};

export const keysToCamelCase = (obj: object, tgtLevel: number = 2) => {
  return renameKeysWith(obj, toCamelCase, 1, tgtLevel);
};
