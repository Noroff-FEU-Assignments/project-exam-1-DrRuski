import { indexBottomSection, indexMidSection, indexTopSection } from "./containers/containers";

const url = "";

async function getBlogPosts() {
    try {
        const response = await fetch(url);
        const blogPosts = await response.json();

        
    }
    catch(error) {
        console.log(error)
    }
}