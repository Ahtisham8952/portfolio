export interface education {
    date: string;
    Uni: string;
    Degree: string;
  }
  
  export interface Award {
    AwardName: string;
  }
  export interface BlogPost {
    Image: string;
    Title: string;
    Description: string;
  }
  
  export const blogs: BlogPost[] = [
    {
      Image: "./blogpostimg.png",
      Title: "Can Pakistan still offer a promising future if you choose to stay here?",
      Description: "In the last five years, one thing has become quite clear: for Pakistan to maintain high sustainable growth, it needs dollars, especially through exports. That’s where the IT sector has stood out: without much governmental support,",
    },
    {
      Image: "./blogpostimg.png",
      Title: "Can Pakistan still offer a promising future if you choose to stay here?",
      Description: "In the last five years, one thing has become quite clear: for Pakistan to maintain high sustainable growth, it needs dollars, especially through exports. That’s where the IT sector has stood out: without much governmental support,",
    },
    {
      Image: "./blogpostimg.png",
      Title: "Can Pakistan still offer a promising future if you choose to stay here?",
      Description: "In the last five years, one thing has become quite clear: for Pakistan to maintain high sustainable growth, it needs dollars, especially through exports. That’s where the IT sector has stood out: without much governmental support,",
    },
  ];
  
  export const education: education[] = [
    {
      date: " 2016-2016",
      Uni: "Stanford University United States",
      Degree: "Technology Entrepreneurship",
    },
    {
      date: " 2012-2014",
      Uni: "LUMS Pakistan",
      Degree: "Masters in Computer Science",
    },
    {
      date: " 2004-2008",
      Uni: "FAST-NUCES Pakistan",
      Degree: "Bachelors in Computer Science",
    },
  ];
  
  export const Awards: Award[] = [
    {
      AwardName: "CEO Excellence Award by CEO Club and Governor of Punjab",
    },
    {
      AwardName: "Best CEO of the Year at Growth Summit 2023",
    },
    {
      AwardName: "Best Tech Company of the Year at Growth Summit 2023",
    },
    {
      AwardName: "Commendation Award by the Punjab Government",
    },
  ];
  export const reviews = [
    {
      Image: './testimonialsub1.png',
      Title: 'Usman was an amazing technical partner as we grew Concert.His rapid prototyping and testing helped us deliver first-in- category features in a competitive landscape. As we began to see success, and grew rapidly, Usman helped us recruit excellent talent very quickly, and helped us prioritize an increasingly complex roadmap. Usman’s startup leadership helped us scale and sell the business in just a few years- he’d be an incredible asset to anyone’s team!',
      Designation:'2x Founder, CFO, Sales Coach,Incentive Comp',
      Name: 'Sanj Sanampudi',
    },
    {
      Image: './testimonialsub2.png',
      Title: 'I’ve known Usman for years in the tech and startup world. His visionary leadership transformed his company, growing it from 200 to over 1500 professionals in just two years. Usman’s passion for education is truly inspiring, turning dreams into reality. He’s a bold, solution-driven leader who empowers change and fosters responsibility.',
      Designation:'Senior Software Engineer,Microsoft',
      Name: 'Abdullah Ansari',
    },
  ];

export interface Service {
    Image: string;
    Title: string;
    Description: string;
  }
  
  export const Services: Service[] = [
    {
      Image: './serviceicon.svg',
      Title: 'Brand Strategy & Art Direction',
      Description: 'Creating a higher spacing and how people move through a unique',
    },
    {
      Image: './serviceicon.svg',
      Title: 'Brand Strategy & Art Direction',
      Description: 'Creating a higher spacing and how people move through a unique',
    },
    {
      Image: './serviceicon.svg',
      Title: 'Brand Strategy & Art Direction',
      Description: 'Creating a higher spacing and how people move through a unique',
    },
    {
      Image: './serviceicon.svg',
      Title: 'Brand Strategy & Art Direction',
      Description: 'Creating a higher spacing and how people move through a unique',
    }
  ];
  