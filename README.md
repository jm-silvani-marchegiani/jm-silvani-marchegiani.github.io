# jm-silvani-marchegiani.github.io

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Curriculum vitae</title>
        <link rel="stylesheet" href="jm-silvani-marchegiani.github.io/cv.css">
        <link rel="icon" type="image/x-icon" href="jm-silvani-marchegiani.github.io/faviconcv.png">
    </head>
    <body>
        <header>
            <h1>Curriculum Vitae</h1>
            <h2>Keith Wallace</h2>
            <img src="fotocv.jpg" alt="programador sonriendo" width="300" height="300">
            <h3>Executive Director | Senior Software Engineer | Speaker</h3>
        </header>

        <nav>
            <ul>
              <a href="#attr-Experience">Experience</a>
              <a href="#attr-Education">Education</a>
              <a href="#attr-Personal info">Personal info</a>
              <a href="#attr-Skills">Skills</a>
              <a href="#attr-Languages">Languages</a>
              <a href="#attr-Hobbies">Hobbies</a>
              <a href="#attr-Contact info">Contact info</a>

            </ul>
        </nav>

        <aside>
            <h3 id="attr-Personal info">Personal info:</h3>
            <p>I'm a full-stack developer who loves jumping between the UX and Coding to create user-centered digital experiences. 
                Combining my passions of art, psychology, and tech I'm always on the lookout for the perfect balance between tech and humanity 
                with the goal of creating a better human experience through tech.
            </p>
            <h3 id="attr-Education">Education:</h3>
            <h4>Udemy</h4>
            <p> UX Design & User Experience Design Training Course</p>
            <p>2016-2017</p>
            <h4>Ticmas</h4>
            <p>Front-end web developer</p>
            <p>2016-2017</p>
            <h4>California State University, Northridge</h4>
            <p> Bachelor´s degree, Psychology.
            <p>2011-2016</p>
            <h3 id="attr-Skills">Skills:</h3>
            <ul class="b">
                <li><p>Engineering - Research</p></li>
                <li><p>Leadership - React</p></li>
                <li><p>Javascript - HTML</p></li>
                <li><p>CSS - NodeJS</p></li>
                <li><p>Python - C++ (entry)</p></li>
            </ul>
            
            <h3 id="attr-Languages">Languages:</h3>
            <ul class="a">
                <li><p>English (native)</p></li>
                <li><p>French (fluent)</p></li>
                <li><p>Spanish (conversational)</p></li>
            </ul>
            

        </aside>

        <section>
            <h3 id="attr-Experience">Experience:</h3>
            <h4>Founder</h4>
            <h5>Tech By Choice (2018-act)</h5>
            <p>
                Founded and secured 501(c)3 non-profit status Tech By Choice, an organization aimed at increasing diversity in the STEAM industry by offering low to no cost skill-building events to help individuals in protected groups enter, stay, and thrive in the workplace.
                Recruited an Advisory Board and leadership team to support the expansion of chapters across three states to support over 700 individuals in protected classes.
                Created and supervised programs that fostered technologists of all skill levels to become involved in the TBC Open Source program to help individuals build the skills they need to thrive in any industry.
                Coordinated efforts to identify, initiate contact, and cultivate new institutional and corporate donor relationships and partnerships resulting in securing over $9,000 for the first three-month fundraising sprint.
                Created detailed timelines for each of our programs that included key metrics and budgets to support the overall goals to help keep the board and leadership track our impact and stay on goal.
                Kept a good rapport with my direct reports to make sure their daily duties supported career growth as well as kept them engaged and not overwhelmed.
            </p>
            <h4>Engineering Manager</h4>
            <h5>Honeybee Health (2019-2019)</h5>
            <p> 
                Created and lead architectural planning and design for all internal software applications with full-stack software solutions using ReactJS, Node and Postgres
                Researched and identified an optimal technical implementation to reduce duplication of work between departments and ensure the reduction of user error by integrating with a 3rd party pharmacy backend software
                Built, trained, and mentored a diverse and inclusive technical team by building a supportive interviewing process, and implementing a career planning initiative
            </p>
            <h4>UX/UI Instructor & Curriculum Engineer</h4>
            <h5>UCLA Extension (2018-2019)</h5>
            <p> 
                Taught full-stack web development to 30 students for 6 months
                Provided clear, informative lectures on how students could bring their UX designs to life with HTML, CSS, Javascript, Node.js, and MongoDB
                Create detailed lesson plans for hundreds of UX/UI Instructors and TAs across the globe
            </p>
            <h4>Developer II</h4>
            <h5>Zenith Insurance Company (2017-2019)</h5>
            <p> 
                • Vetted and groomed technical issues to provide continual product improvement for customers within deadlines.
                • Utilized programming capabilities in Java, SQL, JavaScript, and other libraries to build out a single sign-on application equipped with multi-factor authentication.
                • Implemented a user management screen for both internal and external admin users to manage individuals' contact information and application access.
                • Recommended and implemented front end architectural improvements, design solutions, and integration solutions, such as build tools and UI frameworks.
            </p>
            <h4>UX Designer / Frontend Developer</h4>
            <h5>Estify (2014-2017)</h5>
            <p> 
                Designed, prototyped, and tested new user flows for the Estify Pro service
                Reduced user confusion and introduced new features by rebranding and redesigning both the customer-facing and internal websites
                Researched, managed and executed a new frontend architecture to move the site from jQuery UI to 
                Bootstrap and jQuery to balance business requirements and team skills
            </p>
            <h4>User Experience Designer</h4>
            <h5>META+ LAB (2015-2016)</h5>
            <p> 
                Advise, train, and provide specific guidelines multiple teams on frontend web accessibility
                Test and report on web applications for compliance with WCAG 2.0AAA and Section 508 to ensure applications were accessible.
                Coordinated project planning and execution with team members and team leads
            </p>
            
            

        </section>
      

        <footer>
            <h4 id="attr-Contact info">Contact info:</h4>
            <h5>Tel: +34 2445 23679</h5>
            <h5>Email: kwallace@outlook.com</h5>
            <h5>Adress: 742, Evergreen Terrace, Springfield. </h5>
            
            <h4 id="attr-Hobbies">Hobbies:</h4>
            <h5>Surf - Football - Basquetball - Tennis - Parachute jump</h5>
            <h5>Paragliding - Videogames - Trekking - Camping</h5>
            
            <button onclick="ocultarFormulario()" id="BotonMuestraFormulario">Contact form (click here):</button>
            <form id="Formulario" style="display:none">
                <label for="fname">First name:</label><br>
                <input type="text" id="fname" name="fname"><br>
                <label for="lname">Last name:</label><br>
                <input type="text" id="lname" name="lname"><br>
                <label for="company">Company:</label><br>
                <input type="text" id="company" name="companyname"><br>
                <label for="Tel">Tel:</label><br>
                <input type="number" id="telephone" name="telcompany"><br>
                <label for="email">Email:</label><br>
                <input type="email" id="emailname" name="email"><br>
                <label for="message">Message:</label><br>
                <textarea type="text" id="messagename" name="message"></textarea>
                <input type="submit" value="Send"><br>
            </form>
            <script src="jm-silvani-marchegiani.github.io\function.js"></script>
            
        </footer>
        
    </body>

    

</html>
