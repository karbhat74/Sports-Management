import api from "./api";

export const getAchievements = async () => {
  const response = await api.get("/achievementS");
  return response.data;
};
