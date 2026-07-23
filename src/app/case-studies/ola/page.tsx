import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { ola } from "@/data/case-studies/ola";
export const metadata:Metadata={title:"Ola Enterprise Growth Strategy — Abhinav Vats",description:"Improving Rider Retention Through Habit Formation and Subscription-Based Mobility."};
export default function Page(){return <CaseStudyLayout study={ola}/>}
