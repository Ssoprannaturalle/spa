import React, { useEffect, useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import myImage from '../assets/coverdogy1.png';
import myImagePro from '../assets/Untitled-11.png';
import myImageBlog from '../assets/dodyy.jpg';
import myZodiac from '../assets/zodiac.jpg';
import my from '../assets/dae.jpg';
import './Pages.css';




  const Home = () => {
    const [darkMode] = useState(false);

  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          controls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 1 }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  // Function to toggle dark mode
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >

<div className={darkMode ? 'home-container dark-mode' : 'home-container'}>
      
      <div className="home-container">

      <div className="text-column">

         <motion.h2 className='Helloh2'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} >

            Hello, Everybody !  
            
         </motion.h2>


         <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            
            customized pet portals ! 

         </motion.h1>

         <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

          მე თამარ ოქროპირიძე ვარ. ეს არის საინფორმაციო საიტი ძაღლებისა და ჩემი საყვარელი ძაღლის ჯიშის შესახებ. ამ საიტზე თქვენ იხილავთ ინფორმაციას შემდეგ თემებზე: 
          ვაქცინაცია ძაღლებში, წვრთნა, როგორ მივაჩვიოთ ლეკვი ერთ ადგილას მოსაქმებას და ძაღლები ზოდიაქოს ნიშნით.

          </motion.p>
        
          <h2>Welcome to Dog Registration</h2>

          <p>Register your dog by clicking below:</p>

          <Link to="/dogregistrationform">
          <motion.button className='register-button'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>

          Register Dog

          </motion.button>
          </Link>

      </div>

      <div className="image-column">

            <img src={myImage} alt="My"/>
            {/* <img src={darkMode ? DarkPhoto : LightPhoto} alt="DOgs in the Field" /> */}

      </div>

      </div>
      {/* </div> */}







      
      <div className="home-container1">
      <div className='aboutme'>
      <div className="image-column1">

        <img src={myImagePro} alt="My" className='Profile'/>

      </div>

      <div className="text-column1">

        <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

         ცოტა რამ ჩემს შესახებ 

        </motion.h1>

        <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

         გამარჯობა, მე ვარ თამარ ოქროპირიძე. მე ვარ საქართველოდან. მე ვარ დამწყები ვებ დეველოპერი და ანიმატორი.

        </motion.p>

        <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

         მე ვსწავლობდი გორის N8 საჯარო სკოლაში 2002 წლიდან - 2020 წლამდე. შემდეგ ჩავაბარე ბიზნესისა და ტექნოლოგიების უნივერსიტეტში 2020 წელს. 
         ამ ეტაპზე მე ვარ მეოთხე კურსის სტუდენტი.

        </motion.p>

        <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} >

         ცოტა რამ ჩემი გამოცდილების შესახებ ... 2017 და 2018 წლებში ვიყავი Women Techmakers_ის მონაწილე, რომელიც ჩატარდა GDG TBILISI and Google_ის პარტნიორობით საქართველოში.
         2018 წელს ასევე ვიყავი პოლიტიკური ეთიკის მონაწილე , რომელიც გაიმართა Future Diplomats' Club and Free University_ში.
         2018 წელსვე ვიყავი Europe-Georgia Institute_ის პოლიტიკური ეთიკის წევრი. 2019 წელს გავლილი მაქვს Intel_ის 36 საათიანი სასწავლო კურსი სახელწოდედბით Innovative education.
         2019 წელს გავხდი Sustainable development_ის ერთ-ერთი კომიტეტის ხელმძღვანელი. 2021 წელს კი გავიარე HP Life_ის ონლაინ კურსი.

        </motion.p>

        <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

         თავისუფალ დროს ჩემი ჰობებია : ძაღლებთან ერთად სეირნობა ; მოგზაურობა და ლაშქრობები ; კოდირება და ანიმაციების შექმნა ; 
         კითხვა და მეგობრებთან ერთად გართობა.

        </motion.p>

      </div> 
      </div>
      </div>
      











      <div className="home-container1">
      <div className='aboutme1'>
      <div className="text-columnblog">

        <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

           Pet's Habits And Advices.

        </motion.h1>

        <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} >

           Don't Fonget to take care of your Pets !
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} >
            ვსაუბრობთ აცრებზე თავდაპირველად განვიხილოთ რა არის აცრა ? აცრა არის ის , რაც ორგანიზმს აიძულებს გამოიმუშაოს ანტისხეულები 
            დაავადებების წინააღმდეგ . მნიშვნელოვანია ძაღლი აცრილი იყოს ცოფზე და ჩატარებული ჰქონდეს კომპლექსური აცრები . 
            შემდეგ კი რეკომენდირებულია ყოველ ერთ წელიწადში ერთხელ ერთი კომპლექსური აცრის ჩატარება ....
        </motion.p>

        <Link to="/blog">
        <motion.button className='register-button'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} >
          Read More
        </motion.button>
        </Link>

      </div> 
      <div className="image-column1">

        <img src={myImageBlog} alt="My" className='Profileblog'/>

      </div>
      </div>
      </div>












      <div className="home-container1">
      <div className='aboutme'>
      <div className="image-column1">

        <img src={myZodiac} alt="My" className='Profile'/>

      </div>

      <div className="text-column1">

        <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

         Zodiac of Dogs

        </motion.h1>




        <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

         თქვენ ალბათ იცით საკუთარი ზოდიაქოს ნიშანი, მაგრამ იცით თუ არა თქვენი ძაღლის ზოდიაქოს ნიშანი? 
         მეტი ცოდნა თქვენი ძაღლის პიროვნების შესახებ დაგეხმარებათ უკეთ იზრუნოთ მათზე. უძველესი დროიდან ადამიანები უყურებენ ცაში ვარსკვლავებსა და პლანეტებს, 
         ცდილობდნენ გაერკვნენ მათი ადგილი კოსმოსში. 

        </motion.p>

        <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

         ინდივიდის დაბადების დროს პლანეტების პოზიციების შესწავლით, ასტროლოგებს შეუძლიათ გაიგონ ბევრი რამ ადამიანის ან შინაური ცხოველის შესახებ, როგორიცაა მათი 
         ხასიათი და პოტენციალი, ასევე მათი შეზღუდვები და როგორ გადაჭრან ისინი. ასტროლოგიას ასევე შეუძლია გაგვაცნოს აქტუალური საკითხები, 
         რამდენად თავსებადები ვართ ჩვენს ცხოვრებაში მნიშვნელოვან ადამიანებთან ან შინაურ ცხოველებთან. წაიკითხეთ, რომ გაიგოთ ძაღლის ზოდიაქოს ნიშნები და 
         რას ამბობს თქვენი ძაღლის ასტროლოგიის ნიშანი მათ შესახებ

        </motion.p>

        <Link to="/zodiac">
        <motion.button className='register-button'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>

          Read More

        </motion.button>
        </Link>



      </div> 
      </div>
      </div>








      <div className="home-container1">
      <div className='aboutme1'>
      <div className="text-columnmy">

        <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

             My Dogs 

        </motion.h1>

        <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

           ჩემი საყვარელი ძაღლის ჯიშია : ფრანგული ბულდოგი , ინგლისური ბულდოგი , პიტბული . 

        </motion.p>

        <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} >

          დღესდღეობით მე მყავს 3 პიტბული . 1 მამალი და 2 დედალი ძაღლი. მათი სახელებია : კრატოსი ; ნალა და კიარა . 
           თუ ჩემი ძაღლების შესახებ მეტი ინფორმაციის გაგება გსურს ეწვიე ჩემს ბლოგს. მე გაგიზიარებთ ასევე ჩემს გამოცდილებას .

        </motion.p>

        <Link to="/MyDogs">
        <motion.button className='register-button'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>

          Read More

        </motion.button>
        </Link>

      </div> 

      <div className="image-column1">

        <img src={my} alt="My" className='Profileblog'/>

      </div>
      </div>
      </div>


 </div>
    </motion.div>
    
    
  );
};

export default Home;












