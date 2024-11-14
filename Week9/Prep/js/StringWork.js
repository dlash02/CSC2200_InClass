function countWords() {
    const inputText = document.getElementById("inputText").value;
    const resultDiv = document.getElementById("result");

    // Trim the text and split by whitespace to count words
    const wordsArray = inputText.trim().split(/\s+/);

    // Count words: If input is empty, count is 0, else use the length of the array
    const wordCount = inputText.trim() === "" ? 0 : wordsArray.length;

    // Create a frequency object to count occurrences of each word
    const wordFrequency = {};
    let mostCommonWord = '';
    let maxCount = 0;

    wordsArray.forEach(word => {
        // Normalize the word to lowercase to avoid case sensitivity
        const lowerCaseWord = word.toLowerCase();

        // Increment the word count in the frequency object
        if (wordFrequency[lowerCaseWord]) {
            wordFrequency[lowerCaseWord]++;
        } else {
            wordFrequency[lowerCaseWord] = 1;
        }

        // Check if this word is the most common one
        if (wordFrequency[lowerCaseWord] > maxCount) {
            maxCount = wordFrequency[lowerCaseWord];
            mostCommonWord = lowerCaseWord;
        }
    });

    // Prepare the result
    const result = `
        <h3>Word Count Result:</h3>
        <p><strong>Number of Words:</strong> ${wordCount}</p>
        <p><strong>Most Common Word:</strong> "${mostCommonWord}" (appeared ${maxCount} times)</p>
    `;

    resultDiv.innerHTML = result;
}
