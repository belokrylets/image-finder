import cls from './ImageList.module.scss';

export const Loaders = () => {
    const emptyCards = new Array(10).fill('');

    return (
        <>
            {emptyCards.map((_, index) => (
                <div key={index} className={cls.ImageCard} />
            ))}
        </>
    );
};
