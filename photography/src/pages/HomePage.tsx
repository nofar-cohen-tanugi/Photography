import { Image } from 'primereact/image';
import profile from '../assets/images/shimon.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = '/api/summary';

    // Use Axios to make a GET request
    axios
      .get(apiUrl)
      .then((response: any) => {
        // Handle the successful response
        setData(response.data);
      })
      .catch((error: any) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once, equivalent to componentDidMount

  return (
    <div className='card pt-8 px-4 flex justify-center items-center flex-wrap'>
      <Image
        src={profile}
        alt='Profile'
        width='400'
        imageClassName='profile-border'
      />
      <p className='w-3/6 text-white text-x m-5'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quasi
        quae dicta accusantium exercitationem ad deleniti obcaecati? Voluptatem
        dolores maxime accusantium mollitia, quo laboriosam? Sapiente, ipsum. Ex
        ab possimus neque? Ad cupiditate ipsa amet hic nam, iure libero
        praesentium odio ab velit eligendi placeat quam eos molestiae beatae
        cumque corrupti? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Deserunt quasi quae dicta accusantium exercitationem ad deleniti
        obcaecati? Voluptatem
      </p>
    </div>
  );
};
