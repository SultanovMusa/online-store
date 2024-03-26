import React from 'react';
import { Link } from 'react-router-dom';
import scss from './NotFound.module.scss'; // импортируем стили из модульного CSS файла

const NotFound: React.FC = () => {
    return (
        <div className={scss.notFoundContainer}>
            <h1 className={scss.title}>404 - Страница не найдена</h1>
            <p className={scss.description}>Извините, запрошенная страница не найдена.</p>
            <Link to="/">Вернуться на главную</Link>
        </div>
    );
};

export default NotFound;
