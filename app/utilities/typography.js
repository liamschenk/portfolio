export function formatOrphans(text) {
  if (!text) return text;

  return text
    .split(". ")
    .map((sentence) => {
      const words = sentence.split(" ");
      if (words.length <= 2) return sentence;

      words[0] = words[0] + "\u00A0" + words[1];
      words.splice(1, 1);

      const last = words.length - 1;
      words[last - 1] = words[last - 1] + "\u00A0" + words[last];
      words.splice(last, 1);

      return words.join(" ");
    })
    .join(". ")
    .replace(/(\S)-(\S)/g, "$1\u2011$2");
}
