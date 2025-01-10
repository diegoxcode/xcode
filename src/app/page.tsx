
import { Icon } from '@iconify/react/dist/iconify.js';
import FeedBacks from './ui/feedbacks';
import Questions from './ui/questions';
import Banner from './ui/banner';
import Services from './ui/services';
import Projects from './ui/projects';

export default function Home() {

  return (
    <>
      <Banner />
      <Services />
      <Projects />
      <FeedBacks />
      <Questions />
    </>
  );
}
