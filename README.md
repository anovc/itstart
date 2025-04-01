# Тестовое задание для ITSTART

## Описание

Веб-приложение для управления семинарами. Приложение позволяет создавать, редактировать и удалять семинары, а также отображать их в виде карточек. Для стилизации используется Tailwind CSS и DaisyUI.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/anovc/itstart.git
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите json-server:
   ```bash
   npx json-server seminars.json
   ```
4. Запустите приложение:
   ```bash
   npm start
   ```

## Структура проекта

- `src/app/page.js`: Главная страница приложения.
- `src/app/globals.css`: Глобальные стили, включая импорт Tailwind CSS и DaisyUI.
- `src/components/`: Директория с компонентами приложения.
  - `CreateModal.jsx`: Модальное окно для создания семинара.
  - `DatePicker.jsx`: Компонент для выбора даты.
  - `DeleteModal.jsx`: Модальное окно для удаления семинара.
  - `EditModal.jsx`: Модальное окно для редактирования семинара.
  - `SeminarCard.jsx`: Компонент для отображения карточки семинара.
  - `SeminarItems.jsx`: Компонент для управления семинарами (создание, редактирование, удаление).
  - `SeminarSkeleton.jsx`: Компонент для отображения скелетона при загрузке данных.
  - `SeminarsTable.jsx`: Компонент для отображения таблицы семинаров.
- `src/utils/fetchSeminars.js`: Утилита для получения данных о семинарах с сервера.

## Основные функции

- **Создание семинара**: Открывается модальное окно для ввода данных нового семинара.
- **Редактирование семинара**: Открывается модальное окно для изменения данных существующего семинара.
- **Удаление семинара**: Открывается модальное окно для подтверждения удаления семинара.
- **Отображение семинаров**: Семинары отображаются в виде карточек с возможностью редактирования и удаления.

## Технологии

- **Next.js**: Фреймворк для React, предоставляющий серверный рендеринг, статическую генерацию и маршрутизацию.
- **React**: Основная библиотека для построения пользовательского интерфейса.
- **Tailwind CSS**: Утилитарный CSS-фреймворк для стилизации.
- **DaisyUI**: Компонентная библиотека для Tailwind CSS.
- **react-hot-toast**: Библиотека для отображения уведомлений.
- **react-day-picker**: Библиотека для выбора даты.
- **json-server**: Простой сервер для работы с JSON-данными, используемый для имитации бэкенда.
