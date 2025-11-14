import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  students: number;
  image: string;
  rating: number;
}

const coursesData: Course[] = [
  {
    id: 1,
    title: 'Полный курс веб-разработки',
    description: 'Изучите HTML, CSS, JavaScript, React и создайте современные веб-приложения с нуля',
    category: 'Веб-разработка',
    level: 'Начинающий',
    duration: '12 недель',
    price: 15990,
    students: 2847,
    image: 'https://cdn.poehali.dev/projects/f98c3dbf-8699-4c88-a132-5a1596584f05/files/fe3ea8e4-78f6-4e9c-bb0b-fe7be106c12f.jpg',
    rating: 4.8
  },
  {
    id: 2,
    title: 'Python для анализа данных',
    description: 'Освойте Python, pandas, NumPy и визуализацию данных для карьеры в Data Science',
    category: 'Анализ данных',
    level: 'Средний',
    duration: '10 недель',
    price: 18990,
    students: 1923,
    image: 'https://cdn.poehali.dev/projects/f98c3dbf-8699-4c88-a132-5a1596584f05/files/e5c2fc54-d131-4468-9c35-488420783b42.jpg',
    rating: 4.9
  },
  {
    id: 3,
    title: 'UI/UX дизайн для начинающих',
    description: 'Создавайте красивые и удобные интерфейсы в Figma с пониманием UX-принципов',
    category: 'Дизайн',
    level: 'Начинающий',
    duration: '8 недель',
    price: 12990,
    students: 3421,
    image: 'https://cdn.poehali.dev/projects/f98c3dbf-8699-4c88-a132-5a1596584f05/files/411a4243-2ff1-445e-80b5-f745f97cbf98.jpg',
    rating: 4.7
  },
  {
    id: 4,
    title: 'Backend-разработка на Node.js',
    description: 'Создавайте серверные приложения, REST API и работайте с базами данных',
    category: 'Веб-разработка',
    level: 'Средний',
    duration: '14 недель',
    price: 19990,
    students: 1567,
    image: 'https://cdn.poehali.dev/projects/f98c3dbf-8699-4c88-a132-5a1596584f05/files/fe3ea8e4-78f6-4e9c-bb0b-fe7be106c12f.jpg',
    rating: 4.8
  },
  {
    id: 5,
    title: 'Машинное обучение с нуля',
    description: 'Погрузитесь в ML, изучите алгоритмы и создайте свои первые AI-модели',
    category: 'Анализ данных',
    level: 'Продвинутый',
    duration: '16 недель',
    price: 24990,
    students: 892,
    image: 'https://cdn.poehali.dev/projects/f98c3dbf-8699-4c88-a132-5a1596584f05/files/e5c2fc54-d131-4468-9c35-488420783b42.jpg',
    rating: 4.9
  },
  {
    id: 6,
    title: 'Мобильная разработка на React Native',
    description: 'Создавайте кроссплатформенные мобильные приложения для iOS и Android',
    category: 'Мобильная разработка',
    level: 'Средний',
    duration: '12 недель',
    price: 21990,
    students: 1234,
    image: 'https://cdn.poehali.dev/projects/f98c3dbf-8699-4c88-a132-5a1596584f05/files/fe3ea8e4-78f6-4e9c-bb0b-fe7be106c12f.jpg',
    rating: 4.7
  }
];

const categories = ['Все курсы', 'Веб-разработка', 'Анализ данных', 'Дизайн', 'Мобильная разработка'];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все курсы');

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все курсы' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-foreground">EduPlatform</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">Курсы</a>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Войти
            </Button>
          </nav>
          <Button size="sm" variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Обучайся <span className="text-primary">онлайн</span>
            <br />в удобном темпе
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Более 50+ курсов по веб-разработке, дизайну и анализу данных. Начните обучение сегодня и станьте востребованным специалистом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto">
              <Icon name="Play" className="mr-2" size={20} />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-2">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Каталог курсов
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 pt-8 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} className="text-primary" />
              <span className="text-muted-foreground"><strong className="text-foreground">10,000+</strong> студентов</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="BookOpen" size={20} className="text-primary" />
              <span className="text-muted-foreground"><strong className="text-foreground">50+</strong> курсов</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={20} className="text-primary" />
              <span className="text-muted-foreground"><strong className="text-foreground">95%</strong> довольных</span>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Каталог курсов</h2>
            <p className="text-lg text-muted-foreground">Найдите идеальный курс для вашего роста</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск курсов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-primary hover:bg-primary/90' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">Курсы не найдены</h3>
              <p className="text-muted-foreground">Попробуйте изменить фильтры или поисковый запрос</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-white">
                      {course.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Signal" size={16} />
                        <span>{course.level}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Users" size={16} />
                      <span>{course.students.toLocaleString()} студентов</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-foreground">{course.price.toLocaleString()} ₽</span>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">EduPlatform</span>
              </div>
              <p className="text-sm text-gray-400">
                Современная платформа для онлайн-обучения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Анализ данных</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дизайн</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 EduPlatform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
