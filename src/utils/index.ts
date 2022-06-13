export const loadFile = (
  format = "*",
  readAs: "text" | "dataURL" = "text"
): Promise<string> =>
  new Promise((resolve, reject) => {
    const input = document.createElement("input");

    input.type = "file";
    input.accept = format;

    input.addEventListener("change", (event: Event) => {
      const file = (event.target as HTMLInputElement).files[0];
      const reader = new FileReader();

      switch (readAs) {
        case "dataURL":
          reader.readAsDataURL(file);
          break;
        case "text":
        default:
          reader.readAsText(file);
      }

      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
    });

    input.click();
  });

export const saveFile = (
  data: string,
  extension = "txt",
  type = "text/plain"
): void => {
  const blob = new Blob([data], { type });
  const a = document.createElement("a");
  a.download = `output.${extension}`;
  a.href = window.URL.createObjectURL(blob);
  a.click();
};

export const copyText = (text: string): Promise<void> =>
  navigator.clipboard.writeText(text);
