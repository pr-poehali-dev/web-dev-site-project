import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const stats = [
    { number: "500K+", label: "Вакансий в год", icon: "Briefcase" },
    { number: "2.5M₽", label: "Средняя зарплата", icon: "TrendingUp" },
    { number: "95%", label: "Трудоустройство", icon: "Target" },
    { number: "∞", label: "Возможностей", icon: "Infinity" },
  ];

  const features = [
    {
      title: "🚀 Быстрый старт",
      desc: "От новичка до джуна за 6-12 месяцев",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "💰 Высокий доход",
      desc: "Одна из самых высокооплачиваемых IT-профессий",
      color: "from-green-400 to-green-600",
    },
    {
      title: "🌍 Удаленка",
      desc: "Работай из любой точки мира",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "🎨 Творчество",
      desc: "Воплощай идеи в цифровые продукты",
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzODQzNTgiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">
              Web Developer
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Создавай будущее интернета. Программируй завтра уже сегодня.
              Присоединяйся к самой востребованной IT-профессии современности.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all transform hover:scale-105">
                Начать путь
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all">
                Изучить профессию
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name={stat.icon} size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Почему именно веб-разработка?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent font-bold`}
                  >
                    {feature.title.split(" ")[0]}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title.slice(2)}
                  </h3>
                  <p className="text-blue-200 leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Готов изменить свою жизнь?
            </h2>
            <p className="text-xl text-blue-200 mb-10 leading-relaxed">
              Изучи навыки, которые нужны работодателям, и познакомься с
              карьерными возможностями
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/skills"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all transform hover:scale-105"
              >
                🛠️ Изучить навыки
              </a>
              <a
                href="/career"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105"
              >
                📈 Карьерный путь
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
