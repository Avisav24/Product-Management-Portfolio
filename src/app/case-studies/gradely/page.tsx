import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { gradely } from "@/data/case-studies/gradely";
export const metadata:Metadata={title:"Gradely Co-Founder Story — Abhinav Vats",description:"How I built a student marketplace from problem discovery to ₹26K+ revenue."};
export default function Page(){return <CaseStudyLayout study={gradely}/>}
