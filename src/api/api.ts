import { faker } from '@faker-js/faker';

import { Comment, Project } from "../model/project";

function generateDummyProject() {
    return {
        title: faker.commerce.productName(),
        description: faker.lorem.paragraphs(3),
        created_at: faker.date.past(2022).toDateString()
    }
}

function generateDummyProjectComment() {
    return {
        name: faker.commerce.productName(),
        comment: faker.lorem.paragraphs(2),

    }
}

function generateDummyProjects(n: number) :Project[]  {
    return Array.from(new Array(n))
    .map((_, index) => ({...generateDummyProject(), id: index+1}))
    .map(projectResponseToModel)
}


function generateDummyProjectComments(n: number) :Comment[]  {
    return Array.from(new Array(n))
    .map((_) => ({...generateDummyProjectComment()}))
    .map(projectCommentResponseToModel)
}


function projectResponseToModel(res: any): Project {
    return {
        id: res.id,
        title: res.title,
        comments: res.comments,
        description: res.description,
        createdAt: res.created_at
    }
}

function projectCommentResponseToModel(res: any): Comment {
    return {

        name: res.name,
       comment: res.comment,
    }
}

export async function getProjectList(): Promise<Project[]> {
    const response = await fetch("https://pwl-webservice-portofolio.herokuapp.com/api/projects")
    const body = await response.json()
    return body.data.projects.map(projectResponseToModel)
}

export async function getProjectByID(id: number): Promise<Project|undefined> {
    const response = await fetch(`https://pwl-webservice-portofolio.herokuapp.com/api/projects/${id}?c=true`)
    const body = await response.json();
    return projectResponseToModel(body);
}

export async function getProjectComments(id: number): Promise<Comment[]> {
    return new Promise<Comment[]>((resolve, _) => {
        setTimeout(() => resolve(generateDummyProjectComments(20)), 1 * 1000)
    })
}



export async function sendComments(projectId: string, name: string, comment: string) {
    fetch(`https://pwl-webservice-portofolio.herokuapp.com/api/projects/${projectId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'name': name, 'comment': comment})
    })
    
}
