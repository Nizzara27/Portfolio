import { defineConfig } from 'sanity';
import { deskTool } from "sanity/desk";
import project from './sanity/schemas/project-schema';
//An improvement that I could make is creating a barrel file that stores all the schemas to reduce the importing

const config = defineConfig ({
    
    projectId: "sxxteayx",

    dataset: "production",

    title: "Nileshana's Portfolio",

    apiVersion: "2023-12-14",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: { types: [project]}
})

export default config;