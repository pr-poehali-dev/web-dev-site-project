import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Career = () => {
  const [selectedSpecialization, setSelectedSpecialization] =
    useState("fullstack");

  const specializations = {
    fullstack: {
      title: "Fullstack Developer",
      emoji: "🚀",
      description: "Универсальный разработчик полного цикла",
      demand: 95,
      growth: "+45%",
      levels: [
        {
          title: "Trainee",
          salary: "40-80к",
          experience: "0 месяцев",
          skills: ["HTML", "CSS", "JS основы"],
          responsibilities: "Изучение под наставничеством",
        },
        {
          title: "Junior",
          salary: "80-150к",
          experience: "3-12 месяцев",
          skills: ["React", "Node.js", "Git", "REST API"],
          responsibilities: "Простые задачи под контролем",
        },
        {
          title: "Middle",
          salary: "150-300к",
          experience: "1-3 года",
          skills: ["TypeScript", "Databases", "Testing", "DevOps"],
          responsibilities: "Самостоятельная разработка функций",
        },
        {
          title: "Senior",
          salary: "300-500к",
          experience: "3+ лет",
          skills: ["Architecture", "Mentoring", "System Design"],
          responsibilities: "Техническое лидерство команды",
        },
      ],
    },
    frontend: {
      title: "Frontend Developer",
      emoji: "🎨",
      description: "Специалист по пользовательским интерфейсам",
      demand: 90,
      growth: "+38%",
      levels: [
        {
          title: "Trainee",
          salary: "35-70к",
          experience: "0 месяцев",
          skills: ["HTML", "CSS", "JavaScript"],
          responsibilities: "Верстка простых страниц",
        },
        {
          title: "Junior",
          salary: "70-130к",
          experience: "3-12 месяцев",
          skills: ["React", "Sass", "Webpack", "Responsive"],
          responsibilities: "Компоненты и интерактивность",
        },
        {
          title: "Middle",
          salary: "130-250к",
          experience: "1-3 года",
          skills: ["TypeScript", "Testing", "Performance", "UX"],
          responsibilities: "Сложные интерфейсы и оптимизация",
        },
        {
          title: "Senior",
          salary: "250-450к",
          experience: "3+ лет",
          skills: ["Architecture", "Team Lead", "Code Review"],
          responsibilities: "Архитектура фронтенда проекта",
        },
      ],
    },
    backend: {
      title: "Backend Developer",
      emoji: "⚙️",
      description: "Разработчик серверной логики",
      demand: 85,
      growth: "+42%",
      levels: [
        {
          title: "Trainee",
          salary: "45-85к",
          experience: "0 месяцев",
          skills: ["Python/Node.js", "SQL", "Git"],
          responsibilities: "Простые API и запросы",
        },
        {
          title: "Junior",
          salary: "85-160к",
          experience: "3-12 месяцев",
          skills: ["REST API", "Databases", "Testing"],
          responsibilities: "CRUD операции и бизнес-логика",
        },
        {
          title: "Middle",
          salary: "160-320к",
          experience: "1-3 года",
          skills: ["Microservices", "Docker", "Security"],
          responsibilities: "Архитектура API и производительность",
        },
        {
          title: "Senior",
          salary: "320-600к",
          experience: "3+ лет",
          skills: ["System Design", "Scaling", "Team Lead"],
          responsibilities: "Архитектура высоконагруженных систем",
        },
      ],
    },
  };

  const marketTrends = [
    { tech: "React", demand: 92, growth: "+35%" },
    { tech: "TypeScript", demand: 88, growth: "+55%" },
    { tech: "Node.js", demand: 85, growth: "+28%" },
    { tech: "Python", demand: 80, growth: "+40%" },
    { tech: "AWS", demand: 75, growth: "+65%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Navigation />

      <div className="pt-20 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Карьера в веб-разработке
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выбери свою специализацию и узнай о зарплатах, навыках и карьерном
              росте
            </p>
          </div>

          {/* Specialization Selector */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {Object.entries(specializations).map(([key, spec]) => (
              <Card
                key={key}
                className={`cursor-pointer transition-all hover:scale-105 ${
                  selectedSpecialization === key
                    ? "ring-4 ring-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50"
                    : "hover:shadow-lg"
                }`}
                onClick={() => setSelectedSpecialization(key)}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{spec.emoji}</div>
                  <CardTitle className="text-xl">{spec.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Востребованность
                    </span>
                    <Badge className="bg-emerald-500">{spec.demand}%</Badge>
                  </div>
                  <Progress value={spec.demand} className="mb-3 h-2" />
                  <div className="text-lg font-bold text-emerald-600">
                    Рост: {spec.growth} в год
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Career Levels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Карьерный путь:{" "}
              {
                specializations[
                  selectedSpecialization as keyof typeof specializations
                ].title
              }
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializations[
                selectedSpecialization as keyof typeof specializations
              ].levels.map((level, index) => (
                <Card
                  key={level.title}
                  className="relative overflow-hidden hover:shadow-xl transition-all"
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${
                      index === 0
                        ? "from-gray-400 to-gray-500"
                        : index === 1
                          ? "from-blue-400 to-blue-500"
                          : index === 2
                            ? "from-emerald-400 to-emerald-500"
                            : "from-purple-400 to-purple-500"
                    }`}
                  />

                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center justify-between">
                      <span>{level.title}</span>
                      <Badge variant="outline">{level.experience}</Badge>
                    </CardTitle>
                    <div className="text-2xl font-bold text-emerald-600">
                      {level.salary} ₽
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm text-gray-600">
                        НАВЫКИ
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {level.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-gray-600">
                        ОБЯЗАННОСТИ
                      </h4>
                      <p className="text-sm text-gray-700">
                        {level.responsibilities}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Market Trends */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} />
                  Тренды рынка 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                {marketTrends.map((trend) => (
                  <div
                    key={trend.tech}
                    className="flex justify-between items-center mb-4"
                  >
                    <div>
                      <div className="font-semibold">{trend.tech}</div>
                      <div className="text-sm text-gray-600">
                        Востребованность: {trend.demand}%
                      </div>
                    </div>
                    <Badge className="bg-green-500">{trend.growth}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-teal-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" size={24} />
                  Советы по карьере
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <h4 className="font-semibold">Постоянное обучение</h4>
                    <p className="text-sm text-gray-600">
                      Технологии меняются быстро
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h4 className="font-semibold">Нетворкинг</h4>
                    <p className="text-sm text-gray-600">Общайся с коллегами</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h4 className="font-semibold">Портфолио</h4>
                    <p className="text-sm text-gray-600">
                      Показывай свои проекты
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
