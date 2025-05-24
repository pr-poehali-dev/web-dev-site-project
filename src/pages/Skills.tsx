import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend разработка",
      icon: "Monitor",
      description:
        "Современные технологии для создания пользовательских интерфейсов",
      skills: [
        { name: "React", level: 90, category: "framework" },
        { name: "TypeScript", level: 85, category: "language" },
        { name: "Next.js", level: 80, category: "framework" },
        { name: "Tailwind CSS", level: 95, category: "styling" },
        { name: "HTML/CSS", level: 95, category: "foundation" },
        { name: "JavaScript", level: 90, category: "language" },
      ],
    },
    {
      title: "Backend разработка",
      icon: "Server",
      description: "Серверные технологии и управление данными",
      skills: [
        { name: "Node.js", level: 75, category: "runtime" },
        { name: "Express.js", level: 70, category: "framework" },
        { name: "MongoDB", level: 65, category: "database" },
        { name: "PostgreSQL", level: 60, category: "database" },
        { name: "REST API", level: 80, category: "api" },
        { name: "GraphQL", level: 50, category: "api" },
      ],
    },
    {
      title: "DevOps и инструменты",
      icon: "Settings",
      description: "Инфраструктура, развертывание и автоматизация",
      skills: [
        { name: "Git", level: 85, category: "vcs" },
        { name: "Docker", level: 60, category: "container" },
        { name: "AWS", level: 45, category: "cloud" },
        { name: "Vercel", level: 80, category: "hosting" },
        { name: "GitHub Actions", level: 55, category: "ci-cd" },
        { name: "Webpack", level: 70, category: "build" },
      ],
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      framework: "bg-blue-500",
      language: "bg-green-500",
      styling: "bg-purple-500",
      foundation: "bg-orange-500",
      runtime: "bg-yellow-500",
      database: "bg-red-500",
      api: "bg-indigo-500",
      vcs: "bg-gray-500",
      container: "bg-cyan-500",
      cloud: "bg-pink-500",
      hosting: "bg-emerald-500",
      "ci-cd": "bg-violet-500",
      build: "bg-amber-500",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  const getSkillLevel = (level: number) => {
    if (level >= 80) return { text: "Эксперт", color: "text-green-600" };
    if (level >= 60) return { text: "Продвинутый", color: "text-blue-600" };
    if (level >= 40) return { text: "Средний", color: "text-yellow-600" };
    return { text: "Начальный", color: "text-gray-600" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="pt-16 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-6">
              Навыки и технологии
            </h1>
            <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
              Современный стек технологий для создания высококачественных
              веб-приложений. Постоянно развиваюсь и изучаю новые инструменты.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, idx) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon
                        name={category.icon}
                        size={24}
                        className="text-primary"
                      />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">
                            {skill.name}
                          </span>
                          <Badge
                            variant="secondary"
                            className={`${getCategoryColor(skill.category)} text-white text-xs`}
                          >
                            {skill.category}
                          </Badge>
                        </div>
                        <span
                          className={`text-xs font-medium ${getSkillLevel(skill.level).color}`}
                        >
                          {getSkillLevel(skill.level).text}
                        </span>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-2" />
                        <span className="absolute right-2 -top-6 text-xs text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" size={20} />
                  Цели развития
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-500 mt-0.5"
                    />
                    <span>Углубить знания в архитектуре микросервисов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-500 mt-0.5"
                    />
                    <span>Изучить Kubernetes и контейнеризацию</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-500 mt-0.5"
                    />
                    <span>Освоить машинное обучение для веба</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-500 mt-0.5"
                    />
                    <span>Получить сертификацию AWS Solutions Architect</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={20} />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Medal"
                      size={16}
                      className="text-yellow-500 mt-0.5"
                    />
                    <span>15+ успешных проектов в портфолио</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Medal"
                      size={16}
                      className="text-yellow-500 mt-0.5"
                    />
                    <span>Сертификация React Developer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Medal"
                      size={16}
                      className="text-yellow-500 mt-0.5"
                    />
                    <span>Участие в open-source проектах</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Medal"
                      size={16}
                      className="text-yellow-500 mt-0.5"
                    />
                    <span>Ментор для начинающих разработчиков</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
