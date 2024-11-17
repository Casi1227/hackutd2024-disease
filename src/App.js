import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Post from './Post';
import Profile from './Profile';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Show Navbar only on certain pages
  const [articles, setArticles] = useState([
    {
      id: 1,
      heading: 'Exploring the Mystery of Hutchinson-Gilford Progeria Syndrome',
      summary: 'Hutchinson-Gilford Progeria Syndrome (HGPS) is an extremely rare genetic condition characterized by rapid aging. This article delves into the symptoms, causes, and treatments of this fascinating disease.',
      fullText: 'Hutchinson-Gilford Progeria Syndrome (HGPS) is caused by a mutation in the LMNA gene, which produces an abnormal version of the lamin A protein. This protein is crucial for maintaining the structure of the cell nucleus, and its dysfunction leads to accelerated aging. Children with HGPS show signs of aging such as hair loss, wrinkling skin, and cardiovascular problems by the age of 2. While there is no known cure, treatments aimed at alleviating symptoms and extending life expectancy are being explored.',
      comments: [
        { id: 1, text: 'Great article on a fascinating disease. It’s amazing how research is advancing on this topic.', user: 'Dr. Smith' },
        { id: 2, text: 'I have a cousin with this condition. It’s heartbreaking but I’m hopeful for the progress in research.', user: 'John Doe' }
      ]
    },
    {
      id: 2,
      heading: 'Understanding Erdheim-Chester Disease: A Rare Form of Non-Langerhans Cell Histiocytosis',
      summary: 'Erdheim-Chester Disease (ECD) is an extremely rare form of non-Langerhans cell histiocytosis that causes inflammation and organ damage. This article explores the diagnostic challenges and treatment options for ECD.',
      fullText: 'Erdheim-Chester Disease (ECD) is a rare, systemic condition characterized by the proliferation of non-Langerhans histiocytes, which can lead to damage in various organs such as the heart, kidneys, and bones. Symptoms of ECD can vary widely but often include bone pain, heart problems, and neurological symptoms. Diagnosis can be challenging due to the rarity of the disease and its overlap with other conditions. Recent advances in targeted therapies and immunotherapy have provided hope for managing ECD, though more research is needed to understand its full scope.',
      comments: [
        { id: 1, text: 'ECD is so under-researched. It’s great to see more focus on rare diseases like this.', user: 'Jane Roe' },
        { id: 2, text: 'Understanding the pathophysiology of ECD is crucial for advancing treatments. Excited to see new research emerging.', user: 'Dr. Patel' }
      ]
    },
    {
      id: 3,
      heading: 'Kuru: The Brain Disease Caused by Cannibalism',
      summary: 'Kuru is a rare and fatal neurological disorder that was once prevalent among the Fore people of Papua New Guinea due to their practice of ritualistic cannibalism. This article explains the history, symptoms, and implications of Kuru.',
      fullText: 'Kuru is a prion disease that primarily affects the nervous system, leading to tremors, loss of coordination, and eventual death. It was most prevalent among the Fore people of Papua New Guinea, where it was transmitted through ritualistic cannibalism, particularly the consumption of deceased relatives’ brains. The disease is caused by the accumulation of infectious prion proteins that damage brain tissue. Though the practice of cannibalism has since ceased, Kuru remains a significant historical example of how prion diseases can spread in a population.',
      comments: [
        { id: 1, text: 'Kuru is an interesting example of how infectious diseases can spread through cultural practices. Important for public health awareness.', user: 'Dr. Wong' },
        { id: 2, text: 'I had never heard of Kuru before. This article was really eye-opening. It’s so sad how it affected so many people.', user: 'Emily White' }
      ]
    },
    {
      id: 4,
      heading: 'Stiff-Person Syndrome: A Rare Disorder with Unpredictable Symptoms',
      summary: 'Stiff-Person Syndrome (SPS) is a rare neurological disorder that causes severe muscle stiffness and spasms. This article explores the symptoms, potential causes, and treatment options for SPS.',
      fullText: 'Stiff-Person Syndrome (SPS) is characterized by stiffness and spasms in the muscles, leading to difficulty with movement and significant pain. The cause of SPS is not fully understood, but it is believed to involve an autoimmune response that attacks the central nervous system. Patients with SPS often experience severe muscle stiffness in the trunk and limbs, and they are at risk of falls due to impaired balance. There is no cure for SPS, but treatments such as muscle relaxants, anti-anxiety medications, and immunotherapy can help manage symptoms.',
      comments: [
        { id: 1, text: 'This disease is so rare, I had never heard of it before. Thanks for bringing awareness to it.', user: 'Sarah Lee' },
        { id: 2, text: 'My cousin has SPS. It’s a tough condition, and I’m glad to see more attention on treatment options.', user: 'Peter Kim' }
      ]
    },
    {
      id: 5,
      heading: 'Fibrodysplasia Ossificans Progressiva: A Disorder That Turns Tissue Into Bone',
      summary: 'Fibrodysplasia Ossificans Progressiva (FOP) is a rare genetic disorder that causes soft tissues such as muscles and tendons to turn into bone. This article explains the causes, progression, and challenges of FOP.',
      fullText: 'Fibrodysplasia Ossificans Progressiva (FOP) is a genetic disorder that leads to the gradual transformation of soft tissues, such as muscles, tendons, and ligaments, into bone. This process, known as heterotopic ossification, causes immobility and significant disability as the body essentially builds a second skeleton. FOP is caused by a mutation in the ACVR1 gene, which regulates the formation of bone. There is no cure for FOP, and patients are often diagnosed in childhood when the first signs appear. Management typically focuses on preventing trauma to the body, as injury can accelerate the ossification process.',
      comments: [
        { id: 1, text: 'FOP is such a devastating disease. The fact that muscles turn into bone is beyond comprehension. More research is needed.', user: 'Dr. Harris' },
        { id: 2, text: 'This condition is extremely rare, but it’s important for the public to learn about it. I hope there are breakthroughs in the future.', user: 'Emily Carter' }
      ]
    }
  ]);
  

  const addArticle = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  const showNavbar = ['/dashboard', '/post', '/profile', '/post', '/profile'].includes(location.pathname);
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {showNavbar && <Navbar />}


      {isHomePage && (
        <div className="container">
          {/* Left Image Section */}
          <div className="image-section"></div>

          {/* Right Content Section */}
          <div className="content-section">
            {/* Circular Logo Frame */}
            <div className="logo-frame">
              <img src="logo.png" alt="Logo" className="logo-image" />
            </div>
            <h1>GinkGO</h1>
            <h2>case closed.</h2>
            <div className="button-container">
              <button onClick={() => navigate('/login')}>LOGIN</button>
              <button onClick={() => navigate('/signup')}>SIGN UP</button>
            </div>
          </div>
        </div>
      )}

      {/* Define Routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard articles={articles} />} />
        <Route path="/post" element={<Post addArticle={addArticle} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
