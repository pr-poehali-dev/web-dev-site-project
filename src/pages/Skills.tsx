import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillsData = {
    frontend: {
      title: "Frontend Development",
      emoji: "🎨",
      description: "Создание пользовательских интерфейсов",
      skills: [
        { name: "HTML5", level: 95, difficulty: "Легко", time: "1-2 недели" },
        { name: "CSS3", level: 90, difficulty: "Легко", time: "2-3 недели" },
        {
          name: "JavaScript",
          level: 85,
          difficulty: "Средне",
          time: "2-3 месяца",
        },
        { name: "React", level: 80, difficulty: "Средне", time: "3-4 месяца" },
        {
          name: "TypeScript",
          level: 75,
          difficulty: "Сложно",
          time: "1-2 месяца",
        },
        {
          name: "Next.js",
          level: 70,
          difficulty: "Сложно",
          time: "2-3 месяца",
        },
      ],
    },
    backend: {
      title: "Backend Development",
      emoji: "⚙️",
      description: "Серверная логика и базы данных",
      skills: [
        {
          name: "Node.js",
          level: 85,
          difficulty: "Средне",
          time: "2-3 месяца",
        },
        { name: "Python", level: 80, difficulty: "Легко", time: "1-2 месяца" },
        {
          name: "PostgreSQL",
          level: 75,
          difficulty: "Средне",
          time: "1 месяц",
        },
        { name: "MongoDB", level: 70, difficulty: "Легко", time: "2-3 недели" },
        { name: "Docker", level: 65, difficulty: "Сложно", time: "1-2 месяца" },
        { name: "AWS", level: 60, difficulty: "Сложно", time: "3-6 месяцев" },
      ],
    },
    tools: {
      title: "Tools & Workflow",
      emoji: "🔧",
      description: "Инструменты разработчика",
      skills: [
        { name: "Git", level: 90, difficulty: "Легко", time: "1-2 недели" },
        { name: "VS Code", level: 95, difficulty: "Легко", time: "1 неделя" },
        {
          name: "Chrome DevTools",
          level: 85,
          difficulty: "Средне",
          time: "1 месяц",
        },
        { name: "Figma", level: 70, difficulty: "Легко", time: "2-3 недели" },
        { name: "Terminal", level: 75, difficulty: "Средне", time: "1 месяц" },
        {
          name: "NPM/Yarn",
          level: 80,
          difficulty: "Легко",
          time: "1-2 недели",
        },
      ],
    },
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Легко: "bg-green-500",
      Средне: "bg-yellow-500",
      Сложно: "bg-red-500",
    };
    return colors[difficulty as keyof typeof colors] || "bg-gray-500";
  };

  const roadmapSteps = [
    {
      step: 1,
      title: "Основы",
      content: "HTML, CSS, JavaScript",
      duration: "2-3 месяца",
    },
    {
      step: 2,
      title: "Фреймворки",
      content: "React или Vue.js",
      duration: "3-4 месяца",
    },
    {
      step: 3,
      title: "Backend",
      content: "Node.js, базы данных",
      duration: "4-6 месяцев",
    },
    {
      step: 4,
      title: "Продвинутое",
      content: "TypeScript, DevOps",
      duration: "6+ месяцев",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navigation />

      <div className="pt-20 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Навыки веб-разработчика
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Пошаговый гид по всем технологиям, которые нужно освоить для
              успешной карьеры
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border">
              {Object.entries(skillsData).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-8 py-4 rounded-xl transition-all font-semibold ${
                    activeCategory === key
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-2xl mr-2">{category.emoji}</span>
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillsData[activeCategory as keyof typeof skillsData].skills.map(
              (skill, index) => (
                <Card
                  key={skill.name}
                  className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-indigo-200"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                      <Badge
                        className={`${getDifficultyColor(skill.difficulty)} text-white`}
                      >
                        {skill.difficulty}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      ⏱️ Время изучения: {skill.time}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">
                          Важность в индустрии
                        </span>
                        <span className="text-sm font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                    </div>
                    <div className="text-center">
                      <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all">
                        Изучить
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ),
            )}
          </div>

          {/* Learning Roadmap */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-indigo-200">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                🗺️ Roadmap обучения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {roadmapSteps.map((step, index) => (
                  <div key={step.step} className="text-center relative">
                    {index < roadmapSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-indigo-300 z-0"></div>
                    )}
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{step.content}</p>
                      <Badge variant="outline" className="text-sm">
                        {step.duration}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
