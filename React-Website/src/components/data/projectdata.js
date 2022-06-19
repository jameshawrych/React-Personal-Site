
export const ProjectData = [
    {
        id:1,
        name:"Predicting Sepsis in the ICU",
        description:"Sepsis is a life threatening organ dysfunction that occurs due to the body’s response to infection. Severe cases of sepsis lead to septic shock and death. As such there is great interest in automatically predicting sepsis in patients so that clinicians can react earlier. This project aims to develop a framework for the automatic prediction of sepsis incorporating path signatures, and compare the effectiveness of traditional machine learning and deep learning methods for this problem.",
        tags:["Python","Machine Learning","TensorFlow", "XGBoost"],
        link: "sepsis",
    },
    {
        id:2,
        name:"Predicting Football Results",
        description:"How good is an AI at determining the outcome of notoriously difficult to predict sports matches? When applied to data from Premier League football matches AI is able to detect surprising results. This project applied linear regression to football data using Matlab to try to predict the final league position of football teams.",
        tags:["Matlab","Machine Learning"],
        link: "football",
        
    },
    {
        id:3,
        name:"Personal Website",
        description:"Having seen the performace and quality of React websites, I decided to build by own to showcase my projects. To do this I used React and Javascript alongside HTML and CSS. You can see the results by navigating around this website!",
        tags:["React", "HTML", "CSS"],
    },
    {
        id:4,
        name:"DevOps Website Integration",
        description:"After a couple of manual deployments I realised that is was quite labourious to push new versions of my website to the server. Therefore I decided to try my hand at DevOps and integrate my website with CircleCI. I was able to automate the build, testing and deployment of my website using a yaml configuration file that runs commands on an ephemeral VM that CircleCI spins up when the pipeline runs. The final deployment is acheived by connecting to the server via SSH and remotely syncing the files that have just been built in the pipeline to the server.",
        tags:["DevOps", "CircleCI", "Automation", "CI/CD"],
    },
 
  
] 