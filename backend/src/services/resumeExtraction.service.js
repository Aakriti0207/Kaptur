import Groq from "groq-sdk";


const getGroqClient = () => {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        throw new Error(
            "GROQ_API_KEY environment variable is missing."
        );
    }

    return new Groq({ apiKey });
};


const parseLLMJson = (text) => {
    const cleanText = text
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

    const jsonStart = cleanText.indexOf("{");
    const jsonEnd = cleanText.lastIndexOf("}");

    if (jsonStart === -1 || jsonEnd === -1) {
        throw new Error(
            "LLM did not return valid JSON"
        );
    }

    return JSON.parse(
        cleanText.slice(jsonStart, jsonEnd + 1)
    );
};


const extractResumeData = async (resumeText) => {
    const prompt = `
You are an information extraction system for a job matching platform.

Extract ONLY the requested information from the resume below.

Do not invent information.
Do not infer skills that are not clearly supported by the resume.

If a value is unavailable, use null.
If an array has no valid values, return an empty array.

Return ONLY valid JSON.

The JSON must follow this exact structure:

{
  "fullName": null,
  "email": null,

  "githubUrl": null,
  "linkedinUrl": null,
  "portfolioUrl": null,

  "skills": [],
  "coreSkills": [],

  "experience": [
    {
      "company": null,
      "role": null,
      "employmentType": null,
      "startDate": null,
      "endDate": null,
      "current": false,
      "skills": []
    }
  ],

  "education": [
    {
      "institution": null,
      "degree": null,
      "fieldOfStudy": null,
      "startYear": null,
      "graduationYear": null,
      "cgpa": null
    }
  ]
}


EXTRACTION RULES:

1. PERSONAL INFORMATION

Extract:
- full name
- email
- GitHub URL
- LinkedIn URL
- portfolio URL

Only extract URLs explicitly present in the resume.

--------------------------------------------------

2. TECHNICAL SKILLS

Extract every individual:
- programming language
- framework
- library
- database
- API technology
- developer tool
- cloud/deployment tool
- relevant technical platform

Example:

"React, Node.js, MongoDB"

becomes:

[
  "React",
  "Node.js",
  "MongoDB"
]

Do not merge multiple technologies into one string.

Do not include:
- soft skills
- company names
- generic personality traits

--------------------------------------------------

3. CORE SKILLS

Extract technical concepts separately from technologies.

Examples:

- Data Structures and Algorithms
- Object Oriented Programming
- DBMS
- Operating Systems
- System Design

Do not put conceptual topics into "skills".

--------------------------------------------------

4. EXPERIENCE

Extract each professional experience.

For each experience extract:

- company
- role
- employment type only if explicitly stated
- start date
- end date
- current
- technologies or technical skills clearly associated with that experience

Do not extract detailed responsibility bullet points.

If an experience is ongoing:

"endDate": null
"current": true

--------------------------------------------------

5. EDUCATION

Extract:

- institution
- degree
- field of study
- start year
- graduation year
- CGPA

Use numbers for:

startYear
graduationYear
cgpa

Example:

"2024 - 2028"

becomes:

"startYear": 2024
"graduationYear": 2028


--------------------------------------------------

IMPORTANT:

Do NOT extract:
- projects
- certifications
- achievements

Return ONLY the JSON object.


RESUME:

${resumeText}
`;


    const groq = getGroqClient();


    const response = await groq.chat.completions.create({
        model: "openai/gpt-oss-120b",

        temperature: 0,

        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    });


    const text =
        response.choices[0].message.content;


    return parseLLMJson(text);
};


export {
    extractResumeData
};