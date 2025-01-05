import RemoveFavBtn from "@/UI/remove-fav-btn";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  id: number;
}

export default function FavoriteCard({ name, image, id }: Props) {
  return (
    <li className="bg-white rounded-lg shadow-lg p-1 sm:p-4 relative">
      <Link href={`/recipes/${id}`} className="flex items-start gap-4">
        <Image src={image} width={100} height={100} alt={name} className="rounded-lg max-w-20" priority />
        <div className="w-full flex flex-col gap-4 ">
          <h2 className="font-semibold sm:text-xl text-base">{name}</h2>
        </div>
      </Link>
      <RemoveFavBtn id={id} />
    </li>
  )
}
