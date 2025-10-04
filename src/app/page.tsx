import Header from '@/components/Header';
import VideoGallery from '@/components/VideoGallery';
import Profile from '@/components/Profile';
import Contact from '@/components/Contact';
import { videos } from '@/data/videos';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <VideoGallery videos={videos} />
        <Profile />
        <Contact />
      </main>
    </>
  );
}
