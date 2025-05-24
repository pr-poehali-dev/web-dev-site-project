import Navigation from "@/components/Navigation";

const Career = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="pt-16 pb-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-6">
            Карьерные возможности
          </h1>
          <p className="font-opensans text-xl text-gray-600">
            Страница в разработке. Здесь будет информация о карьерных путях в
            веб-разработке.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
