function highlightKeyword(content, keyword) {
  if (
    typeof content !== "string" ||
    typeof keyword !== "string" ||
    keyword.length > content.length
  ) {
    return `Invalid`;
  }

  for (i = 0; i < content.length; i++) {
    let content = content.toLowerCase();
    let keyword = keyword.toLowerCase();
  }
}

console.log(
  highlightKeyword(
    "Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?",
    "thú vỊ"
  )
);
