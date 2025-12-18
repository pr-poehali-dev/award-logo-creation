import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const logos = [
  {
    id: 1,
    url: 'https://cdn.poehali.dev/projects/e2e29eb6-398c-466c-b295-07873ad38ece/files/c3ec847b-3013-45dc-99bf-709f78a25ec9.jpg',
    title: 'Золотая классика',
    description: 'Монохромный золотой дизайн с чистыми линиями',
    colors: ['#D4AF37', '#FFFFFF']
  },
  {
    id: 2,
    url: 'https://cdn.poehali.dev/projects/e2e29eb6-398c-466c-b295-07873ad38ece/files/ff844456-8b03-42a5-abf3-2a788b44f62f.jpg',
    title: 'Премиум сочетание',
    description: 'Синий и золото — элегантность и престиж',
    colors: ['#1A1F2C', '#D4AF37']
  },
  {
    id: 3,
    url: 'https://cdn.poehali.dev/projects/e2e29eb6-398c-466c-b295-07873ad38ece/files/b2db75c7-b4e2-49c4-bf92-cbd7ee7bbc41.jpg',
    title: 'Контрастный стиль',
    description: 'Чёрно-золотая композиция для люксового бренда',
    colors: ['#000000', '#D4AF37']
  },
  {
    id: 4,
    url: 'https://cdn.poehali.dev/projects/e2e29eb6-398c-466c-b295-07873ad38ece/files/96b4c0df-404c-4919-a165-370f5ed07b25.jpg',
    title: 'Звезда внутри',
    description: 'Звезда размещена внутри чаши трофея',
    colors: ['#D4AF37', '#1A1F2C']
  },
  {
    id: 5,
    url: 'https://cdn.poehali.dev/projects/e2e29eb6-398c-466c-b295-07873ad38ece/files/7bdb8911-9d12-4a01-a61d-e73588308e90.jpg',
    title: 'Звезда-основание',
    description: 'Трофей возвышается из центра звезды',
    colors: ['#D4AF37', '#FFFFFF']
  },
  {
    id: 6,
    url: 'https://cdn.poehali.dev/projects/e2e29eb6-398c-466c-b295-07873ad38ece/files/0948ede5-9881-41d8-b0dd-a615cdbcb2fb.jpg',
    title: 'Слияние форм',
    description: 'Трофей и звезда объединены в единую композицию',
    colors: ['#000000', '#D4AF37']
  },
  {
    id: 7,
    url: 'https://cdn.poehali.dev/projects/e2e29eb6-398c-466c-b295-07873ad38ece/files/34527e6f-fdf7-457b-aaf0-648bdb6c9d2f.jpg',
    title: 'Плавный переход',
    description: 'Лучи звезды перетекают в ручки трофея',
    colors: ['#D4AF37', '#FFFFFF']
  },
  {
    id: 8,
    url: 'https://cdn.poehali.dev/projects/e2e29eb6-398c-466c-b295-07873ad38ece/files/09e30e54-cc11-45f1-90c5-d1504f765338.jpg',
    title: 'Морфинг',
    description: 'Звезда трансформируется в трофей одной линией',
    colors: ['#C0C0C0', '#1A1F2C']
  },
  {
    id: 9,
    url: 'https://cdn.poehali.dev/projects/e2e29eb6-398c-466c-b295-07873ad38ece/files/300a5493-1ddc-42ad-9f06-058e41b6ab92.jpg',
    title: 'Негативное пространство',
    description: 'Звезда и трофей через игру света и тени',
    colors: ['#000000', '#D4AF37']
  }
];

export default function Index() {
  const [selectedLogo, setSelectedLogo] = useState(logos[0]);
  const [viewSize, setViewSize] = useState<'small' | 'medium' | 'large'>('medium');

  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-64 h-64',
    large: 'w-96 h-96'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Логотипы для наградной атрибутики
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Минималистичный дизайн с геометрическим трофеем и звездой
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{selectedLogo.title}</h2>
                <div className="flex gap-2">
                  <Button
                    variant={viewSize === 'small' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewSize('small')}
                  >
                    S
                  </Button>
                  <Button
                    variant={viewSize === 'medium' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewSize('medium')}
                  >
                    M
                  </Button>
                  <Button
                    variant={viewSize === 'large' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewSize('large')}
                  >
                    L
                  </Button>
                </div>
              </div>

              <div className="flex justify-center items-center min-h-[400px] bg-muted/10 rounded-lg p-8">
                <img
                  src={selectedLogo.url}
                  alt={selectedLogo.title}
                  className={`${sizeClasses[viewSize]} object-contain transition-all duration-300 hover:scale-105`}
                />
              </div>

              <div className="mt-6">
                <p className="text-muted-foreground mb-4">{selectedLogo.description}</p>
                <div className="flex gap-2 items-center">
                  <span className="text-sm font-medium">Цветовая палитра:</span>
                  {selectedLogo.colors.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full border-2 border-border shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs text-muted-foreground font-mono">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Варианты</h3>
            {logos.map((logo) => (
              <Card
                key={logo.id}
                className={`p-4 cursor-pointer transition-all hover:shadow-lg hover:scale-102 ${
                  selectedLogo.id === logo.id
                    ? 'ring-2 ring-primary shadow-lg'
                    : 'hover:ring-1 hover:ring-primary/50'
                }`}
                onClick={() => setSelectedLogo(logo)}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={logo.url}
                    alt={logo.title}
                    className="w-20 h-20 object-contain bg-muted/10 rounded-lg p-2"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{logo.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {logo.description}
                    </p>
                  </div>
                  {selectedLogo.id === logo.id && (
                    <Icon name="Check" className="text-primary" size={20} />
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Характеристики логотипов</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  Геометрическая точность и симметрия
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  Минималистичный стиль без лишних деталей
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  Премиальная цветовая палитра
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  Масштабируемость для любых носителей
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Icon name="Award" className="mr-2" size={16} />
                Профессиональный дизайн
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Icon name="Palette" className="mr-2" size={16} />
                Несколько цветовых решений
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Icon name="Zap" className="mr-2" size={16} />
                Современный стиль
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}