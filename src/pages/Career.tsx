import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Career = () => {
  const [selectedPath, setSelectedPath] = useState("frontend");

  const careerPaths = {
    frontend: {
      title: "Frontend разработчик",
      icon: "Code",
      levels: [
        {
          level: "Junior",
          salary: "80-120",
          experience: "0-1 год",
          skills: ["HTML/CSS", "JavaScript", "React основы", "Git"],
          progress: 25,
          description:
            "Изучение основ веб-разработки и современных фреймворков",
        },
        {
          level: "Middle",
          salary: "120-200",
          experience: "1-3 года",
          skills: [
            "TypeScript",
            "Redux",
            "Testing",
            "Performance",
            "API Integration",
          ],
          progress: 60,
          description: "Самостоятельная разработка функций и компонентов",
        },
        {
          level: "Senior",
          salary: "200-350",
          experience: "3+ лет",
          skills: ["Architecture", "Mentoring", "Code Review", "System Design"],
          progress: 90,
          description: "Архитектурные решения и менторинг команды",
        },
      ],
    },
    backend: {
      title: "Backend разработчик",
      icon: "Server",
      levels: [
        {
          level: "Junior",
          salary: "90-130",
          experience: "0-1 год",
          skills: ["Python/Node.js", "SQL", "REST API", "Git"],
          progress: 25,
          description: "Основы серверной разработки и работы с базами данных",
        },
        {
          level: "Middle",
          salary: "130-220",
          experience: "1-3 года",
          skills: ["Microservices", "Docker", "Testing", "Caching", "Security"],
          progress: 60,
          description: "Проектирование API и оптимизация производительности",
        },
        {
          level: "Senior",
          salary: "220-400",
          experience: "3+ лет",
          skills: ["System Architecture", "Scaling", "DevOps", "Team Leading"],
          progress: 90,
          description: "Архитектура высоконагруженных систем",
        },
      ],
    },
    fullstack: {
      title: "Fullstack разработчик",
      icon: "Layers",
      levels: [
        {
          level: "Junior",
          salary: "85-125",
          experience: "0-1 год",
          skills: ["HTML/CSS/JS", "Basic Backend", "Database", "Git"],
          progress: 25,
          description: "Основы frontend и backend разработки",
        },
        {
          level: "Middle",
          salary: "125-210",
          experience: "1-3 года",
          skills: ["React/Vue", "Node.js/Python", "API Design", "DevOps"],
          progress: 60,
          description: "Полный цикл разработки веб-приложений",
        },
        {
          level: "Senior",
          salary: "210-380",
          experience: "3+ лет",
          skills: [
            "System Design",
            "Architecture",
            "Performance",
            "Leadership",
          ],
          progress: 90,
          description: "Техническое лидерство и архитектурные решения",
        },
      ],
    },
  };

  const pathTabs = Object.entries(careerPaths);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="pt-16 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-6">
              Карьерные пути в разработке
            </h1>
            <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
              Изучите возможности роста, зарплатные ожидания и навыки для
              каждого уровня развития
            </p>
          </div>

          {/* Path Selection */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-lg p-1 shadow-sm border">
              {pathTabs.map(([key, path]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPath(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                    selectedPath === key
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon name={path.icon} size={20} />
                  <span className="font-medium">{path.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Career Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {careerPaths[selectedPath as keyof typeof careerPaths].levels.map(
              (level, index) => (
                <Card
                  key={level.level}
                  className="relative overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Progress indicator */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000"
                      style={{ width: `${level.progress}%` }}
                    />
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{level.level}</CardTitle>
                      <Badge
                        variant={
                          index === 0
                            ? "secondary"
                            : index === 1
                              ? "default"
                              : "outline"
                        }
                      >
                        {level.experience}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-2xl font-bold text-green-600">
                      <Icon name="DollarSign" size={24} />
                      <span>{level.salary}к ₽</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4">{level.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Target" size={16} />
                        Прогресс карьеры
                      </h4>
                      <Progress value={level.progress} className="h-2" />
                      <span className="text-sm text-gray-500 mt-1">
                        {level.progress}%
                      </span>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Zap" size={16} />
                        Ключевые навыки
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {level.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ),
            )}
          </div>

          {/* Salary Chart */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={24} />
                Динамика зарплат
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(careerPaths).map(([key, path]) => (
                  <div key={key} className="text-center">
                    <h3 className="font-semibold mb-4 flex items-center justify-center gap-2">
                      <Icon name={path.icon} size={20} />
                      {path.title}
                    </h3>
                    <div className="space-y-3">
                      {path.levels.map((level, index) => (
                        <div
                          key={level.level}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm font-medium">
                            {level.level}
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full transition-all duration-1000 ${
                                  index === 0
                                    ? "bg-blue-400"
                                    : index === 1
                                      ? "bg-blue-600"
                                      : "bg-purple-600"
                                }`}
                                style={{ width: `${(index + 1) * 30}%` }}
                              />
                            </div>
                            <span className="text-sm font-bold text-green-600">
                              {level.salary}к
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Career Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" size={24} />
                  Советы по развитию
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    name="BookOpen"
                    size={20}
                    className="text-blue-600 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Непрерывное обучение</h4>
                    <p className="text-sm text-gray-600">
                      Изучайте новые технологии и следите за трендами
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Users"
                    size={20}
                    className="text-green-600 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Нетворкинг</h4>
                    <p className="text-sm text-gray-600">
                      Участвуйте в сообществах и конференциях
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Code2"
                    size={20}
                    className="text-purple-600 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Практика</h4>
                    <p className="text-sm text-gray-600">
                      Работайте над pet-проектами и open source
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={24} />
                  Ключевые метрики роста
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Технические навыки</span>
                  <Progress value={75} className="w-24 h-2" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Soft skills</span>
                  <Progress value={60} className="w-24 h-2" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Лидерские качества</span>
                  <Progress value={45} className="w-24 h-2" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Бизнес понимание</span>
                  <Progress value={40} className="w-24 h-2" />
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
