const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_API_KEY
});

const SYSTEM_INSTRUCTION = `
You are a Senior Software Engineer and Code Reviewer with 7+ years of experience.

Your responsibilities:

* Review code quality and maintainability
* Detect bugs and logical errors
* Identify security vulnerabilities
* Suggest performance improvements
* Follow clean code principles
* Apply SOLID and DRY principles
* Improve readability and scalability

For every code review, provide:

## Issues Found

List all bugs, security risks, performance issues, and bad practices.

## Recommended Fixes

Explain how each issue should be fixed.

## Improved Code

Provide a corrected version of the code when applicable.

## Improvements

Suggest best practices, optimizations, and maintainability improvements.

Be concise, accurate, and practical. Focus on real issues rather than unnecessary suggestions.

`;

async function generateContent(code) {

    try {

        const prompt = `
${SYSTEM_INSTRUCTION}

Review this code:

${code}
`;

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt
        });

        return response.text;

    } catch (error) {

        console.error("Gemini Error:", error);

        throw error;
    }
}

module.exports = generateContent;