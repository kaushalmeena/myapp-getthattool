import { Classes } from "@blueprintjs/core";
import { ITool } from "../types";

export const DARK_THEME = {
  id: "dark-theme",
  blueprintjsClass: Classes.DARK,
  gray: {
    1: "#182026",
    2: "#202B33",
    3: "#293742",
    4: "#30404D",
    5: "#394B59"
  }
};

export const LIGHT_THEME = {
  id: "light-theme",
  blueprintjsClass: null,
  gray: {
    1: "#CED9E0",
    2: "#D8E1E8",
    3: "#E1E8ED",
    4: "#EBF1F5",
    5: "#F5F8FA"
  }
};

export const TOOLS: ITool[] = [
  {
    name: "JSON to CSV",
    category: "JSON",
    url: "/json-to-csv"
  },
  {
    name: "JSON to YAML",
    category: "JSON",
    url: "/json-to-yaml"
  },
  {
    name: "Stringify JSON",
    category: "JSON",
    url: "/stringify-json"
  },
  {
    name: "Unstringify JSON",
    category: "JSON",
    url: "/unstringify-json"
  },
  {
    name: "Encode Base64",
    category: "TEXT",
    url: "/encode-base64"
  },
  {
    name: "Decode Base64",
    category: "TEXT",
    url: "/decode-base64"
  },
  {
    name: "Encode HTML",
    category: "TEXT",
    url: "/encode-html"
  },
  {
    name: "Decode HTML",
    category: "TEXT",
    url: "/decode-html"
  },
  {
    name: "Encode URL",
    category: "TEXT",
    url: "/encode-url"
  },
  {
    name: "Decode URL",
    category: "TEXT",
    url: "/decode-url"
  },
  {
    name: "Extract text from HTML",
    category: "TEXT",
    url: "/extract-text-from-html"
  },
  {
    name: "Hex to Text",
    category: "TEXT",
    url: "/hex-to-text"
  },
  {
    name: "Text to Hex",
    category: "TEXT",
    url: "/text-to-hex"
  },
  {
    name: "Convert Text Case",
    category: "TEXT",
    url: "/case-converter"
  }
];