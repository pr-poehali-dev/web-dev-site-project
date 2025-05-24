import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Index = () => {
  const techStack = [
    { name: "HTML/CSS", icon: "Globe", level: "Основа" },
    { name: "JavaScript", icon: "Zap", level: "Логика" },
    { name: "React", icon: "Layers", level: "Интерфейсы" },
    { name: "Node.js", icon: "Server", level: "Бэкенд" },
  ];

  const benefits = [
    { title: "Высокий доход", desc: "от 100 000₽ в месяц", icon: "DollarSign" },
    { title: "Удаленная работа", desc: "Работай откуда угодно", icon: "Wifi" },
    {
      title: "Творчество",
      desc: "Создавай цифровые продукты",
      icon: "Palette",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-gray-900 mb-6">
              Веб-разработчик
            </h1>
            <p className="font-opensans text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Профессия будущего, которая открывает безграничные возможности для
              творчества и карьерного роста
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-opensans font-semibold hover:bg-primary/90 transition-colors">
                Начать обучение
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-opensans font-semibold hover:bg-gray-50 transition-colors">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl text-center text-gray-900 mb-12">
            Почему веб-разработка?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-scale-in"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name={benefit.icon}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="font-opensans text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl text-center text-gray-900 mb-12">
            Основные технологии
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 border border-gray-100 rounded-xl hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={tech.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-1">
                  {tech.name}
                </h3>
                <p className="font-opensans text-sm text-gray-500">
                  {tech.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-montserrat font-bold text-3xl mb-6">
            Готов начать свой путь в веб-разработке?
          </h2>
          <p className="font-opensans text-xl mb-8 text-purple-100">
            Изучи навыки и узнай о карьерных возможностях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/skills"
              className="bg-white text-primary px-8 py-3 rounded-lg font-opensans font-semibold hover:bg-gray-100 transition-colors"
            >
              Изучить навыки
            </a>
            <a
              href="/career"
              className="border border-white text-white px-8 py-3 rounded-lg font-opensans font-semibold hover:bg-white/10 transition-colors"
            >
              Карьерные пути
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
