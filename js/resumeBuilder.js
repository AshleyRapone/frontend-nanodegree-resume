/* The object bio is holding my biography information which is found in the header of my resume page.
Within my bio object there is a contacts object and a skills array. */
var bio = {
  "name": "Ashley Rapone",
  "role": "Software Developer",
  "contacts": {
    "mobile": "321-720-7843",
    "email": "ashleylynnrapone@gmail.com",
    "github": "https://github.com/AshleyRapone"
  },
  "welcomeMessage": "Thank you for visiting my page!",
  "skills": [
    "HTML5", "CSS3", "JavaScript", "Responsive Design", "Framework Designs"
  ],
  "bioPic": "images/Ashley.jpg"
};

/* The object work is holding my work information which is found under the Work Experience header of my resume page.
Within the work object there is a jobs array that contains an object of each prior professional job that I held. */
var work = {
  "jobs": [
    {
      "employer": "Florida Department of Law Enforcement",
      "title": "Forensic Technologist",
      "dates": "March 2015-Present",
      "description": "Assists in screening for the presence of serological fluids. Operates robotic instrumentation used to setup DNA samples for quantification, amplification and sequencing. Performs routine maintenance on instrumentation used for DNA analysis. Prepares chemical reagents used in DNA casework."
    },
    {
      "employer": "Environmental Conservation Laboratories",
      "title": "Sample Receiving Technician",
      "dates": "January 2015-March 2015",
      "description": "Received and unpacked samples to verify accuracy of receipt against chain of custody.Labelled samples to correspond to with work order number and placed them in proper storage area.Entered environmental samples into Laboratory Information Management System."
    },
    {
      "employer": "Florida Department of Law Enforcement",
      "title": "Toxicology Intern",
      "dates": "May 2014-July 2014 ",
      "description": "Assisted with the validation of performance check.Learned how to perform solid phase and liquid-liquid extractions. Worked on a research paper on the drug gamma-hydroxybutyrate."
    }
  ]
};

/*The object projects is holding my projects information which is found under the projects header of my resume page.
Within the object projects there is a projects array that contains objects of all of the projects that I have completed. */
var projects = {
  "projects": [
    {
      "title": "Web Portfolio",
      "dates": "March 2017",
      "description": "Created a web portfolio through Udaacity's Front End Web-Developer course",
      "images": ["images/fry.jpg"],
      "url": "https://www.google.com/"
    }
  ]
};

/*The object education is holding my education information which is found under the Education header of my resume page.
Within the object education there is a school object and an online courses array containing course objects. */
var education = {
  "school": [
    {"name": "University of Central Florida",
      "dates": "2010-2014",
      "location": "Orlando, FL",
      "degree": "Bachelor of Science",
      "major": "Forensic Science",
      "minor": "Chemistry",
      "url": "https://www.ucf.edu/"
    }
  ],
  "onlineCourses": [
    {"school": "Udacity",
      "title": "Front-End Web Developer Nanodegree",
      "dates": 2017,
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {"school": "Treehouse",
     "title": "Front End Web Development",
     "dates": 2017,
     "url" : "https://teamtreehouse.com/tracks/front-end-web-development"
    }
  ]
};

/* Created variables to hold HTML strings to replace the %data% placeholders with my
name, role, bioPic and welcomeMessage from the bio object.*/
var formattedName =  HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

/* Created an empty array.
Replaced the %data% placeholders with my mobile, email and github information from the contacts object in my bio object.
By adding .push to the array name I added my mobile, email and github information to the end of the array. */
var formattedContacts = [];
formattedContacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));

/* I used jQuery selectors to add information to the header by selecting the id header.
The .prepend inserts the variables holding the name and role information to the top of the header.
THe .append inserts the variables holdig the bioPic and welcome message to the bottom of the header.*/
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMsg);

/* Made a conditional statement indicating if the length of the skills array in the bio object is more than 0,
then append(add) the HTMLskillsStart HTML string to the end of the id header of the resume page. */
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

  /* Made a loop to iterate through the skills array in the bio object and add each item from
  the skills array to the end of the id skills div of the resume page by replacing the %data%
  placeholder with each skill in the skills array in the bio object. */
  for(i in bio.skills){
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
};

/* Made a loop to iterate through the formattedContacts array and add the mobile, email and
github information to the topContacts div of the header of the resume page and added the
information to the id footerContacts div of the footer of the resume page. */
for(i in formattedContacts) {
  $("#topContacts").append(formattedContacts[i]);
  $("#footerContacts").append(formattedContacts[i]);
}

/* Made a function to hold Work information.*/
function displayWork() {
  /* Made a conditional statement indicating if the length of the jobs array in the work object is greater than 0,
  then append (add) the HTMLworkStart  HTML string to the end of the id workExperience div of the resume page. */
	if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);

    /* Made a loop to iterate through the jobs array in the work object. */
		for(i in work.jobs) {
      /* Created variables to hold HTML strings to replace the %data% placeholders with my
      employer, title, dates worked and work description from the jobs array of the work object. */
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

      /* Made a variable to hold concatenation of two variables */
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

      /* The :last jQuery selector returns the final item (employer, work title, dates worked, work description)
      in the jobs array; the information held in the variables
      becomes appenend (added) to the end of the work-entry class in the resume page. */
			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

};
/* Calling the function displayWork() so that the work information will display to the resume page. */
displayWork();

/* Made a function to hold Projects information. */
function displayProjects() {
  /* Made a conditional statement indicating if the length of the projects array in the projects object is greater than 0,
  then carry out a loop. */
	if(projects.projects.length > 0) {
    /* The loop iterates through the projects array in the projects object and appends (adds)
    the HTMLprojectStart HTML string to the end of the id projects div of the resume page. */
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

      /* Created variables to hold HTML strings to replace the %data% placeholders with my projects
      title, dates completed, and description from the projects array of the project object. The # placeholder
      is replaced with the project url located in my projects array in my projects object. */
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      /* The :last jQuery selector returns the final item (project title and url, project dates, and project description)
      in the projects array; the information held in the variables
      becomes appenend (added) to the end of the project-entry class in the resume page. */
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

      /* The loop iterates through the images in the projects array of the projects object. */
			for(img in projects.projects[i].images) {
        /* Created a variable to hold HTML string to replace the %data% placeholder with my projects image
        from the projects array of the project object. */
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
        /* The :last jQuery selector returns the final item (project image)
        in the projects array; the information held in the variable
        becomes appenend (added) to the end of the project-entry class in the resume page. */
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}
/* Calling the function displayProjects() so that the education information will display to the resume page. */
displayProjects();

/* Made a function to hold Education information. */
function displayEducation() {
  /* Made a conditional statement indicating if the length of the school array in the education object is greater than 0
  or the length of the onlineCourses array in the education object is greater than 0, then carry out a loop. */
	if(education.school.length > 0 || education.onlineCourses.length > 0) {
    /* The loop iterates through the school array in the education object and appends (adds)
    the HTMLschoolStart HTML string to the end of the id education div of the resume page. */
		for(i in education.school) {
			$("#education").append(HTMLschoolStart);

      /* Created variables to hold HTML strings to replace the %data% placeholders with my
      school name, degree, dates, location, major and minor from the school array of the education object. The # placeholder
      is replaced with the school url located in my school array in my education object. */
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.school[i].name).replace("#", education.school[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.school[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.school[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.school[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.school[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.school[i].minor);

      /* The :last jQuery selector returns the final item (school name, degree, dates attended, location, major and minor)
      in the school array; the information held in the variables
      becomes appenend (added) to the end of the education-entry class in the resume page. */
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}
    /* Made a conditional statement indicating if the length of the onlineCourses array in the education
    object is greater than 0, then append (add) the HTMLonlineCLasses to the end of the id education div of the resume page */
		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
      /* The loop iterates through the onlineCourses array in the education object and appends (adds)
      the HTMLschoolStart HTML string to the end of the id education div of the resume page. */
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);

        /* Created variables to hold HTML strings to replace the %data% placeholders with my online
        school name, course title and dates. The # placeholder is replaced with the online course urls*/
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

        /* The :last jQuery selector returns the final item (online school name, course title, dates attended and urls)
        in the onlineCourses array; the information held in the variables
        becomes appenend (added) to the end of the education-entry class in the resume page. */
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}

/* Calling the function displayEducation() so that the education information will display to the resume page. */
displayEducation();
