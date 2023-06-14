import { Ellipse } from "react-ionicons";

export default function Header ({ date }) {
    return (
        <div>
            <p className='inline-block ml-2 my-0 font-bold'>devmegan</p>
            <span aria-hidden="true">
                <Ellipse cssClasses="feed-bullet" height={"5px"} color={"#115e59"}/>
            </span>
            <time className="text-sm inline">{date}</time>
        </div>
    )
}