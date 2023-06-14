import { useEffect, useState } from "react";
import Filters from "./projects/Filters";
import Cards from './projects/Cards';
import Loading from "./projects/Loading";

export default function Projects() {
  const [data, setData] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [filter, setFilter] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
      async function fetchGithubData() {
        setError(false);

        try {
          const response = await fetch('https://api.github.com/users/devmegan/repos?sort=pushed&direction=desc');
          const json = await response.json();
          setData(json);
        } catch (error) {
          setError(true);
          console.log(`Error fetching data from GitHub: ${error}`);
        }
      }
    fetchGithubData();
  }, [error]);

  useEffect(() => {
    if (data && data.length > 0) {
      // get all topics on gh repos
      const allTopics = data.flatMap(obj => obj.topics);

      // order topics by occurance
      const frequencyCount = allTopics.reduce((count, item) => {
        count[item] = (count[item] || 0) + 1;
        return count;
      }, {});

      const sortedArr = allTopics.sort((a, b) => frequencyCount[b] - frequencyCount[a]);

      // remove duplicate topics from array
      const dedupedArr = [...new Set(sortedArr)];

      setLanguages(dedupedArr);
    }
  }, [data])

  const handleFilter = (language) => {
    if (!filter.includes(language)) {
      setFilter([...filter, language]);
    } else {
      setFilter(filter.filter(filter => filter !== language));
    }
  }

  return(
      <section id="projects">
          <h2><span role="img" aria-hidden="true">👩‍💻</span> Show me projects using...</h2>
          <Filters languages={languages} filter={filter} handleFilter={handleFilter} />
          {error && <h2>There was an error fetching data from GitHub 🤯</h2>}
          {data && <Cards data={data} filter={filter} />}
          {!data && !error && (
            <div className='min-h-[900px] bg-stone-50 rounded-md grid place-items-center w-full'>
              <Loading srDescription="Loading data about the repositories on my GitHub profile" />
            </div>
          )}
      </section>
  );
}
