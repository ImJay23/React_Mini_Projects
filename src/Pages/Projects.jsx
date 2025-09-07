
import { Grid } from "@mui/material";
import ProjectCard from "../Components/ProjectCards";

const Projects = ()=>{
    const ProjectsData=[
        {name: "Currency Converter", link:"/currency-converter", bgUrl:'https://images.pexels.com/photos/5921122/pexels-photo-5921122.jpeg'},
        {name: "Password Generator", link:"/password-generator", bgUrl:'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'},
        {name: "Background Changer", link:"/bg-changer", bgUrl:null},
        {name: "Todo List", link:"/todos", bgUrl:null},
    ]
    return (
        <main className='page-container flex-col gap-3 items-start justify-start'> 
            <h1>Projects: </h1>
            <Grid container spacing={4}>
                    {ProjectsData?.map((item, idx)=>(
                        <Grid size={{xs:12, sm:12, md:6, lg:3 }}>
                            <ProjectCard key={idx} name={item.name} link={item.link} bgUrl={item.bgUrl}/>
                        </Grid>
                    ))}
            </Grid>
        </main>
    )
}
export default Projects;