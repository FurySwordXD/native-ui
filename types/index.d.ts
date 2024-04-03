type Message = {
    id?: string;
    title?: string;
    text?: string;
    status?: "error" | "success" | "info";
    animation?: "fadeIn" | "fadeInDown" | "fadeInUp" | "fadeInRight" | "fadeInLeft";
    duration?: number;
    render?: (dismissMessage: Function) => React.JSX.Element;
};