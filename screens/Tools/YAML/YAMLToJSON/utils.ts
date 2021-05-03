export const convertYAMLToJSON = (data: string): string => {
  const tempArray = data.split("\n").filter(Boolean);

  const result = convert(tempArray, 0, 0);

  return JSON.stringify(result, undefined, 2);
};

function convert(arr: string[], index: number, indent: number) {
  let obj = null;

  for (let i = index; i < arr.length; i++) {
    if (arr[i][indent] === " ") {
      continue;
    }

    const line = arr[i].substr(indent);

    if (line.includes("-")) {
      if (!Array.isArray(obj)) {
        obj = [];
      }
      obj.push(convert(arr, i, indent + 2));
    } else if (line.includes(":")) {
      if (!obj) {
        obj = {};
      }
      const tempArr = line.split(":");
      const key = formatString(tempArr[0]);
      const val = formatString(tempArr[1]);
      if (val) {
        obj[key] = parseString(val);
      } else {
        obj[key] = convert(arr, i + 1, indent + 2);
      }
    } else {
      const val = formatString(line);
      obj = parseString(val);
    }

    if (indent >= 2 && i < arr.length - 1 && arr[i + 1][indent - 2] !== " ") {
      break;
    }
  }

  return obj;
}

function formatString(str: string) {
  return str.trim().replace(/^\"|\"$/g, "");
}

function parseString(str: string) {
  if (isBoolean(str)) {
    return str === "true";
  } else if (isFloat(str)) {
    return Number.parseFloat(str);
  } else if (isInteger(str)) {
    return Number.parseInt(str);
  } else {
    return str;
  }
}

function isBoolean(str: string) {
  return /^(true|false)$/.test(str);
}

function isFloat(str: string) {
  return /^[-+]?[0-9]*\.[0-9]+$/.test(str);
}

function isInteger(str: string) {
  return /^\d+$/.test(str);
}
