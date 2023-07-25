
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
        details: 'hi',
    },
];

const data_of_web_app_projects= [
    {
        name: 'Movie Spooky',
        image_path: './assets/movie_spooky.JPG',
        source_code: 'https://github.com/den319/Movie_spooky',
        hosting_link: 'https://den319.github.io/Movie_spooky/',
        in_progress: true,
        details: 'hiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
    {
        name: 'Stokart',
        image_path: './assets/stokart.JPG',
        source_code: 'https://github.com/den319/Stokart--a-stock-market-site',
        hosting_link: 'https://den319.github.io/Stokart--a-stock-market-site/',
        in_progress: true,
        details: 'hi',
    },
    {
        name: 'Spotify Student Offer Page',
        image_path: './assets/spotify_student_offer_page.JPG',
        source_code: 'https://github.com/den319/Spotify_Student_Offer_Page',
        hosting_link: 'https://den319.github.io/Spotify_Student_Offer_Page/',
        in_progress: false,
        details: 'hi',
    }
];



if(bar){
    bar.addEventListener('click', () => {
        nav.className= 'active';
        bar.style.opacity= '0';
        console.log(nav.className);
        console.log(nav.style);
    });
}

if(close){
    close.addEventListener('click', () => {
        console.log(nav.classList);
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
    console.log(data_of_web_app_projects);

    data_of_web_app_projects.forEach(project => {
        render_content_of_projects(project);
    });

    render_project_image(data_of_web_app_projects[0]);
}


function render_content_of_projects(project) {

    const project_list_div= document.querySelector('.project-list-div');
   


    const {name, image_path, source_code, hosting_link, in_progress}= project;

        // console.log(name);

        const project_div= document.createElement('div');
        project_div.setAttribute('class', 'project-div');
        // project_div.setAttribute('id', )
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
                source_code_link.innerText= 'Source Code';
                link_div.appendChild(source_code_link);

                const preview= document.createElement('a');
                preview.href= `${hosting_link}`;
                preview.innerText= 'Preview';
                link_div.appendChild(preview);

        
        project_div.addEventListener('click', (event) => {
            // event.preventDefault();
            // console.log('project_div clicked');

            const img_section= document.querySelector('.img-section');
            const project_info= document.querySelector('.project-info');

            img_section.innerHTML= '';
            project_info.innerHTML= '';

            render_project_image(project); 
        }, false);
}

function render_project_image(project) {
    const img_section= document.querySelector('.img-section');
    const project_info= document.querySelector('.project-info');

    const project_image= document.createElement('img');
    project_image.src= `${project.image_path}`;
    project_image.alt= `Project Image for ${project.title}`;
    img_section.appendChild(project_image);

    const project_details= document.createElement('div');
    project_details.innerText= `${project.details}`;
    project_info.appendChild(project_details);
}


render_project_section();
