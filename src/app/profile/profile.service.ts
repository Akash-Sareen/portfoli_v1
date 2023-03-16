import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects: any = [
    {
      id: 1,
      title: 'Notes',
      desc: 'Notes application, used for sharing notes between unix users.  Making sure that the application is in compliance with security and permisions.',
      livedemo: '',
      githurl: 'https://github.com/Akash-Sareen/Notes',
      mediumlink: '',
      imgUrl: 'assets/images/note.png',
      tech: 'Go.'
    },
    {
      id: 2,
      title: 'Game Review',
      desc: 'Angular website made to get the video game review. The webapp pulls data from the public-api server for the data. It has search and sorting feature implemented.',
      livedemo: '',
      githurl: 'https://github.com/Akash-Sareen/ng-video-game-db',
      mediumlink: '',
      imgUrl: 'assets/images/game.png',
      tech: 'HTML, CSS, Angular_14.'
    },
    {
      id: 3,
      title: 'FOSSology',
      desc: 'Open source license compliance software and toolkit. Fixed a couple of bugs in the project. Improving the efficiency of the application.',
      livedemo: '',
      githurl: 'https://github.com/fossology/fossology',
      mediumlink: '',
      imgUrl: 'assets/images/fossology-hero.png',
      tech: 'HTML, Twig, Regular Expression, CSS.'
    },
    {
      id: 4,
      title: 'Snake Game',
      desc: 'The mini snake game was made in python. The logic for snake body and food was the one which was a bit challenging in the project.',
      livedemo: '',
      githurl: 'https://github.com/Akash-Sareen/Py-Snake-Game',
      mediumlink: '',
      imgUrl: 'assets/images/snake.png',
      tech: 'Python'
    },
    {
      id: 5,
      title: 'Hand Sign Recognition',
      desc: 'This module was designed for the physically mute people to be used in daily life. It is wearable device which gives an audio output for the hand signs made by the user.',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/handsign.jpeg',
      tech: 'Arduino, Flex Sensor, EPROM, Speaker.'
    },
    {
      id: 6,
      title: 'S.A.M (Surprise Attendance Marker)',
      desc: 'Designed the connection and programmed Arduino to connect the components with the database. S.A.M was a lightweight, portable device with an embedded biometric scanner for attendance.',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/sam.jpg',
      tech: 'Arduino Uno, Fingerprint Sensor, LCD display, keypad, EPROM, LED lights.'
    },
    {
      id: 7,
      title: 'Bus Route Display Board',
      desc: 'The display board shows the college bus numbers, destinations, and itineraries. Led the team and overall development of the project using agile methodology. During the project development, the biggest challenge was synchronizing two Arduino boards.',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/bus.png',
      tech: 'Arduino, Dot Matrix Display Board, raspberry pi, BLE Sensor.'
    }
  ]
  about2 = `Software Developer with 2+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Spring-Boot, Elasticsearch, Spring Security, AngularJs,.
  Have good understanding of Java, AJAX, Jquery, Bootstrap, MQTT, Git, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/17x5wbJpJB7ma-QajF4n4cTdUV1264OyU/view?usp=share_link"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Spring-Boot',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'AngularJs',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'Elasticsearch',
      'progress': '70%'
    },
    {
      'id': '5',
      'skill': 'MQTT',
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2022 - 2023',
      'education': 'Master\'s Degree',
      'stream': 'Master\'s in Advance Computer Science',
      'info': `University of Birmingham ranks 91 across the world. .
Received Scholarship of £3,000 from the University.`,
      'institution': 'UNIVERSITY OF BIRMINGHAM, BIRMINGHAM'
    },
    {
      'id': '2',
      'from_to_year': '2016 - 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Completed B.E in Computer Engineering with 8.01 CGPA. .
Won the Star Student Award and best Final Year Project. .
Vice President of the Innovation Club. .
Organised multiple Inter College Events Successfully.`,
      'institution': 'SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY, CHENNAI'
    }
//     {
//       'id': '3',
//       'from_to_year': '2014 - 2016',
//       'education': 'Higher Secondary',
//       'stream': 'Science and Mathematics',
//       'institution': 'GULMOHUR HIGH SCHOOL, JAMSHEDPUR',
//       'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry. .
// There was also a good base on physics, mathematics and chemistry. .
// Completed my high school with 80%.`
//     },
//     {
//       'id': '4',
//       'from_to_year': '2013 - 2014',
//       'education': 'Secondary  School',
//       'stream': 'Science and Mathematics',
//       'institution': 'GULMOHUR HIGH SCHOOL, JAMSHEDPUR',
//       'info': `The Secondary aims at Maths , English , Science, Historyz, Litrature and Languages. .
// Completed my Secondary school with 85.6%.`
//     }
  ];
  exprienceData: any = [
    {
      id: 2,
      company: 'Kloudspot Inc.',
      location: 'Bangalore',
      timeline: 'July 2020 to August 2022',
      role: 'Software Engineer',
      work: `Technologies : Spring-Boot , AngularJs , AJAX, JQUERY , ELASTICSEARCH, MQTT, SPRING-SECURITY. .
      Upgraded the application from JDK 8 to 11 and converted the application from Spring MVC to Spring Boot. .
      Messaging Service Integration: Twilio, TCL-MMX, and Telestax. .
      Creating the UI and configuration generation for the Vision, Access-Point, and Gateway Devices and increasing the efficiency by 50%. .
      Reduced the time taken to debug errors by 30% by working to improve the project's system logging mechanism at DEBUG, ERROR, and INFO levels. .
      Recruiting and orienting new team members to the product and agile methodology like Jira & Confluence.
      `
    },
    {
      id: 1,
      company: 'Nuclei',
      location: 'Bangalore',
      timeline: 'January 2020 - April 2020',
      role: 'Software Development Engineer in Test - Intern',
      work: `Technologies : Java , Spring-Boot , SQL. Grafana, Python. .
      Built a Grafana Dashboard to monitor client latency and enable simple system alert triggering. .
      Examined the upcoming new feature using the internal testing tool from beginning to end. .
      Created new tables and reduced the table count from 150 to 70, using a python script to migrate the existing database. .
      Finding and fixing production bugs while keeping an eye on the logs and the system analytics dashboard.
  `
    }

  ]

  extraCircularInfo: any = [
    {
      id: 1,
      title: 'Blogger',
      description: '',
      img: '',
      url: ''
    }
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
