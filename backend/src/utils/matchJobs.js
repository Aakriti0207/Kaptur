export const calculateMatch = (job, user) => {
    //1. Eligibility Check
    if(
        job.eligibleBatches?.length &&
        !job.eligibleBatches.includes(user.batchYear)
    ){
        return {
            score: 0,
            level: "Not eligible",
            reason: `This role is for ${job.eligibleBatches.join(", ")} batch`
        }
    }

    let score = 0;

    //2. Skill overlap
    const jobSkills = job.extractedSkills || [];
    const userSkills = user.skills || [];

    const matchingSkills = jobSkills.filter((jobSkill) =>
        userSkills.some(
            (userSkill) =>
                userSkill.toLowerCase() === jobSkill.toLowerCase()
        )
    );

    score += Math.min((matchingSkills.length / Math.max(jobSkills.length, 1)) * 40, 40);

    //3. Location
    const preferredLocations = user.preferredLocations || [];

    const locationMatch = preferredLocations.some((location) => job.location?.toLowerCase().includes(location.toLowerCase()));

    if(locationMatch) score += 25;

    //4. Role matching
    const preferredRoles = user.preferredJobRoles || [];

    const roleMatch = preferredRoles.some((role) => job.title.toLowerCase().includes(role.toLowerCase()));
    if(roleMatch) score += 25;

    //5. Freshness
    if(job.postedDate){
        const daysOld = (Date.now() - new Date(job.postedDate)) / (1000 * 60 * 60 * 24);

        if(daysOld <= 1) score += 10;
        else if (daysOld <= 3) score += 5;
    }

    let level = "LOW";

    if(score >= 80) level = "STRONG";
    else if(score >= 60) level = "GOOD";
    else if(score >= 40) level = "POSSIBLE";

    return {
        score: Math.round(score),
        level,
        matchingSkills
    }
}