function isURL(url) {
  if (url) {
    var regex = url.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );

    if (regex !== null) {
      return 1;
    }
  }
  return 0;
}

export { isURL };
