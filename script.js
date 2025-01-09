const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const wordCount = document.getElementById('word-count');
const sentenceCount = document.getElementById('sentence-count');
const paragraphCount = document.getElementById('paragraph-count');
const readingTime = document.getElementById('reading-time');

// Buttons for each section
const charBtn = document.getElementById('char-btn');
const wordBtn = document.getElementById('word-btn');
const sentenceBtn = document.getElementById('sentence-btn');
const paragraphBtn = document.getElementById('paragraph-btn');
const readingTimeBtn = document.getElementById('reading-time-btn');

// Helper functions to count words, sentences, paragraphs
const countWords = text => text.trim().split(/\s+/).filter(word => word).length;
const countSentences = text => text.split(/[.!?]+/).filter(sentence => sentence.trim().length).length;
const countParagraphs = text => text.split(/\n+/).filter(paragraph => paragraph.trim().length).length;
const estimateReadingTime = text => (text.split(/\s+/).filter(word => word).length / 550).toFixed(2);

// Event listener for counting characters
charBtn.addEventListener('click', () => {
  const text = textInput.value;
  charCount.textContent = text.length; 
});

// Event listener for counting words
wordBtn.addEventListener('click', () => {
  const text = textInput.value;
  wordCount.textContent = countWords(text); 
});

// Event listener for counting sentences
sentenceBtn.addEventListener('click', () => {
  const text = textInput.value;
  sentenceCount.textContent = countSentences(text); 
});

// Event listener for counting paragraphs
paragraphBtn.addEventListener('click', () => {
  const text = textInput.value;
  paragraphCount.textContent = countParagraphs(text); // Update paragraph count
});

// Event listener for calculating reading time
readingTimeBtn.addEventListener('click', () => {
  const text = textInput.value;
  readingTime.textContent = estimateReadingTime(text) + " min(s)";
});

