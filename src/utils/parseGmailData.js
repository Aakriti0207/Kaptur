function findPart(parts, mimeType) {
    for (const part of parts) {
        if (part.mimeType === mimeType && part.body?.data) {
            return part;
        }
        if (part.parts) {
            const found = findPart(part.parts, mimeType);
            if (found) return found;
        }
    }
    return null;
}

export function parseGmailData(gmailData){
    const headers = gmailData.payload.headers;

    const getHeader = (name) => {
        return headers.find(h => h.name === name)?.value || "";
    }

    const subject = getHeader("Subject");
    const from = getHeader("From");
    const date = getHeader("Date");

    //Decode Body
    let bodyData = "";
    if(gmailData.payload.parts){
        const htmlPart = findPart(gmailData.payload.parts, "text/html");
        const textPart = htmlPart ? null : findPart(gmailData.payload.parts, "text/plain");
        const part = htmlPart || textPart;
        if (part) {
            bodyData = Buffer.from(part.body.data, "base64").toString("utf-8");
        }
    }else if(gmailData.payload.body?.data) {
        bodyData = Buffer.from(gmailData.payload.body.data, "base64").toString("utf-8");
    }

    return { subject, from, date, snippet: gmailData.snippet, body: bodyData };

}