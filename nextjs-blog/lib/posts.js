import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// for converting markdown files to HTML strings
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts'); // root/posts (folder)

export async function peopleApi() {
    const url = "https://ghibliapi.herokuapp.com/people"
    const ret = await fetch(url)
    const retJson = await ret.json();
    /*console.log(retJson);*/

    const data = retJson.map((info) =>
    {
            return {
                id: info.id,
                name: info.name,
                eye_color: info.eye_color,
                hair_color: info.hair_color,
            }
    }); 

    console.log(data);
    return data;

  
}

export function getAllPostIds() { // returns a list of filenames as ids 
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: { // returns an array  
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort posts by date
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}