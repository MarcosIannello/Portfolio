export default interface Education {
    program: string;
    institution: string;
    location?: string;
    startDate: string;
    endDate?: string;
    status?: "in_progress" | "completed";
    link?: string;
    image?: string;
    gpa?: number;
    gpaScale?: number;
    gpaIncludesFails?: boolean;
}