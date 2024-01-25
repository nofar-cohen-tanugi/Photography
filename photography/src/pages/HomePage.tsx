import { Image } from 'primereact/image';
import profile from '../assets/images/shimon.jpg';

export const HomePage = () => {
  return (
    <div className='card pt-8 px-4 flex justify-center items-center'>
      <Image
        src={profile}
        alt='Profile'
        width='400'
        imageClassName='profile-border'
      />
      <p className='w-3/6 text-white text-x mx-5'>
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
