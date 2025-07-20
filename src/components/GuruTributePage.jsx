import React from "react";
import "./../index.css";

export default function GuruTributePage() {
  return (
    <div className="container">
      <h1>Importance of Guru in My Life</h1>
      <p className="quote">"Guru is the guiding light that shows us the path to knowledge, wisdom, and purpose."</p>
{/* What is a Guru */}
      <div className="section">
        <h2>Who is a Guru?</h2>
        <p>In Sanskrit, “Guru” means “one who dispels darkness.” A Guru is someone who removes the darkness 
            of ignorance and fills us with knowledge, discipline, and purpose.
          A Guru can be a school teacher, spiritual guide, parent, or even a friend who transforms 
          your thinking positively.
         A Guru is not just a teacher but a mentor, philosopher, and guide who
          shapes our lives through their wisdom and support. In Indian culture,
          a Guru holds a place even above God as they help us realize our true
          potential.
        </p>
        <div className="section">
        <h2>Why We Celebrate Guru Purnima</h2>
        <p>
          Guru Purnima is celebrated to honor all Gurus who lead us from ignorance to wisdom.
          It is a time to express gratitude to those who have contributed to our personal and academic growth.
        </p>
      </div>
        
      </div>

      <div className="section">
        <h2>Historical Importance of Gurus</h2>
        <ul>
        <li><strong>Guru Dronacharya</strong>: The martial Guru of the Pandavas and Kauravas. He taught archery and discipline.</li>
        <img src="/guru 1.jpeg"  alt="Guru blessing student" />
        <li><strong>Chanakya</strong>: The master strategist who mentored Emperor Chandragupta Maurya and laid the foundation of the Maurya empire.</li>
        <img src="/guru 2.jpeg"  alt="Guru blessing student" />
        <li><strong>Swami Vivekananda</strong>: A disciple of Sri Ramakrishna, who spread Indian spiritual wisdom to the West.</li>
        <img src="/guru 3.jpeg"  alt="Guru blessing student" />
        </ul>
      </div>
       {/* Modern Role of Gurus */}
       <div className="section">
        <h2>Modern-Day Gurus</h2>
        <p>
          Today, a Guru can also be a mentor, coach, or motivational speaker who inspires us to grow emotionally, professionally, and mentally. Platforms like YouTube, podcasts, and online classes have made digital Gurus easily accessible.
        </p>
      </div>

      <div className="section">
        <h2>My Personal Experience</h2>
        <p>
        In my life, my Guru has been my school teacher who always encouraged me to believe in my dreams.
          They have inspired me to believe in myself, encouraged me during difficult times,
          and helped me grow not only academically but also morally and spiritually.
          The Guru introduces you to the pure Self, 
          makes you love it and eventually unites you with the Self. A Guru, like a father,
           holds your hand through darkness, lights up your path with wisdom and 
           supports you with endless love and care.
        </p>
        <img src="/guru.jpg" alt="Teacher guiding student" />
        <ul>
          
          <li><strong>Mere Guru</strong> – There is no word to define them .</li>
          <li><strong>freind</strong> – "A Guru shows the light, and a friend walks 
          with you through it — making both the journey and the lesson memorable."</li>
        </ul>
      </div>

      <div className="section">
        <h2>Inspiring Quotes</h2>
        <p className="quote">“Guru is the creator Brahma, the preserver Vishnu, and the destroyer Shiva.”</p>
        <p className="quote">("गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुदेवो महेश्वरः। गुरु साक्षात् परब्रह्म तस्मै श्री गुरवे नमः॥" )</p>
        <p className="quote">“The best teachers teach from the heart, not from the book.”</p>
        <p className="quote">“A teacher affects eternity; he can never tell where his influence stops.” – Henry Adams</p>

      </div>

      <footer>
        &copy; 2025 Designed by Riti Pandey | TY Data Science
      </footer>
    </div>
  );
}
