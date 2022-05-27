
export type Project =  {
    id: number;
    title: string;
    comments: Comment[],
    description: string;
    createdAt: string;
}

export type Comment = {
    name: string,
    comment: string
}