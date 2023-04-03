function checkDeadline(endTime) {
  const deadline = moment(endTime);
  const today = moment();
  const rest = moment
    .duration(+deadline.format("x") - +today.format("x"), "milliseconds")
    .asMilliseconds();

  return rest < 0 ? true : false;
}

function isDevEnv() {
  return (
    window.location.href.split(".").includes("dev") ||
    window.location.href.split("/").includes("localhost:3000")
  );
}

function separateLink(str) {
  const delimiters = [":", "//", "."];

  return str.split("").reduce((result, char, index, arr) => {
    if (delimiters.includes(char)) {
      if (index > 0 && !delimiters.includes(arr[index - 1])) {
        result.push(str.slice(0, index));
        str = str.slice(index);
        index = 0;
      }
    }

    if (index === arr.length - 1) {
      result.push(str);
    }

    return result;
  }, []);
}
