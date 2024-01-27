import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
const Header = () => {
return (
  <div className=' flex  justify-center items-center'>
    <h3 className="text-4xl p-12 font-semibold">Welcome to Docky!!</h3>

  </div>
);
}

export default Header