import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { pronto } from "@/data/case-studies/pronto";
export const metadata:Metadata={title:"Pronto Activation Strategy — Abhinav Vats",description:"A product strategy for activating first-time Pronto Professionals into a first completed booking."};
export default function Page(){return <CaseStudyLayout study={pronto}/>}
