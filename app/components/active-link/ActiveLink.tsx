import Link from "next/link";
import style from './ActiveLink.module.css';

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({path, text}: Props) => {
  return (
    <Link 
    className={style.activeLink}
     href={path}>
        {text}
    </Link>
  )
}