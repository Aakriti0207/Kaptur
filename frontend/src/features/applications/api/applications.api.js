import api from "../../../core/api/client";

export const getApplications = () => api.get("/applications");
export const createApplication = (data) => api.post("/applications", data);
export const updateApplication = (id, data) => api.patch(`/applications/${id}`, data);
export const archiveApplication = (id) => api.patch(`/applications/${id}/archive`);