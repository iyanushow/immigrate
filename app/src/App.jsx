import Form from './components/Form';
import Hero from './components/Hero';
import { Response } from './components/Loader';

function App() {
  return (
    <>
    <Hero />
    <div className="container mx-auto isolate bg-white px-2 py-5 md:p-14 !pb-1 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Form />
      </div>
    </div>
    <Response />
    </>
  );
}

export default App;
