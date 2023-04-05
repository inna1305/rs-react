export const createUrlImg = (files: FileList) => {
  return new Promise((res) => {
    const reader = new FileReader();
    const file = files[0];
    reader.readAsArrayBuffer(file);

    reader.onload = function () {
      if (reader.result) {
        const blob = new Blob([reader.result]);
        const url = URL.createObjectURL(blob);
        res(url);
      }
    };
  });
};
