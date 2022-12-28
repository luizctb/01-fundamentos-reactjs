import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url:"", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      
    },
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Luiz Tomé" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptates libero voluptas sunt facilis harum eos, laudantium soluta voluptate nesciunt perferendis enim id corporis dicta! Fuga vel iste architecto iusto."
          />
          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>  
    </div>    
  )
}




