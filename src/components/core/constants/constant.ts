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
      Image: "./zender.jpg",
      Title: "Mastering Digital Presence: A Comprehensive Guide to Mobile and Web Development Strategies",
      Description: " This blog will explore the latest trends, tools, and techniques in mobile application development and web development. It will cover topics such as responsive design, user experience optimization, cross-platform development, and more. Additionally, it will delve into how a strong digital presence contributes to brand visibility and customer engagement.",
    },
    {
      Image: "./zender.jpg",
      Title: "Unleashing Brand Potential: The Power of Social Media Marketing and Customer Service",
      Description: " This blog will focus on the importance of social media marketing and exceptional customer service in building and nurturing brands. It will discuss strategies for leveraging social media platforms to connect with audiences, drive brand awareness, and foster meaningful relationships. Additionally, it will delve into the role of customer service in brand reputation management and customer retention.",
    },
    {
      Image: "./zender.jpg",
      Title: "Crafting Brand Excellence: Strategies for Effective Brand Marketing and Design",
      Description: " This blog will explore the fundamental principles and strategies behind successful brand marketing and design. It will cover topics such as brand identity development, storytelling, visual branding, and brand consistency. Furthermore, it will discuss how effective brand marketing and design contribute to brand differentiation, loyalty, and long-term success.",
    },
  ];
  
  export const education: education[] = [
    
    {
      date: " 2008 - 2013",
      Uni: "University of Southern Maine - Portland",
      Degree: "Masters in Computer Science",
    },
    {
      date: " 1997 - 2001",
      Uni: "Clarkson University",
      Degree: "B.S; Masters, Management Information Systems; Computer Science",
    },
  ];
  
  export const Awards: Award[] = [
    {
      AwardName: "Best Dad In the Whole Wide World of Maine",
    },
    {
      AwardName: "Eagle Scout",
    },
   
   
  ];
  export const reviews = [
    {
      Image: './habiba.jpg',
      Title: 'Positivity, professionalism and strong work ethic are the words that clearly define Philip. I have had the pleasure of working with him on several design projects and looking forward to creating more magic together.🙌',
      Designation:'User Experience / interface designer',
      Name: 'Habiba Gillani',
    },
    {
      Image: './hudson.jpg',
      Title: 'Philip is an exceptional professional whose dedication and expertise have consistently impressed me. His deep understanding of the software industry and his ability to navigate complex technical challenges are truly commendable. Whenever we encounter obstacles or face difficult decisions, Philips sharp analytical skills and strategic thinking always come to the forefront, providing us with valuable insights and solutions.',
      Designation:'Founder & CEO at MH TECHNOLOGIES',
      Name: 'Syed Subhan Gillani (Mark Hudson)',
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
      Title: 'Android Development:',
      Description: 'Building innovative Android solutions for seamless user experiences across devices.',
    },
    {
      Image: './serviceicon.svg',
      Title: 'Web Development',
      Description: 'Developing dynamic web solutions to enhance online presence and user interaction.',
    },
    {
      Image: './serviceicon.svg',
      Title: 'Brand Marketing',
      Description: 'Strategically promoting brands to captivate audiences and drive impactful engagement.',
    },
    {
      Image: './serviceicon.svg',
      Title: 'Brand Design',
      Description: 'Crafting visually compelling brand identities to resonate authentically with audiences.',
    }
  ];
  