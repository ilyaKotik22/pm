import { FilmsItemType } from "@/components/Item";
import { MenuFilms } from "@/components/MenuFilms";
import Image from "next/image";

export default function Home() {
  const filmss: FilmsItemType[] = [{
    id: 'wasd',
    title: "Хищник: Планета смерти",
    originalTitle: "Predator: Badlands",
    year: 2025,
    country: "США",
    quality: ["HD 720", "1080"],
    categories: ["Фильмы", "2025", "Американские", "Боевик", "Фантастика", "Премьеры"],
    director: "Дэн Трахтенберг",
    actors: ["Эль Фаннинг", "Димитриус Коломатанги"],
    image: 'sad',
    rating:  {like: 22, dislike: 12}
},{
    id: 'wasfasd',
    title: "Хищник: Планета смерти",
    originalTitle: "Predator: Badlands",
    year: 2025,
    country: "США",
    quality: ["HD 720", "1080"],
    categories: ["Фильмы", "2025", "Американские", "Боевик", "Фантастика", "Премьеры"],
    director: "Дэн Трахтенберг",
    actors: ["Эль Фаннинг", "Димитриус Коломатанги"],
    image: 'sad',
    rating:  {like: 22, dislike: 12}
},{
    id: 'wiujasd',
    title: "Хищник: Планета смерти",
    originalTitle: "Predator: Badlands",
    year: 2025,
    country: "США",
    quality: ["HD 720", "1080"],
    categories: ["Фильмы", "2025", "Американские", "Боевик", "Фантастика", "Премьеры"],
    director: "Дэн Трахтенберг",
    actors: ["Эль Фаннинг", "Димитриус Коломатанги"],
    image: 'sad',
    rating:  {like: 22, dislike: 12}
},{
    id: 'wasd5yht',
    title: "Хищник: Планета смерти",
    originalTitle: "Predator: Badlands",
    year: 2025,
    country: "США",
    quality: ["HD 720", "1080"],
    categories: ["Фильмы", "2025", "Американские", "Боевик", "Фантастика", "Премьеры"],
    director: "Дэн Трахтенберг",
    actors: ["Эль Фаннинг", "Димитриус Коломатанги"],
    image: 'sad',
    rating:  {like: 22, dislike: 12}
},{
    id: 'wsasdfdsasd',
    title: "Хищник: Планета смерти",
    originalTitle: "Predator: Badlands",
    year: 2025,
    country: "США",
    quality: ["HD 720", "1080"],
    categories: ["Фильмы", "2025", "Американские", "Боевик", "Фантастика", "Премьеры"],
    director: "Дэн Трахтенберг",
    actors: ["Эль Фаннинг", "Димитриус Коломатанги"],
    image: 'sad',
    rating:  {like: 22, dislike: 12}
},]

  return (
    <div >
      <main className="bg-gray-200">
          <MenuFilms title="asda" items={filmss}/>
      </main>
    </div>
  );
}
