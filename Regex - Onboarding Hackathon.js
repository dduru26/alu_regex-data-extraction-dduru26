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