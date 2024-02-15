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
      Image: "./blogimage1.png",
      Title: "Mastering Digital Presence: A Comprehensive Guide to Mobile and Web Development Strategies",
      Description: " This blog will explore the latest trends, tools, and techniques in mobile application development and web development. It will cover topics such as responsive design, user experience optimization, cross-platform development, and more. Additionally, it will delve into how a strong digital presence contributes to brand visibility and customer engagement.",
    },
    {
      Image: "./blogimage2.png",
      Title: "Unleashing Brand Potential: The Power of Social Media Marketing and Customer Service",
      Description: " This blog will focus on the importance of social media marketing and exceptional customer service in building and nurturing brands. It will discuss strategies for leveraging social media platforms to connect with audiences, drive brand awareness, and foster meaningful relationships. Additionally, it will delve into the role of customer service in brand reputation management and customer retention.",
    },
    {
      Image: "./blogimage3.png",
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
      Image: './servicesave1.svg',
      Title: 'Mobile App Development',
      Description: 'Crafting intuitive mobile solutions tailored to your needs, enhancing user experiences on-the-go.',
    },
    {
      Image: './servicesave2.svg',
      Title: 'Website Developmet',
      Description: 'Building engaging digital platforms that showcase your brand and drive results with cutting-edge design and functionality.',
    },
    {
      Image: './servicesave3.svg',
      Title: 'Startup Consultant',
      Description: ' Guiding aspiring entrepreneurs with strategic insights and practical advice to navigate the complexities of launching and scaling their ventures successfully.',
    },
    {
      Image: './servicesave4.svg',
      Title: 'Brand Marketing',
      Description: 'Amplifying brand visibility and resonance through targeted strategies that resonate with your audience and drive meaningful engagement.',
    },
    {
      Image: './servicesave5.svg',
      Title: 'Brand Design',
      Description: 'Crafting compelling visual identities that communicate your brand story authentically and leave a lasting impression on your audience.',
    }
  ];
  