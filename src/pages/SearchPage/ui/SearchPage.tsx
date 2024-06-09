import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './SearchPage.module.scss';
import { useSearchPage } from './useSearchPage';
import { Images } from 'entities/Images';
import { Container } from 'Shared/ui/Container';
import { Finder } from 'features/ Finder';

interface SearchPageProps {
    classes?: string;
}

const SearchPage = memo(({ classes }: SearchPageProps) => {
    const {
        form,
        onForm,
        onSubmit,
        onClear,
        ids,
        lastElementRef,
        isLastPage,
        isLoading,
    } = useSearchPage();

    return (
        <Container>
            <main className={classNames(cls.SearchPage, [classes])}>
                <Finder
                    onClear={onClear}
                    value={form.search}
                    onChange={onForm}
                    onSubmit={onSubmit}
                    inputName={'search'}
                />
                <Images />
                {!!ids && !isLastPage && !isLoading && (
                    <div ref={lastElementRef}></div>
                )}
            </main>
        </Container>
    );
});

export default SearchPage;
