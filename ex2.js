function generateId(length, prefix) {
  if (
    length < 0 ||
    length > 100 ||
    isNaN(length) ||
    typeof prefix !== "string" ||
    prefix.length >= 10
  ) {
    return "length phải là số nguyên dương nhỏ hơn 100 và prefix phải là một chuỗi nhỏ hơn 10 kí tự";
  }
}

console.log(generateId(10, 100000000000000));
