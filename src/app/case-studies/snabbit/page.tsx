import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { snabbit } from "@/data/case-studies/snabbit";
export const metadata:Metadata={title:"Snabbit Retention Strategy — Abhinav Vats",description:"A product strategy for increasing Snabbit's 90-day repeat bookings through flexible household routines."};
export default function Page(){return <CaseStudyLayout study={snabbit}/>}
