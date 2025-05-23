// eslint-disable-next-line @typescript-eslint/no-unused-expressions
import Link from 'next/link';
import Hi from './components/hi';
export default function Home() {
  const handleClick = (msg: string) => {
    alert(`Friend name: ${msg}`);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/user">Go to User</Link>
      <br />
      <Link href="/about">Go to About</Link>

      <div>
        <Hi name='jason' onClick={handleClick}></Hi>
      </div>
    </div>
  );
}
