type Message = {
    id?: string;
    title?: string;
    text?: string;
    status?: "error" | "success" | "info";
    duration?: number;
    render?: any
};