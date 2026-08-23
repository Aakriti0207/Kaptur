export const calculateMatch = (job, user) => {
    if(job.eligibleBatches.length && !job.eligibleBatches.includes(user.batchYear)){
        return {
            level: "Not eligible",
            reason: `This role is for ${job.eligibleBatches.join("/")} batch`
        }

        const userSkills = (user.preferredJobRoles || "").toLowerCase();
        const overlap = job.extractedSkills.filter(
            s => userSkills.includes(s.toLowerCase())
        ).length;

        if (overlap >= 3) return { level: "Strong match" };
        if (overlap >= 1) return { level: "Medium match" };
        return { level: "Low match" };
    }
}