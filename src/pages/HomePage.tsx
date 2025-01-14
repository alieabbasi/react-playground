import { Link } from "react-router";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl">HomePage</h1>
      <div className="flex flex-col jus">
        <Link to={"/rick-and-morty"}><button>Rick and Morty</button></Link>
        <Link to={"/text-indicator"}><button>Text Indicator</button></Link>
      </div>
    </div>
  )
}
