function extractEmails(text) {
    const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return text.match(pattern);
}

function extractUrls(text) {
    const pattern = /https?:\/\/(?:www\.)?\S+\.\S+/g;
    return text.match(pattern);
}

function extractPhoneNumbers(text) {
    const pattern = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    return text.match(pattern);
}

function extractCreditCards(text) {
    const pattern = /\b(?:\d{4}[- ]?){3}\d{4}\b/g;
    return text.match(pattern);
}

function extractTime(text) {
    // Regex for 24-hour format (e.g., 14:30)
    const time24Pattern = /\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/g;
    // Regex for 12-hour format (e.g., 2:30 PM)
    const time12Pattern = /\b(1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM)\b/gi;
    const times24 = text.match(time24Pattern) || [];
    const times12 = text.match(time12Pattern) || [];
    return [...times24, ...times12];
}

function extractHtmlTags(text) {
    const pattern = /<[^>]+>/g;
    return text.match(pattern) || [];
}

function extractHashtags(text) {
    const pattern = /#\w+/g;
    return text.match(pattern) || [];
}
// Example usage
const text = "Contact us at user@example.com or visit https://www.example.com. Call us at (123) 456-7890. Credit card: 1234 5678 9012 3456.";
console.log("Emails:", extractEmails(text));
console.log("URLs:", extractUrls(text));
console.log("Phone Numbers:", extractPhoneNumbers(text));
console.log("Credit Cards:", extractCreditCards(text));