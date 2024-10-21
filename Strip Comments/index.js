function solution(text, markers) {
  if (markers.length === 0) {
    return text.replace(/\s*$/, "");
  }

  let modText = text
    .split("\n")
    .map((line) => {
      for (let marker of markers) {
        if (line.includes(marker)) {
          line = line.split(marker)[0].replace(/\s*$/, "");
        }
      }
      return line;
    })
    .join("\n");

  return modText;
}
