import Groq from "groq-sdk"
const groq = new Groq(
    {
        apiKey: process.env.GROQ_API_KEY
    }
);

const buildPrompt = (gmailData) => {
    return `
        You are an assistant that analyzes emails to determine if they are related to a job application, and extracts structured information from them.

        You will be given an email's subject, sender, and snippet. Analyze it and respond with ONLY a valid JSON object (no other text, no markdown formatting) in this exact structure:

        {
          "isJobRelated": true or false,
          "company": "string or null",
          "role": "string or null",
          "status": "APPLIED" | "OA" | "INTERVIEW" | "OFFER" | "REJECTED" | null
        }

        Rules:
        - isJobRelated should be true ONLY if this email is directly about a specific job application the user submitted.
        - isJobRelated should be false for: promotional emails, newsletters, coding practice platforms (LeetCode, HackerRank contests), job recommendation emails, or generic marketing.
        - If isJobRelated is false, set company, role, and status to null.
        - Infer "status" from context: "APPLIED" for confirmations, "OA" for assessment invites, "INTERVIEW" for interview scheduling, "OFFER" for offer letters, "REJECTED" for rejections.
        - If you cannot confidently determine company or role, use null rather than guessing.

        Examples:

        Email: Subject: "Thank you for applying to Software Engineer Intern at Google" | From: "Google Careers <careers@google.com>" | Snippet: "We've received your application..."
        Output: {"isJobRelated": true, "company": "Google", "role": "Software Engineer Intern", "status": "APPLIED"}

        Email: Subject: "Join LeetCode Contest and get ready for interview prep!" | From: "LeetCode <no-reply@leetcode.com>" | Snippet: "Compete Weekly And Win Prizes..."
        Output: {"isJobRelated": false, "company": null, "role": null, "status": null}

        Now analyze this email:
        Subject: ${gmailData.subject}
        From: ${gmailData.from}
        Snippet: ${gmailData.snippet}
    `;
}

const extractJobData = async(gmailData) => {
    const prompt = buildPrompt(gmailData);

    const response = await groq.chat.completions.create({
        model: "openai/gpt-oss-120b",
        messages: [{ role: "user", content: prompt }]
    });

    const text = response.choices[0].message.content;
    const cleanText = text.replace(/```json\n?|```/g, "").trim();
    return JSON.parse(cleanText);
}

export { extractJobData }