const isAuthenticated = (username, password) => {
  return isAnagram(username, password);
};



const isAnagram = (username, password) => {
  // YOUR CODE HERE
  // An anagram is a word that contains all the letters from another word, in any order.
  // Example: whiterose => otherwise
  return password.split('').sort().join('') === username.split('').sort().join('');
};


