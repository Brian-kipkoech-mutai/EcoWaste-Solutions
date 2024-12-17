
import axiosInstance from "@/API/axiosConfig";
import APiurls from "@/API/endpoints";

export const registerService = async (userData) =>
  await axiosInstance.post(APiurls.REGISTER, userData);
