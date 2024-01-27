
import Header from "./components/Header";
import './globals.css';
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 

export default function Home() {
  return (
    <div className="bg-yellow-200">
      <div className={roboto.className}>
          <Header />
      </div>
    
    </div>
  );
}
