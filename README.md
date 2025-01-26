# Тестовое задание на вакансию Разработчика C# (Versta)

Этот репозиторий содержит исходный код для **системы управления заказами доставки**, включающего серверную часть (backend) и клиентскую часть (frontend).Требований к оформению предъявлено не было, все элементы оформления, включая стилистику и название компании, были придуманы самостоятельно. Backend разработан на **.NET 9**, а frontend построен с использованием **React**. Кроме того, включены опубликованные версии приложения для упрощения развертывания.

## Структура репозитория

- **DeliveryOrderAPI/**: Исходный код серверной части (backend).
- **delivery-order-frontend/**: Исходный код клиентской части (frontend).
- **publish-without-web/**: Опубликованная версия только серверной части.
- **publish-with-web/**: Опубликованная версия серверной части и клиентской части, объединённых для запуска силами .NET.
- **DeliveryOrderAPI/Dockerfile**: Преднастроенный Dockerfile для контейнеризации приложения.

## Предварительные требования

Перед началом работы убедитесь, что у вас установлены:

- **.NET SDK 9.0** или более поздней версии
- **Node.js** (для отдельного запуска frontend)
- **Docker** (для запуска приложения в контейнере, опционально)

## Инструкции по настройке и запуску

### 1. Клонирование репозитория

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Запуск приложения локально

#### Вариант 1: Отдельный запуск backend и frontend

1. **Запустите серверную часть**:

   ```bash
   cd DeliveryOrderAPI
   dotnet run
   ```

   Серверная часть будет доступна по адресу `http://localhost:5000`.

2. **Запустите клиентскую часть**:

   ```bash
   cd delivery-order-frontend
   npm install
   npm start
   ```

   Клиентская часть будет доступна по адресу `http://localhost:3000`.

#### Вариант 2: Использование опубликованной серверной части с интегрированным frontend

1. Перейдите в папку `publish-with-web`:

   ```bash
   cd publish-with-web
   ```

2. Запустите приложение:

   ```bash
   dotnet DeliveryOrderAPI.dll
   ```

   Приложение (backend + frontend) будет доступно по адресу `http://localhost:5000`.

#### Вариант 3: Запуск в Docker-контейнере

1. Соберите Docker-образ:

   ```bash
   docker build -f ./DeliveryOrderAPI/Dockerfile -t delivery-order-app .
   ```

2. Запустите контейнер:

   ```bash
   docker run -p 5000:8080 -p 5001:8081 delivery-order-app
   ```

   - Серверная часть будет доступна по адресу `http://localhost:5000`.
   - frontend интегрирован в сборку, поэтому он также будет доступен по этому адресу.

### Дополнительные заметки

- Перед запуском Docker-контейнера убедитесь, что порты 5000 и 5001 свободны.

## Документация Backend API

### Базовый URL
```
https://localhost:7266/api/orders
```

---

### Методы

#### 1. Получить все заказы
**GET** `/api/orders`
- Возвращает список всех заказов.

#### 2. Получить заказ по ID
**GET** `/api/orders/{id}`
- Возвращает данные заказа по указанному ID.

#### 3. Создать новый заказ
**POST** `/api/orders`
- Принимает JSON с полями:
  - `senderCity` (string)
  - `senderAddress` (string)
  - `recipientCity` (string)
  - `recipientAddress` (string)
  - `cargoWeight` (number)
  - `pickupDate` (string, формат ISO).
- Возвращает созданный заказ с ID и номером заказа.

---

#### Формат модели заказа
- `id` (int): ID заказа.
- `orderNumber` (string): Уникальный номер заказа.
- `senderCity` / `recipientCity` (string): Город отправителя/получателя.
- `senderAddress` / `recipientAddress` (string): Адрес отправителя/получателя.
- `cargoWeight` (number): Вес груза (кг).
- `pickupDate` (string): Дата забора груза.

## Документация Frontend

### Стек технологий
- **React**: Компонентный UI.
- **Axios**: Запросы к Backend API.
- **React Modal**: Отображение модальных окон.
- **Date Picker**: Выбор даты отгрузки.

---

### Основной функционал


#### 1. Форма создания заказа
- Поля:
  - Город и адрес отправителя.
  - Город и адрес получателя.
  - Вес груза.
  - Дата забора (не раньше текущей).
- Данные отправляются на API.
<img src="https://github.com/user-attachments/assets/8c6d1bed-f87f-4f52-a3ad-c5324020b52a" width="400"/>

#### 2. Список заказов
- Отображает все заказы, полученные с API.
- Клик на заказ открывает модальное окно с деталями.
<img src="https://github.com/user-attachments/assets/8d561e26-380e-4e45-8ebb-81f0bc6a0bd5" width="400"/>


#### 3. Детали заказа
- Модальное окно для просмотра информации о заказе.
- Открывается при клике на заказ в списке.
<img src="https://github.com/user-attachments/assets/e7ef137c-1038-45e8-be57-b29b1cbefcea" width="400"/>


