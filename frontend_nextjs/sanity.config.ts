import { defineConfig } from 'sanity';
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas'


const config = defineConfig ({
    
    projectId: "sxxteayx",

    dataset: "production",

    title: "Nileshana's Portfolio",

    apiVersion: "2023-12-14",

    useCdn: true,
    
    basePath: "/admin",

    plugins: [deskTool()],

    schema: { types: schemas }
})

export default config;