import axiosApi from "@/lib/api";

export const signup = async (data: { username: string; email: string; password: string }) => {
    const res = await axiosApi.post("/auth/signup", data);
    return res.data;
}

export const login = async (data: { email: string; password: string }) => {
    const res = await axiosApi.post("/auth/login", data);
    return res.data.token;
}