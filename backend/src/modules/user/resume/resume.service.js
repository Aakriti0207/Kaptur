import { PDFParse } from "pdf-parse";
import { extractResumeData } from "../../../services/resumeExtraction.service.js";


const parseResume = async (fileBuffer) => {
    if (!fileBuffer) {
        throw new Error("Resume file is required");
    }

    const parser = new PDFParse({
        data: fileBuffer
    });
    
    const parsedPdf = await parser.getText();
    
    const resumeText = parsedPdf.text?.trim();

    if (!resumeText) {
        throw new Error(
            "Could not extract readable text from this resume"
        );
    }

    const parsedProfile = await extractResumeData(resumeText);

    return {
        parsedProfile,
        metadata: {
            pages: parsedPdf.numpages
        }
    };
};


export {
    parseResume
};