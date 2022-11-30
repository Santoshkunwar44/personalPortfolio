import instance from "../axios";

export const addProject = (data) => instance.post("/project", data)
export const getProjects = () => instance.get("/project")
export const getProjectCat = () => instance.get("/project/categories")
export const getProjectsWithQuery = (data) => instance.get(`/project?tools=${data}`)
export const findProjects = (data) => instance.get(`/project/find?tools=${data}`)
export const filterProjectsApi = (data) => instance.post(`/project/filter`, data)

export const getSingleProject = (projectId) => instance.get(`/project/${projectId}`)
export const updateProject = (data) => instance.put(`/project/${data._id}`, data)
export const rateProject = (data) => instance.post(`/project/rating/${data.id}`, data)

export const getProjectChart = () => instance.get(`/project/projectData`);
