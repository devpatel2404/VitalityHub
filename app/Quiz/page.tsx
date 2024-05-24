import QuizSection from "../components/Quiz/Quiz"
import Link from "next/link";

export default function Quiz(){
    return(
        <main>
            <h1 className={"text-blue-800 text-2xl text-center mr-72 mb-4 mt-1"}><Link href={"/"}>VitalityHub</Link></h1>
            <QuizSection />
        </main>
    );
}
