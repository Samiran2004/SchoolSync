import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    username: null,
    token: null,
    isLoaded: false,
    userData: null,

    // Student signup method...
    signUpStudent: async()=>{
        console.log("Signup student...");
    },

    // Teacher signup method...
    signUpTeacher: async()=>{
        console.log("Signup teacher...");
    }
}));