import { Add, Checkmark } from "react-ionicons";
import Loading from "./Loading";

export default function Filters({ languages, filter, handleFilter }) {
    return (
        <div className="flex flex-wrap gap-2 my-4">
        {languages.length
            ? languages.map((language, index) => (
                <button
                    className={`gh-filter ${filter.includes(language) ? 'gh-filter--active' : 'gh-filter--inactive'}`}
                    key={index}
                    onClick={() => handleFilter(language)}
                    aria-label={`
                        ${filter.includes(language)
                            ? `remove ${language} from filters`
                            : `add ${language} to filters`
                        }
                    `}
                >
                    {filter.includes(language)
                        ? <Checkmark height={"18px"} color={"#1c1917"} />
                        : <Add height={"16px"} color={"#1c1917"} />
                    }
                    {language}
                </button>
            ))
            : (
                <div className='h-20 bg-stone-50 rounded-md grid place-items-center w-full'>
                    <Loading srDescription="Loading data about the repositories on my GitHub profile" />
                </div>
            )
        }
      </div>
    );
}
