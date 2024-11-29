function possibleChanges(usernames: string[]): string[] {
  const result = usernames.map((username) => {
    const arrayOfLetters = username.split("");
    for (let i = 0; i < arrayOfLetters.length; i++) {
      if (arrayOfLetters[i] > arrayOfLetters[i + 1]) {
        return "YES";
      }
    }
    return "NO";
  });

  return result;
}

export default possibleChanges;
