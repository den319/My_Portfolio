
// ----------------------------------- elements --------------------
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('ul-list');

const project_section= document.querySelector('.project-section');
const project_container= document.getElementById('project-container');





// ------------------------------------ variables ---------------------------

const data_of_game_projects= [
    {
        name: 'Tic Tac Toe',
        image_path: './assets/tic_tac_toe.JPG',
        source_code: 'https://github.com/den319/Tic-Tac-Toe',
        hosting_link: 'https://den319.github.io/Tic-Tac-Toe/',
        in_progress: false,
        skills: ['HTML', "CSS", 'JavaScript'],
        details: '• A classic two-player Tic Tac Toe game with a responsive design. \n\n • Players take turns marking spaces in a three-by-three grid with Os and Xs. \n\n • The player who gets three marks in a row wins the game.',
    },
];

const data_of_web_app_projects= [
    {
        name: 'SoundCloud Clone',
        image_path: './assets/soundCloud_clone_img.PNG',
        source_code: 'https://github.com/den319/Sound-Cloud-Clone---React-Project-1---o4mx250y2w4d',
        hosting_link: 'https://sound-cloud-clone-react-project-1-o4mx250y2w4d.vercel.app/',
        in_progress: false,
        skills: ['HTML', "CSS", 'ReactJS', 'TailwindCSS'],
        details: '• Developed a SoundCloud clone, a web-based music streaming application, to showcase my expertise in web development.  \n\n • This project mirrors the core functionalities of SoundCloud, enabling users to explore, upload, and listen to music seamlessly.  \n\n • It demonstrates my skills in creating responsive user interfaces, managing audio playback, and implementing dynamic data handling with ReactJS.',

    },
    {
        name: 'Movie Spooky',
        image_path: './assets/movie_spooky.JPG',
        source_code: 'https://github.com/den319/Movie-Spooky',
        hosting_link: 'https://den319.github.io/Movie-Spooky/',
        in_progress: false,
        skills: ['HTML', "CSS", 'JavaScript'],
        details: '• A responsive movie search application that allows users to search for movies, view detailed information, and manage a watchlist. \n\n • Utilized the REST API to fetch movie data and implemented features like sorting and searching. \n\n • Features: Watchlist management, sorting of list of movies, responsive design.',
    },
    {
        name: 'Stokart',
        image_path: './assets/stokart.JPG',
        source_code: 'https://github.com/den319/Stokart-v-1.0.0',
        hosting_link: 'https://den319.github.io/Stokart-v-1.0.0//',
        in_progress: fasle,
        skills: ['HTML', "CSS", 'JavaScript'],
        details: '• A responsive stock market information web-application that provides updates on stocks of US stock market. \n\n • Utilized the REST API to fetch stock data, including top gainers and top losers. \n\n • Features: Top gainers and losers, stock search with recommendation, daily/weekly/monthly data views, watchlist management.',
    },
    {
        name: 'Spotify Student Offer Page',
        image_path: './assets/spotify_student_offer_page.JPG',
        source_code: 'https://github.com/den319/Spotify_Student_Offer_Page',
        hosting_link: 'https://den319.github.io/Spotify_Student_Offer_Page/',
        in_progress: false,
        skills: ['HTML', "CSS", 'JavaScript'],
        details: '• This is a offer page specially targeting the student customer with exclusive offers given by Spotify.',
    }
];



if(bar){
    bar.addEventListener('click', () => {
        nav.className= 'active';
        bar.style.opacity= '0';
    });
}

if(close){
    close.addEventListener('click', () => { 
        nav.classList.remove('active');
        bar.style.opacity= '1';
    })
}


function render_project_section() {
   

    const image_container_1= document.createElement('section');
    image_container_1.setAttribute('class', 'image-container');
    image_container_1.setAttribute('id', 'image-container-1');
    project_container.appendChild(image_container_1);

        const game_btn= document.createElement('button');
        game_btn.setAttribute('class', 'project-button');
        game_btn.setAttribute('id', 'game-btn');
        image_container_1.appendChild(game_btn);

            const image_1= document.createElement('img');
            image_1.setAttribute('class', 'image');
            image_1.setAttribute('id', 'image-1');
            image_1.src= "./assets/game_image_mobile.jpg";
            game_btn.appendChild(image_1);

            const field_title_1= document.createElement('h2');
            field_title_1.setAttribute('class', 'field-title');
            field_title_1.setAttribute('id', 'field-title-1');
            field_title_1.innerText='Game Development';
            game_btn.appendChild(field_title_1);


    const image_container_2= document.createElement('section');
    image_container_2.setAttribute('class', 'image-container');
    image_container_2.setAttribute('id', 'image-container-2');
    project_container.appendChild(image_container_2);


        const web_btn= document.createElement('button');
        web_btn.setAttribute('class', 'project-button');
        web_btn.setAttribute('id', 'web-btn');
        image_container_2.appendChild(web_btn);

            const image_2= document.createElement('img');
            image_2.setAttribute('class', 'image');
            image_2.setAttribute('id', 'image-2');
            image_2.src= "./assets/web_image_pc-1.jpg";
            web_btn.appendChild(image_2);

            const field_title_2= document.createElement('h2');
            field_title_2.setAttribute('class', 'field-title');
            field_title_2.setAttribute('id', 'field-title-2');
            field_title_2.innerText='Web Development';
            web_btn.appendChild(field_title_2);


        // event listner for different field

        game_btn.addEventListener('click', (event) => {
            render_outer_layout();

            render_game_development_projects(); 
        });

        web_btn.addEventListener('click', (event) => {
            render_outer_layout();

            render_web_development_projects();
        })
}


function render_outer_layout() {
    project_container.innerHTML= '';

    if(screen.width < 590) {
        project_container.style.height= '20rem';
    }
    

    // console.log(screen.width);
        
            const outer_project_container= document.createElement('div');
            outer_project_container.setAttribute("class", "outer-project-container");
            project_container.appendChild(outer_project_container);
        
                const back_btn= document.createElement('button');
                back_btn.setAttribute('class', 'back-btn');
                back_btn.textContent= 'Back';
                outer_project_container.appendChild(back_btn);
        
        
                back_btn.addEventListener('click', (event) => {
                    
                    project_container.innerHTML= '';
                    project_container.style.height= '40rem';

        
                    render_project_section();
                });
        
                const project_sub_container= document.createElement('div');
                project_sub_container.setAttribute("class", "project-sub-container");
                outer_project_container.appendChild(project_sub_container);
        
                    const project_list_div= document.createElement('div');
                    project_list_div.setAttribute('class','project-list-div');
                    project_sub_container.appendChild(project_list_div);
        
                    const about_project_section= document.createElement('div');
                    about_project_section.setAttribute('class', 'about-project-section');
                    project_sub_container.appendChild(about_project_section);
        
                        const img_section= document.createElement('div');
                        img_section.setAttribute('class', 'img-section');
                        about_project_section.appendChild(img_section);

                        const skill_div= document.createElement('div');
                        skill_div.setAttribute('class', 'skill-div');
                        about_project_section.appendChild(skill_div);
        
                        const project_info= document.createElement('div');
                        project_info.setAttribute('class', 'project-info');
                        about_project_section.appendChild(project_info);
}
 

function render_game_development_projects() {

    data_of_game_projects.forEach(project => {
        render_content_of_projects(project);
    });

    render_project_image(data_of_game_projects[0]);

}


function render_web_development_projects() {

    data_of_web_app_projects.forEach(project => {
        render_content_of_projects(project);
    });

    render_project_image(data_of_web_app_projects[0]);
}


function render_content_of_projects(project) {

    const project_list_div= document.querySelector('.project-list-div');
   


    const {name, skills, image_path, source_code, hosting_link, in_progress}= project;

        // console.log(name);

        const project_div= document.createElement('div');
        project_div.setAttribute('class', 'project-div');
        project_list_div.appendChild(project_div);

            const project_header= document.createElement('div');
            project_header.setAttribute('class','project-header');
            project_div.appendChild(project_header);

                const project_name= document.createElement('h2');
                project_name.setAttribute('class', 'project-name');
                project_name.textContent = name ;
                project_header.appendChild(project_name);

                if(in_progress) {
                    const progress= document.createElement('h5');
                    progress.setAttribute('class', 'progress');
                    progress.textContent='In Progress';
                    project_header.appendChild(progress);
                }

            const link_div= document.createElement('div');
            link_div.setAttribute('class', 'link-div');
            project_div.appendChild(link_div);

                const source_code_link= document.createElement('a');
                source_code_link.href=`${source_code}`;
                source_code_link.target='_blank';
                source_code_link.innerText= 'Source Code';
                link_div.appendChild(source_code_link);

                const preview= document.createElement('a');
                preview.href= `${hosting_link}`;
                preview.target= '_blank';
                preview.innerText= 'Preview';
                link_div.appendChild(preview);

        
        project_div.addEventListener('click', (event) => {

            const img_section= document.querySelector('.img-section');
            const project_info= document.querySelector('.project-info');
            const skill_div= document.querySelector('.skill-div');

            img_section.innerHTML= '';
            project_info.innerHTML= '';
            skill_div.innerHTML= '';

            render_project_image(project); 
        }, false);
}

function render_project_image(project) {
    const img_section= document.querySelector('.img-section');
    const project_info= document.querySelector('.project-info');
    const skill_div= document.querySelector('.skill-div');

    const project_image= document.createElement('img');
    project_image.src= `${project.image_path}`;
    project_image.alt= `Project Image for ${project.title}`;
    img_section.appendChild(project_image);

    render_skill_section(project.skills, skill_div);

    const project_details= document.createElement('div');
    project_details.innerText= `${project.details}`;
    project_info.appendChild(project_details);
}

function render_skill_section(skills, parent) {

    skills.forEach(skill => {
        const skill_name= document.createElement('div');
        skill_name.setAttribute('class', 'name-of-skill');
        skill_name.innerText= `${skill}`;
        parent.appendChild(skill_name);
    });
}


render_project_section();

